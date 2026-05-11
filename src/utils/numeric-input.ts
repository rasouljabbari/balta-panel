import { normalizeDigits } from '@/utils/normalize-digits';

export const numericInputProps = {
  type: 'text',
  inputMode: 'numeric' as const,
  pattern: '[0-9۰-۹٠-٩]*',
};

export function normalizeNumericInput(value: unknown, maxLength?: number): string {
  const digits = normalizeDigits(value as any).replace(/\D/g, '');
  if (!maxLength) return digits;
  return digits.slice(0, maxLength);
}

