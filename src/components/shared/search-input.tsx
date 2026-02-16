import { cn } from '@/utils/cn';
import { Search } from 'lucide-react';
import { Input } from 'rg-dst';
import type { SearchInputProps } from './type';



export default function SearchInput({
  containerClassName,
  inputClassName,
  icon,
  iconPosition = 'right',
  ...props
}: SearchInputProps) {
  const isRight = iconPosition === 'right';

  return (
    <div className={cn('relative', containerClassName)}>
      <Input
        type="search"
        className={cn(
          'h-10 placeholder:text-sm placeholder:text-gray-light-500',
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
