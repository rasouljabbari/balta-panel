import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/utils/cn';
import { CalendarIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import DateObject from 'react-date-object';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar } from 'react-multi-date-picker';
import type { DatePickerFieldProps } from './type';

export default function DatePickerField({
  label,
  value,
  onChange,
  placeholder = 'انتخاب تاریخ',
  className = '',
  required = false,
  error = false,
  errorText,
}: DatePickerFieldProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setShowCalendar(false), showCalendar);
  // حداکثر تاریخ امروز
  const today = new DateObject({ calendar: persian });

  const handleChange = (date: DateObject) => {
    if (date.unix > today.unix) {
      setLocalError('نمی‌توانید تاریخ آینده را انتخاب کنید.');
      return;
    }
    setLocalError(null);
    onChange?.(date);
    setShowCalendar(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`flex flex-col gap-1.5 relative  ${className}`}
    >
      <label className="text-sm text-gray-light-700 text-right flex items-center gap-1">
        <span className="text-sm font-medium text-rtext-secondary-700">{label}</span>
        {required && <span className="text-rtext-brand-tertiary-600">*</span>}
      </label>
      <div className="relative">
        <div
          className="bg-gray-light-300 absolute top-1/2 -translate-y-1/2 w-px h-9 left-10"
        />

        <CalendarIcon
          size={18}
          className="absolute top-1/2 -translate-y-1/2 text-gray-500 left-3"
        />

        <input
          value={value ? value.format('YYYY/MM/DD') : ''}
          placeholder={placeholder}
          readOnly
          onClick={() => setShowCalendar((prev) => !prev)}
          className={cn("w-full cursor-pointer border border-gray-light-300 rounded-md h-10 px-3 placeholder:text-sm placeholder:text-gray-light-500",
            error && "border-2 border-rborder-error"
          )}
        />
      </div>

      {(error && typeof errorText === 'string') &&
        <span className="text-sm text-rtext-error-primary-600">
          {localError || errorText}
        </span>
      }

      {localError &&
        < span className="text-sm text-rtext-error-primary-600" >
          {localError}
        </span >
      }

      {showCalendar && (
        <div className="absolute top-full mt-2 z-50">
          <Calendar
            calendar={persian}
            locale={persian_fa}
            value={value}
            maxDate={today}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
