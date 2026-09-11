const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function parse(d: string | Date): Date {
  return d instanceof Date ? d : new Date(d + (d.length === 10 ? "T00:00:00Z" : ""));
}

/** 11 SEP 2026 */
export function longDate(d: string | Date): string {
  const x = parse(d);
  return `${String(x.getUTCDate()).padStart(2, "0")} ${MONTHS[x.getUTCMonth()]} ${x.getUTCFullYear()}`;
}

/** 11 SEP */
export function shortDate(d: string | Date): string {
  const x = parse(d);
  return `${String(x.getUTCDate()).padStart(2, "0")} ${MONTHS[x.getUTCMonth()]}`;
}
