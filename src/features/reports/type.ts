import type { ReactNode } from 'react';

export interface AreaChartProps {
  series: {
    name: string,
    data: number[]
  }[],
  months?: string[],
  height?: number,
  width?: number,
  colors?: string[],
}

export interface DonutChartProps {
  series: number[];
  labels: string[];
  colors?: string[];
  height?: number;
  donutSize?: string;
  showLegend?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
}

export interface StatCardProps {
  value: string | number;
  label: string;
  unit?: string;
  className?: string;
  icon: ReactNode
}

export type BadgeConfig = {
  label: string;
  color: 'success' | 'error' | 'gray';
  icon?: ReactNode;
};

export interface ReportsTableProps {
  hasSummaryRow?: boolean;
  hasDatePicker?: boolean;
  hasSearchBox?: boolean;
  hasShowAllBtn?: boolean;
}