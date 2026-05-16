import { useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { Clock3Icon } from 'lucide-react';
import { useClickOutside } from '@/hooks/use-click-outside';
import type { TimePickerFieldProps } from './type';


export default function TimePickerField({
  label,
  value,
  onChange,
  placeholder = 'انتخاب ساعت (14:30)',
  className = '',
  required = false,
  error = false,
  errorText,
}: TimePickerFieldProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setOpen(false), open);

  const hours = Array.from({ length: 24 }).map((_, i) =>
    String(i).padStart(2, '0'),
  );

  const minutes = Array.from({ length: 60 }).map((_, i) =>
    String(i).padStart(2, '0'),
  );

  const [h = '00', m = '00'] = value?.split(':') || [];

  const handleManualInput = (val: string) => {
    const cleaned = val.replace(/[^0-9:]/g, '');

    if (cleaned.length <= 5) {
      onChange?.(cleaned);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cn('relative flex flex-col gap-1.5', className)}
    >
      <label className="text-sm text-gray-light-700 flex items-center gap-1">
        <span className="font-medium">{label}</span>
        {required && <span className="text-rtext-brand-tertiary-600">*</span>}
      </label>

      <div className="relative">
        <Clock3Icon
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          value={value || ''}
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
          onChange={(e) => handleManualInput(e.target.value)}
          className={cn(
            'w-full h-9.5 border rounded-md px-8 pl-10 outline-none  border-rborder-primary',
            error && 'border-red-500',
          )}
        />
      </div>

      {error && errorText && (
        <span className="text-sm text-rtext-error-primary-600">
          {errorText}
        </span>
      )}

      {/* dropdown picker */}
      {open && (
        <div className="absolute top-15 mt-2 z-50 bg-white border rounded-md shadow-lg p-3 flex gap-2 border-rborder-primary">
          {/* minute */}
          <select
            value={m}
            onChange={(e) => onChange?.(`${h}:${e.target.value}`)}
            className="border rounded px-2 py-1 border-rborder-primary"
          >
            {minutes.map((mn) => (
              <option key={mn} value={mn}>
                {mn}
              </option>
            ))}
          </select>
          {/* hour */}
          <select
            value={h}
            onChange={(e) => onChange?.(`${e.target.value}:${m}`)}
            className="border rounded px-2 py-1 border-rborder-primary"
          >
            {hours.map((hr) => (
              <option key={hr} value={hr}>
                {hr}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}