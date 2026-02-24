import type { OTPInputProps } from '@/components/shared/type';
import { cn } from '@/utils/cn';
import type { ClipboardEvent, KeyboardEvent } from 'react';
import { useEffect, useRef } from 'react';

export default function OTPInput({
  length = 4,
  value,
  onChange,
  onComplete,
  error,
  className,
  ...props
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  useEffect(() => {
    if (value.length <= length) {
      value.split('').forEach((char, index) => {
        inputRefs.current[index]!.value = char;
      });

      for (let i = value.length; i < length; i++) {
        if (inputRefs.current[i]) {
          inputRefs.current[i]!.value = '';
        }
      }
    }
  }, [value, length]);

  const handleInput = (index: number, inputValue: string) => {
    const numericValue = inputValue.replace(/\D/g, '');

    if (!numericValue) return;

    const char = numericValue.slice(-1);
    inputRefs.current[index]!.value = char;

    const newValue = value.split('');
    newValue[index] = char;

    const updatedValue = newValue.slice(0, length).join('');
    onChange(updatedValue);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (updatedValue.length === length && !updatedValue.includes('')) {
      onComplete?.(updatedValue);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();

      const newValue = value.split('');

      if (inputRefs.current[index]?.value) {
        inputRefs.current[index]!.value = '';
        newValue[index] = '';
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        inputRefs.current[index - 1]!.value = '';
        newValue[index - 1] = '';
      }

      onChange(newValue.join(''));
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, length);

    if (!pasted) return;

    pasted.split('').forEach((char, index) => {
      inputRefs.current[index]!.value = char;
    });

    onChange(pasted.padEnd(length, ''));

    const focusIndex = Math.min(pasted.length, length - 1);
    inputRefs.current[focusIndex]?.focus();

    if (pasted.length === length) {
      onComplete?.(pasted);
    }
  };

  return (
    <div className={cn('flex flex-col gap-xs', className)} dir="ltr">
      <div className="flex gap-2xl">
        {Array.from({ length }).map((_, index) => (
          <input
            placeholder='0'
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            dir="ltr"
            style={{ direction: 'ltr' }}
            className={cn(
              'w-16 h-16 text-center text-xl font-semibold rounded-lg border-2',
              'focus:outline-none focus:ring-2 transition-colors text-rtext-primary-900 text-5xl placeholder:text-gray-light-300',
              error
                ? 'border-utility-error-500 focus:ring-utility-error-200'
                : 'border-gray-light-300 focus:ring-gray-200 focus:border-gray-400',
              'bg-base-white text-rtext-primary-900',
              'border-rborder-primary',
            )}
            onInput={(e) =>
              handleInput(index, (e.target as HTMLInputElement).value)
            }
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            {...props}
          />
        ))}
      </div>

      {error && <p className="text-sm text-utility-error-500 text-center mt-xs">{error}</p>}
    </div>
  );
}
