import type { ImgHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface ImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt'
> {
  src: string;
  alt: string;
  fallback?: string;
  variant?: 'default' | 'rounded' | 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  showPlaceholder?: boolean;
  placeholderColor?: string;
  onError?: () => void;
}

export interface NotificationItem {
  id: number;
  text: string;
  time: string;
}

export interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onReadAll?: () => void;
}

export interface EmptyBoxProps {
  title: string;
  image?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export type SharedModalProps = {
  isOpen: boolean;
  onClose: (v?: any) => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  confirmDisabled?: boolean;
  showConfirmButton?: boolean;
  widthClass?: string;
  iconBgClass?: string;
  confirmButtonWidth?: string;
  confirmButtonType?: 'button' | 'submit';
  confirmButtonProps?: {
    form?: string; // id فرم که submit رو trigger کنه
  };
  isPending?: boolean;
  footerLeft?: React.ReactNode;
  showFooter?: boolean;
  bodyClassName?: string;
};

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  children?: ReactNode;
  title?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface TableColumn<T = any> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  sortable?: boolean;
  render?: (value: any, row: T, index: number) => ReactNode;
  accessor?: (row: T) => any;
  width?: string;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  onSort?: (columnId: string, direction: SortDirection) => void;
  sortColumn?: string;
  sortDirection?: SortDirection;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  emptyState?: {
    title: string;
    description?: string;
  };
  rowKey?: (row: T, index: number) => string | number;
  summaryRow?: React.ReactNode;
}
export interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export interface Option {
  value: number | string;
  label: string;
}

export interface CustomSelectProps {
  name?: string;
  control?: any;
  options: Option[];
  placeholder?: string;
  isMulti?: boolean;
  isDisabled?: boolean;
  error?: any;
  label?: string;
  value?: Option | readonly Option[] | null;
  onChange?: (val: any) => void;
  onInputChange?: (value: string) => void;
}

export interface SheetProps {
  open: boolean;
  onClose: () => void;
  side?: 'left' | 'right';
  children: React.ReactNode;
  width?: string;
}

export interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  containerClassName?: string;
  inputClassName?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onSearch: (value: string) => void;
  delay?: number;
  searchValue: string;
}

export interface DatePickerFieldProps {
  label: string;
  value?: any;
  onChange?: (date: any) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export type DetailItem = {
  label: string;
  value: string | number | null | undefined;
};

export type DetailGridProps = {
  items: DetailItem[];
  className?: string;
};

export interface InfoHeaderProps {
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export type AccordionCardProps = {
  title: ReactNode;
  icon: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export type ClearFiltersButtonProps = {
  activeFiltersCount: number;
  onClear: () => void;
};

export type DownloadButtonProps = {
  url: string;
  fileName?: string;
};

export interface ErrorsBoxProps {
  errors?: string | string[] | null;
  title?: string;
  variant?: 'default' | 'compact';
  className?: string;
  icon?: ReactNode;
}

export interface OTPInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'value' | 'onChange'
> {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  error?: string;
  className?: string;
}


export type DropdownOption = {
  label: string;
  value: string;
};

export type DropDownProps = {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}
export type TimePickerFieldProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
};

export interface SectionHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  showBack?: boolean;
  backLink?: string;
  extra?: React.ReactNode;
}