// Created by GPT-5.6 Sol Thinking Extended [web] and GPT-5.6 Sol Medium [codex]. Revised by AndyBRoswell.

import * as node_HTML_parser from 'node-html-parser'
import * as bib from '@cs-first-aid/bibkit/bib'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as util from '@cs-first-aid/util'
import '@/data/materials/import materials.ts'

export interface Table_Rendering_Options<Row, Column> {
  include_row?: (row: Readonly<Row>, index: number) => boolean;
  include_column?: (column: Column, index: number) => boolean;
}

export interface Visual_Acuity_Row {
  readonly MAR: number;
  readonly decimal_acuity: number;
  readonly LogMAR: number;
  readonly '5-mark': number;
}

export interface Visual_Acuity_Table_Data {
  readonly rows: readonly Visual_Acuity_Row[];
}

export interface Distance_Acuity_PPI_Row {
  readonly visual_acuity: number;
  readonly PPI_values: readonly number[];
}

export interface Distance_Acuity_PPI_Table_Data {
  readonly viewing_distances_cm: readonly number[];
  readonly rows: readonly Distance_Acuity_PPI_Row[];
}

export interface Diagonal_Resolution_PPI_Row {
  readonly resolution: readonly [ number, number ];
  readonly PPI_values: readonly number[];
}

export interface Diagonal_Resolution_PPI_Table_Data {
  readonly diagonal_sizes_in: readonly number[];
  readonly rows: readonly Diagonal_Resolution_PPI_Row[];
}

const visual_acuity_columns = { // Actual headings are also the stable column identifiers exposed to callers.
  'Decimal visual acuity': (row: Visual_Acuity_Row) => format_decimal_acuity(row.decimal_acuity),
  'LogMAR acuity': (row: Visual_Acuity_Row) => format_LogMAR(row.LogMAR),
  '5-mark': (row: Visual_Acuity_Row) => row['5-mark'].toFixed(1),
  'Snellen fraction (6 m)': (row: Visual_Acuity_Row) => format_Snellen(6, row.MAR),
  'Snellen fraction (20 ft)': (row: Visual_Acuity_Row) => format_Snellen(20, row.MAR),
  'Landolt ring gap (arcmin)': (row: Visual_Acuity_Row) => row.MAR.toFixed(3),
};

function format_decimal_acuity(decimal_acuity: number): string {
  if (decimal_acuity < 0.2) { return decimal_acuity.toFixed(3).replace(/0$/, ''); }
  return decimal_acuity.toFixed(2);
}

function format_LogMAR(LogMAR: number): string {
  if (LogMAR > 0) { return `+${LogMAR.toFixed(2)}`; }
  if (LogMAR < 0) { return `−${Math.abs(LogMAR).toFixed(2)}`; }
  return '0.00';
}

function format_Snellen(test_distance: number, MAR: number): string {
  const denominator = test_distance * MAR;
  const nearest_integer = Math.round(denominator);
  if (Math.abs(denominator - nearest_integer) < 1e-9) { return `${test_distance}/${nearest_integer}`; }
  return `${test_distance}/${denominator.toFixed(1)}`;
}

function create_element(tag_name: string, attributes: Record<string, string> = {}, text?: string): node_HTML_parser.HTMLElement {
  const element = new node_HTML_parser.HTMLElement(tag_name, {}, ''); // Construct nodes without parsing an HTML fragment.
  element.setAttributes(attributes);
  if (text !== undefined) { element.textContent = text; }
  return element;
}

export function create_visual_acuity_table_data(MAR_values: readonly number[]): Visual_Acuity_Table_Data {
  if (MAR_values.some((MAR) => !Number.isFinite(MAR) || MAR <= 0)) { throw new RangeError('All MAR values must be finite positive numbers.'); }
  return {
    rows: MAR_values.map(MAR => {
      const LogMAR = Math.log10(MAR);
      return {
        MAR,
        decimal_acuity: 1 / MAR,
        LogMAR,
        '5-mark': 5 - LogMAR, // GB/T 11533-2011 defines L = 5 - lg(MAR).
      };
    }),
  };
}

export function visual_acuity_table_data_to_HTML_table(data: Visual_Acuity_Table_Data, options: Table_Rendering_Options<Visual_Acuity_Row, keyof typeof visual_acuity_columns> = {}): node_HTML_parser.HTMLElement {
  const columns = Object.entries(visual_acuity_columns).filter(([ column, ], index) => options.include_column?.(column as keyof typeof visual_acuity_columns, index) ?? true); // Filter before construction so the DOM never contains hidden columns.
  const rows = data.rows.filter((row, index) => options.include_row?.(row, index) ?? true); // Preserve the source order of included rows.
  const table = create_element('table');
  table.appendChild(create_element('caption', {}, 'Visual acuity grades'));
  const header_row = create_element('tr');
  for (const [ column, ] of columns) { header_row.appendChild(create_element('th', { scope: 'col', }, column)); }
  const head = create_element('thead');
  head.appendChild(header_row);
  table.appendChild(head);
  const body = create_element('tbody');
  for (const row of rows) {
    const table_row = create_element('tr');
    for (const [ , format, ] of columns) { table_row.appendChild(create_element('td', {}, format(row))); }
    body.appendChild(table_row);
  }
  table.appendChild(body);
  return table;
}

export function create_visual_acuity_table(MAR_values: readonly number[]): string {
  return visual_acuity_table_data_to_HTML_table(create_visual_acuity_table_data(MAR_values)).toString(); // MDX set:html still consumes serialized markup.
}

export function create_distance_acuity_PPI_table_data(visual_acuities: readonly number[], viewing_distances_cm: readonly number[]): Distance_Acuity_PPI_Table_Data {
  if (visual_acuities.some(v => v <= 0)) { throw new RangeError("Visual acuity must be positive."); }
  if (viewing_distances_cm.some(d => d <= 0)) { throw new RangeError("Viewing distance must be positive."); }
  return {
    viewing_distances_cm,
    rows: visual_acuities.map(visual_acuity => ({
      visual_acuity,
      PPI_values: viewing_distances_cm.map(viewing_distance_cm => {
        const distance_in = viewing_distance_cm / 2.54;
        const theta_rad = Math.PI / (180 * 60 * visual_acuity); // theta = 1 / V arcmin
        const pixel_pitch_in = 2 * distance_in * Math.tan(theta_rad / 2);
        return 1 / pixel_pitch_in; // Keep full precision until the table node formats the cell.
      }),
    })),
  };
}

export function distance_acuity_PPI_table_data_to_HTML_table(data: Distance_Acuity_PPI_Table_Data, options: Table_Rendering_Options<Distance_Acuity_PPI_Row, number> = {}): node_HTML_parser.HTMLElement {
  const columns = data.viewing_distances_cm.map((viewing_distance_cm, index) => ({ viewing_distance_cm, index, })).filter(({ viewing_distance_cm, index, }) => options.include_column?.(viewing_distance_cm, index) ?? true); // Retain indices for aligned PPI lookup after filtering.
  const rows = data.rows.filter((row, index) => options.include_row?.(row, index) ?? true);
  const table = create_element('table');
  const head = create_element('thead');
  const group_header_row = create_element('tr');
  group_header_row.appendChild(create_element('th', { rowspan: '2', }, 'Visual Acuity'));
  group_header_row.appendChild(create_element('th', { colspan: columns.length.toString(), }, 'Viewing Distance (cm)'));
  head.appendChild(group_header_row);
  const column_header_row = create_element('tr');
  for (const { viewing_distance_cm, } of columns) { column_header_row.appendChild(create_element('th', { scope: 'col', }, viewing_distance_cm.toString())); }
  head.appendChild(column_header_row);
  table.appendChild(head);
  const body = create_element('tbody');
  for (const row of rows) {
    const table_row = create_element('tr');
    table_row.appendChild(create_element('th', { scope: 'row', }, row.visual_acuity.toFixed(2)));
    for (const { index, } of columns) { table_row.appendChild(create_element('td', {}, row.PPI_values[index]!.toFixed(1))); }
    body.appendChild(table_row);
  }
  table.appendChild(body);
  return table;
}

export function create_distance_acuity_PPI_table(visual_acuities: readonly number[], viewing_distances_cm: readonly number[]): string {
  return distance_acuity_PPI_table_data_to_HTML_table(create_distance_acuity_PPI_table_data(visual_acuities, viewing_distances_cm)).toString();
}

export function create_diagonal_resolution_PPI_table_data(resolutions: readonly (readonly [ number, number ])[], diagonal_sizes_in: readonly number[],): Diagonal_Resolution_PPI_Table_Data {
  if (resolutions.some(([ width, height ]) => width <= 0 || height <= 0)) { throw new RangeError("Resolution must be positive."); }
  if (diagonal_sizes_in.some(size => size <= 0)) { throw new RangeError("Diagonal size must be positive."); }
  return {
    diagonal_sizes_in,
    rows: resolutions.map(resolution => ({
      resolution,
      PPI_values: diagonal_sizes_in.map(size => Math.hypot(...resolution) / size),
    })),
  };
}

export function diagonal_resolution_PPI_table_data_to_HTML_table(data: Diagonal_Resolution_PPI_Table_Data, options: Table_Rendering_Options<Diagonal_Resolution_PPI_Row, number> = {}): node_HTML_parser.HTMLElement {
  const columns = data.diagonal_sizes_in.map((diagonal_size_in, index) => ({ diagonal_size_in, index, })).filter(({ diagonal_size_in, index, }) => options.include_column?.(diagonal_size_in, index) ?? true); // Retain indices for aligned PPI lookup after filtering.
  const rows = data.rows.filter((row, index) => options.include_row?.(row, index) ?? true);
  const table = create_element('table');
  const head = create_element('thead');
  const group_header_row = create_element('tr');
  group_header_row.appendChild(create_element('th', { rowspan: '2', }, 'Resolution'));
  group_header_row.appendChild(create_element('th', { colspan: columns.length.toString(), }, 'Diagonal Size (in)'));
  head.appendChild(group_header_row);
  const column_header_row = create_element('tr');
  for (const { diagonal_size_in, } of columns) { column_header_row.appendChild(create_element('th', { scope: 'col', }, diagonal_size_in.toString())); }
  head.appendChild(column_header_row);
  table.appendChild(head);
  const body = create_element('tbody');
  for (const row of rows) {
    const table_row = create_element('tr');
    table_row.appendChild(create_element('th', { scope: 'row', }, `${row.resolution[0]} × ${row.resolution[1]}`));
    for (const { index, } of columns) { table_row.appendChild(create_element('td', {}, row.PPI_values[index]!.toFixed(1))); }
    body.appendChild(table_row);
  }
  table.appendChild(body);
  return table;
}

export function create_diagonal_resolution_PPI_table(resolutions: readonly (readonly [ number, number ])[], diagonal_sizes_in: readonly number[],): string {
  return diagonal_resolution_PPI_table_data_to_HTML_table(create_diagonal_resolution_PPI_table_data(resolutions, diagonal_sizes_in)).toString();
}

export const mangled_references = bib.mangle_references([
  ...catalog.filter(m => m.type === 'paper-conference' && util.ieq(m.title!, 'Optimal Rendering for Colour Matrix Displays'), { count: 1 })
])

export const printed_bib = bib.print_bibliography(mangled_references)
