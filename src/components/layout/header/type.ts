import type { ReactNode } from "react";


export interface HeaderActionButton {
  label: string;
  onClick: () => void;
  className?: string;
  leftIcon?: ReactNode;
}
export interface HeaderProps {
  onMenuClick: () => void;
  actionButton?: HeaderActionButton;
}

export interface HeaderNotificationBoxProps {
  initialCount?: number;
}


export interface RouteInfo {
  title: string;
  description?: string;
}