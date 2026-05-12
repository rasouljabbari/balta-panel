import type { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  showBack?: boolean;
  backLink?: string;
  extra?: React.ReactNode;

}
