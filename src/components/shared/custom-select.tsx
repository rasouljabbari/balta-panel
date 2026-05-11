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
  required = false,
  onInputChange,
}: CustomSelectProps & { required?: boolean }) {
  // حالت با RHF
  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValue = isMulti
            ? options.filter((o) =>
                (field.value as (string | number)[] | undefined)?.includes(
                  o.value as string | number,
                ),
              )
            : options.find((o) => o.value === field.value) || null;

          return (
            <div className="flex flex-col gap-1">
              {label && (
                <label className="text-gray-light-700 text-sm flex items-center gap-1">
                  <span className="text-sm font-medium text-rtext-secondary-700">
                    {label}
                  </span>
                  {required && (
                    <span className="text-rtext-brand-tertiary-600">*</span>
                  )}
                </label>
              )}
              <div className={cn(error && 'dv-select-error')}>
                <Select
                  isMulti={isMulti}
                  isDisabled={isDisabled}
                  options={options}
                  placeholder={placeholder}
                  value={selectedValue}
                  onInputChange={onInputChange}
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
              {error && (
                <p className="text-sm text-rtext-brand-tertiary-600 mt-1">
                  {error}
                </p>
              )}
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
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-gray-light-700 text-sm flex items-center gap-1">
          <span className="text-sm font-medium text-rtext-secondary-700">
            {label}
          </span>
          {required && <span className="text-rtext-brand-tertiary-600">*</span>}
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
              onChange?.(selected as MultiValue<Option>);
            } else {
              onChange?.(selected as SingleValue<Option>);
            }
          }}
          classNamePrefix="my-select"
        />
        {error && (
          <p className="text-sm text-rtext-error-primary-600 mt-1">{error}</p>
        )}
      </div>
    </div>
  );
}