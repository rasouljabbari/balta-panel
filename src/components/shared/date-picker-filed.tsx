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
  iconPosition = 'left',
  showDivider = true,
}: DatePickerFieldProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => setShowCalendar(false), showCalendar);

  const isLeft = iconPosition === 'left';

  return (
    <div
      ref={wrapperRef}
      className={`flex flex-col gap-1.5 relative  ${className}`}
    >
      <label className="text-sm text-gray-light-700 text-right">{label}</label>

      <div className="relative">
        {/* Divider */}
        {showDivider && (
          <div
            className={`bg-gray-light-300 absolute top-1/2 -translate-y-1/2 w-px h-9 ${
              isLeft ? 'left-10' : 'right-10'
            }`}
          />
        )}

        {/* Icon */}
        <CalendarIcon
          size={18}
          className={`absolute top-1/2 -translate-y-1/2 text-gray-500 ${
            isLeft ? 'left-3' : 'right-3'
          }`}
        />

        {/* Input */}
        <input
          value={value ? value.format('YYYY/MM/DD') : ''}
          placeholder={placeholder}
          readOnly
          onClick={() => setShowCalendar((prev) => !prev)}
          className={`
            w-full
            cursor-pointer
            border border-gray-light-300
            rounded-md
            h-10
            px-3
            placeholder:text-sm placeholder:text-gray-light-500
            ${isLeft ? '' : 'pr-10'}
          `}
        />
      </div>

      {showCalendar && (
        <div className="absolute top-full mt-2 z-50">
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
