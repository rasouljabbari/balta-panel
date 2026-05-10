import type { ReactNode } from "react";

export type SharedModalProps = {
  isOpen: boolean;
  onClose: () => void;
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
  confirmButtonType?: 'button' | 'submit';
};
