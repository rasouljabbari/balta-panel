type NormalizeDigitsInput = string | number | null | undefined;

/**
 * Converts Arabic-Indic (٠١٢٣٤٥٦٧٨٩) and Persian (۰۱۲۳۴۵۶۷۸۹) digits to ASCII (0-9).
 * Leaves other characters intact.
 */
export function normalizeDigits(input: NormalizeDigitsInput): string {
  if (input === null || input === undefined) return '';
  const str = String(input);

  // Arabic-Indic: \u0660-\u0669, Persian: \u06F0-\u06F9
  return str
    .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
}

