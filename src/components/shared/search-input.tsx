import { cn } from '@/utils/cn';
import { Input } from 'dst-rg';
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { SearchInputProps } from './type';



export default function SearchInput({
  containerClassName,
  inputClassName,
  icon,
  iconPosition = 'right',
  onSearch,
  delay = 500,
  searchValue,
  ...props
}: SearchInputProps) {
  const isRight = iconPosition === 'right';

  const [value, setValue] = useState(searchValue ?? "");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      onSearch(value);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, onSearch]);


  return (
    <div className={cn('relative', containerClassName)}>
      <Input
        type="search"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        className={cn(
          'h-10 placeholder:text-sm placeholder:text-gray-light-500 ',
          isRight ? 'pr-10' : 'pl-10',
          inputClassName,
        )}
        {...props}
      />

      <div
        className={cn(
          'absolute top-6 -translate-y-1/2 text-gray-light-500',
          isRight ? 'right-3' : 'left-3',
        )}
      >
        {icon ?? <Search size={20} />}
      </div>
    </div>
  );
}


