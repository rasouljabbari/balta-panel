import { useRef, useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar } from 'react-multi-date-picker';
import { useClickOutside } from '@/hooks/use-click-outside';
import type { DatePickerFieldProps } from './type';

export default function DatePickerField({
  label,
  value,
  onChange,
  placeholder = 'انتخاب تاریخ',
  className = '',
}: DatePickerFieldProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setShowCalendar(false), showCalendar);

  return (
    <div
      ref={wrapperRef}
      className={`flex flex-col gap-1.5 relative w-[236px] ${className}`}
    >
      <label className="text-sm text-gray-light-700 text-right">{label}</label>

      <div className="relative">
        {/* divider */}
        <div className="bg-gray-light-300 absolute left-10 top-1/2 -translate-y-1/2 w-px h-9" />

        {/* icon */}
        <CalendarIcon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        {/* input */}
        <input
          value={value ? value.format('YYYY/MM/DD') : ''}
          placeholder={placeholder}
          readOnly
          onClick={() => setShowCalendar((prev) => !prev)}
          className="cursor-pointer border border-rborder-primary rounded-md w-[236px] p-2 placeholder:text-sm placeholder:text-gray-light-500 h-10"
        />
      </div>

      {showCalendar && (
        <div className="absolute top-full mt-2 z-9999">
          <Calendar
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={(date) => {
              onChange?.(date);
              setShowCalendar(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
