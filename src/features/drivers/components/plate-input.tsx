
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FlagIcon } from '@/components/icons/drivers-icon';


interface PlateInputProps {
  value?: { first: number; letter: string; second: number; state: number };
  onChange?: (value: {
    first: number;
    letter: string;
    second: number;
    state: number;
  }) => void;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  label?: string;
}

interface PlateParts {
  part1: number; 
  part2: number; 
  letter: string;
  part3: number; 
}

const LETTERS = [
  'ب',
  'پ',
  'ت',
  'ث',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'ژ',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  'ظ',
  'ع',
  'غ',
  'ف',
  'ق',
  'ک',
  'گ',
  'ل',
  'م',
  'ن',
  'و',
  'ه',
  'ی',
];

export default function PlateInput({
  value,
  onChange,
  error,
  errorText,
  required,
  label,
}: PlateInputProps) {
  const [plate, setPlate] = useState<PlateParts>({
    part1: value?.first ?? 0,
    part2: value?.second ?? 0,
    letter: value?.letter ?? 'ب',
    part3: value?.state ?? 0,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  const handleChange = (key: keyof PlateParts, val: string) => {
    setPlate((prev) => {
      const newPlate =
        key === 'letter'
          ? { ...prev, letter: val }
          : { ...prev, [key]: parseInt(val.replace(/\D/g, ''), 10) || 0 };

      if (
        onChange &&
        (newPlate.part1 !== prev.part1 ||
          newPlate.part2 !== prev.part2 ||
          newPlate.part3 !== prev.part3 ||
          newPlate.letter !== prev.letter)
      ) {
        onChange({
          first: newPlate.part1,
          letter: newPlate.letter,
          second: newPlate.part2,
          state: newPlate.part3,
        });
      }

      return newPlate;
    });
  };


 useEffect(() => {
   if (value) {
     setPlate({
       part1: Number(value.first) || 0,
       part2: Number(value.second) || 0,
       letter: value.letter || 'ب',
       part3: Number(value.state) || 0,
     });
   }
 }, [value]);


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
        <label className="text-sm text-gray-light-700 flex items-center gap-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-md">
          <input
            type="number"
            max={99}
            value={plate.part1 === 0 ? '' : plate.part1}
            onChange={(e) => {
              let val = e.target.value;
              if (val.length > 2) val = val.slice(0, 2);
              handleChange('part1', val);
            }}
            className={`w-10 h-10 text-center rounded-xl border ${error ? 'border-red-500' : 'border-gray-300'}`}
          />

          <div className="w-px h-10 border border-dashed border-gray-modern-300" />

          <input
            type="number"
            max={999}
            value={plate.part2 === 0 ? '' : plate.part2}
            onChange={(e) => {
              let val = e.target.value;
              if (val.length > 3) val = val.slice(0, 3);
              handleChange('part2', val);
            }}
            className={`w-10 h-10 text-center rounded-xl border ${error ? 'border-red-500' : 'border-gray-300'}`}
          />

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`w-15 h-10 text-center rounded-xl border flex items-center justify-between p-md ${error ? 'border-red-500' : 'border-gray-300'}`}
            >
              {plate.letter}
              <ChevronDown size={20} color="var(--color-gray-light-500)" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-md z-50 max-h-40 overflow-y-auto">
                {LETTERS.map((l) => (
                  <div
                    key={l}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleChange('letter', l)}
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="number"
            max={99}
            value={plate.part3 === 0 ? '' : plate.part3}
            onChange={(e) => {
              let val = e.target.value;
              if (val.length > 2) val = val.slice(0, 2); 
              handleChange('part3', val);
            }}
            className={`w-10 h-10 text-center rounded-xl border ${error ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>

        <div className="bg-gray-light-100 h-10 w-10 flex-center rounded-md">
          <FlagIcon />
        </div>
      </div>

      {error && errorText && (
        <span className="text-xs text-red-500">{errorText}</span>
      )}
    </div>
  );
}