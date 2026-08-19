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

export function render_visual_acuity_table(MAR_values: readonly number[]): string {
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