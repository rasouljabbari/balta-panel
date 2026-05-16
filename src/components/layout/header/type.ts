import type { ReactNode } from 'react';


export interface HeaderActionButton {
  label: string;
  onClick: () => void;
  className?: string;
  leftIcon?: ReactNode;
}
export interface HeaderProps {
  onMenuClick: () => void;
  actionButton?: HeaderActionButton;
  extra?: ReactNode;
  contractId?: string;
}

export interface HeaderNotificationBoxProps {
  initialCount?: number;
}

export interface RouteInfo {
  title: string;
  description?: string;
}

export interface headerBoxProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  leftIcon?: ReactNode;
}

export interface HeaderActionProps {
  isDriverEdit: boolean;
  isDriverDetail: boolean;
  extra?: ReactNode;
  actionButton?: ActionButtonProps;
  initialStatus?: boolean;
  onStatusToggle?: (checked: boolean) => void;
}

export interface Driver {
  id: number;
  fullName: string;
  code: string;
  status: boolean;
}

export interface HeaderInfoResult {
  title?: string;
  description?: string;
  showBackButton: boolean;
  driver?: Driver;
  isDriverEdit: boolean;
  isDriverDetail: boolean;
}