import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { Check, ChevronDown } from 'lucide-react';
import type { DropDownProps } from './type';



export default function Dropdown({ options, value, onChange, className }: DropDownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      {/* trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-full max-w-[170px] cursor-pointer items-center justify-between rounded-md border border-rborder-primary px-3"
      >
        <p className="text-sm text-gray-light-700">
          {selected?.label || 'انتخاب کنید'}
        </p>

        <ChevronDown size={20} color="#667085" />
      </div>

      {/* dropdown */}
      {open && (
        <div className="absolute py-xs px-sm top-12 z-50 w-full max-w-[170px] rounded-md border border-gray-light-200 bg-white shadow-md">
          {options.map((opt) => {
            const isActive = opt.value === value;

            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={cn(
                  'flex cursor-pointer items-center justify-between p-[10px] text-sm font-medium text-gray-light-900 rounded-sm',
                  isActive && 'bg-gray-light-50',
                )}
              >
                <span>{opt.label}</span>

                {isActive && (
                  <div>
                    <Check size={20} color="#B71A33" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}