// Created by GPT-5.6 Sol Thinking Extended [web]. Revised by AndyBRoswell.

const table_headers = [
  'Decimal visual acuity',
  'LogMAR acuity',
  'Snellen fraction (6 m)',
  'Snellen fraction (20 ft)',
  'Landolt ring gap (arcmin)',
] as const;

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

function make_cell(value: string): string {
  return `<td>${value}</td>`;
}

export function create_visual_acuity_table(MAR_values: readonly number[]): string {
  if (MAR_values.some((MAR) => !Number.isFinite(MAR) || MAR <= 0)) { throw new RangeError('All MAR values must be finite positive numbers.'); }
  const header_html = table_headers.map((header) => `<th scope="col">${header}</th>`).join('');
  const row_html: string[] = [];
  for (const MAR of MAR_values) {
    const LogMAR = Math.log10(MAR);
    const decimal_acuity = 1 / MAR;
    const cells = [
      format_decimal_acuity(decimal_acuity),
      format_LogMAR(LogMAR),
      format_Snellen(6, MAR),
      format_Snellen(20, MAR),
      MAR.toFixed(3),
    ];
    row_html.push(`<tr>${cells.map(make_cell).join('')}</tr>`);
  }
  return [
    '<table>',
    '<caption>Visual acuity grades</caption>',
    `<thead><tr>${header_html}</tr></thead>`,
    `<tbody>${row_html.join('')}</tbody>`,
    '</table>',
  ].join('');
}

export function create_distance_acuity_PPI_table(visual_acuities: readonly number[], viewing_distances_cm: readonly number[]): string {
  if (visual_acuities.some(v => v <= 0)) { throw new RangeError("Visual acuity must be positive."); }
  if (viewing_distances_cm.some(d => d <= 0)) { throw new RangeError("Viewing distance must be positive."); }
  const distance_headers = viewing_distances_cm.map(viewing_distance_cm => `<th scope="col">${viewing_distance_cm}</th>`).join("");
  const rows = visual_acuities.map(visual_acuity => {
    const cells = viewing_distances_cm.map(viewing_distance_cm => {
      const distance_in = viewing_distance_cm / 2.54;
      const theta_rad = Math.PI / (180 * 60 * visual_acuity); // theta = 1 / V arcmin
      const pixel_pitch_in = 2 * distance_in * Math.tan(theta_rad / 2);
      const ppi = 1 / pixel_pitch_in;
      return `<td>${ppi.toFixed(1)}</td>`;
    }).join("");
    return `<tr><th scope="row">${visual_acuity.toFixed(2)}</th>${cells}</tr>`;
  }).join("\n");
  return [
    "<table>",
    "  <thead>",
    `    <tr><th rowspan="2">Visual Acuity</th>`,
    `      <th colspan="${viewing_distances_cm.length}">Viewing Distance (cm)</th></tr>`,
    `    <tr>${distance_headers}</tr>`,
    "  </thead>",
    `  <tbody>\n${rows}\n  </tbody>`,
    "</table>",
  ].join("\n");
}

export function create_diagonal_resolution_PPI_table(resolutions: readonly (readonly [ number, number ])[], diagonal_sizes_in: readonly number[],): string {
  if (resolutions.some(([ width, height ]) => width <= 0 || height <= 0)) { throw new RangeError("Resolution must be positive."); }
  if (diagonal_sizes_in.some(size => size <= 0)) { throw new RangeError("Diagonal size must be positive."); }
  const size_headers = diagonal_sizes_in.map(size => `<th scope="col">${size}</th>`).join("");
  const rows = resolutions.map(([ width, height ]) => {
    const diagonal_pixels = Math.hypot(width, height);
    const cells = diagonal_sizes_in.map(size => {
      const ppi = diagonal_pixels / size;
      return `<td>${ppi.toFixed(1)}</td>`;
    }).join("");
    return `<tr><th scope="row">${width} × ${height}</th>${cells}</tr>`;
  }).join("\n");
  return [
    "<table>",
    "  <thead>",
    `    <tr><th rowspan="2">Resolution</th>`,
    `      <th colspan="${diagonal_sizes_in.length}">Diagonal Size (in)</th></tr>`,
    `    <tr>${size_headers}</tr>`,
    "  </thead>",
    `  <tbody>\n${rows}\n  </tbody>`,
    "</table>",
  ].join("\n");
}