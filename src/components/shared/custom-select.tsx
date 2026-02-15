import { cn } from '@/utils/cn';
import { Controller } from 'react-hook-form';
import Select, { type MultiValue, type SingleValue } from 'react-select';
import type { CustomSelectProps, Option } from './type';



export default function CustomSelect({
  name,
  control,
  options,
  placeholder,
  isMulti = false,
  isDisabled,
  error,
  label,
  value,
  onChange,
}: CustomSelectProps) {
  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValue = isMulti
            ? options.filter((o) =>
              (field.value as number[] | undefined)?.includes(
                o.value as number,
              ),
            )
            : options.find((o) => o.value === field.value) || null;

          return (
            <div className="flex flex-col gap-1">
              {label && (
                <label className="text-gray-light-700 text-sm">
                  {label}
                </label>
              )}
              <div className={cn(error && 'dv-select-error')}>
                <Select
                  isMulti={isMulti}
                  isDisabled={isDisabled}
                  options={options}
                  placeholder={placeholder}
                  value={selectedValue}
                  onChange={(selected) => {
                    if (isMulti) {
                      const vals = (selected as MultiValue<Option>).map(
                        (s) => s.value,
                      );
                      field.onChange(vals);
                    } else {
                      field.onChange(
                        (selected as SingleValue<Option>)?.value ?? null,
                      );
                    }
                  }}
                  classNamePrefix="my-select"
                />
              </div>
              {error && <p className="text-sm text-rtext-error-primary-600">{error}</p>}
            </div>
          );
        }}
      />
    );
  }

  // حالت بدون RHF
  const selectedValue = isMulti
    ? (value as Option[] | undefined) || []
    : (value as Option) || null;

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-gray-light-900 text-sm mb-1">{label}</label>
      )}
      <Select
        isMulti={isMulti}
        isDisabled={isDisabled}
        options={options}
        placeholder={placeholder}
        value={selectedValue}
        onChange={(selected) => {
          if (isMulti) {
            onChange?.(selected as MultiValue<Option>);
          } else {
            onChange?.(selected as SingleValue<Option>);
          }
        }}
        classNamePrefix="my-select"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
