import { FlagIcon } from '@/components/icons/drivers-icon';
import { cn } from '@/utils/cn';
import { normalizeNumericInput, numericInputProps } from '@/utils/numeric-input';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PERSIAN_LETTERS } from '../data';
import type { PlateInputProps, PlateParts } from '../types';

export default function PlateInput({
  value,
  onChange,
  error,
  required,
  label,
  showFlag = true,
}: PlateInputProps & { showFlag?: boolean }) {
  const [plate, setPlate] = useState<PlateParts>({
    first: value?.first ?? '',
    second: value?.second ?? '',
    letter: value?.letter ?? '',
    state: value?.state ?? '',
  });

  useEffect(() => {
    if (!value) return;

    setPlate({
      first: String(value.first ?? ''),
      letter: value.letter ?? '',
      second: String(value.second ?? ''),
      state: String(value.state ?? ''),
    });
  }, [value]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (key: keyof PlateParts, val: string) => {
    setPlate((prev) => {
      const newPlate =
        key === 'letter'
          ? { ...prev, letter: val }
          : {
            ...prev,
            [key]: normalizeNumericInput(val),
          };

      if (
        onChange &&
        (newPlate.first !== prev.first ||
          newPlate.second !== prev.second ||
          newPlate.state !== prev.state ||
          newPlate.letter !== prev.letter)
      ) {
        onChange({
          first: newPlate.first,
          letter: newPlate.letter,
          second: newPlate.second,
          state: newPlate.state,
        });
      }

      return newPlate;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-0.5 relative">
      {label && (
        <label className="text-gray-light-900 text-sm flex items-center gap-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="flex justify-between items-center w-fit gap-2">
        <div className="flex items-center gap-md">

          <input
            aria-label="state"
            {...numericInputProps}
            max={99}
            value={plate.state}
            onChange={(e) => {
              const val = normalizeNumericInput(e.target.value, 2);
              handleChange('state', val);
            }}
            className={cn("w-10 h-10 text-center rounded-xl border", error ? 'border-red-500' : 'border-gray-300')}
          />

          <div className="w-px h-10 border border-dashed border-gray-modern-300" />

          <input
            aria-label="second"
            {...numericInputProps}
            max={999}
            value={plate.second}
            onChange={(e) => {
              const val = normalizeNumericInput(e.target.value, 3);
              handleChange('second', val);
            }}
            className={cn("w-14 h-10 text-center rounded-xl border", error ? 'border-red-500' : 'border-gray-300')}
          />

          <div className="relative" ref={dropdownRef}>
            <button
              aria-label="ChevronDown"
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={cn("w-15 h-10 text-center rounded-xl border flex items-center justify-between p-md", error ? 'border-red-500' : 'border-gray-300')}
            >
              {plate.letter}
              <ChevronDown size={20} color="var(--color-gray-light-500)" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 max-h-40 w-15 overflow-y-auto rounded border border-gray-300 bg-white shadow-md">
                {PERSIAN_LETTERS.map((item) => (
                  <div
                    key={item}
                    className="cursor-pointer px-3 py-1 hover:bg-gray-100"
                    onClick={() => {
                      handleChange('letter', String(item));
                      setDropdownOpen(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            aria-label="first"
            {...numericInputProps}
            max={99}
            value={plate.first}
            onChange={(e) => {
              const val = normalizeNumericInput(e.target.value, 2);
              handleChange('first', val);
            }}
            className={cn("w-10 h-10 text-center rounded-xl border", error ? 'border-red-500' : 'border-gray-300')}
          />
        </div>

        {showFlag && (
          <div className="bg-gray-light-100 h-10 w-10 flex-center rounded-md">
            <FlagIcon />
          </div>
        )}
      </div>

      {error && (
        <span className="text-sm text-rtext-error-primary-600">پلاک خودرو الزامی است</span>
      )}
    </div>
  );
}