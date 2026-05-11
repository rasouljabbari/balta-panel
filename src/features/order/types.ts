import type { ReactNode } from 'react';
import type { mealsTableColumns } from './components/meal-table-columns';
import type { TableColumn } from '@/components/shared/type';


export type TabType = 'current week' | 'future week';

export type MealType = 'breakfast' | 'lunch' | 'dinner';

export interface OrderItemProps {
  mealType: MealType;
  mealName: string;
  mealCount: number;
}

export interface DayItem {
  dayName: string;
  fullDate: string;
  isToday: boolean;
  date: Date;
  orders: OrderItemProps[];
}

export interface OrderHeaderProps {
  tab: TabType;
  onTabChange: (tab: TabType) => void;
}

export interface OrderGridProps {
  days: DayItem[];
}

export type MealItem = {
  id: number | string;
  name: string;
  menuType: string;
  count: number;
  price: number;
  isTotal?: boolean;
};

export type OrderLog = {
  id: number;
  title: string;
  description: string;
};

export type OrderDetailsInfo = {
  label: string;
  value: string;
};

export type OrderDetailsPanelProps = {
  data: MealItem[];
  mealsTableColumns: typeof mealsTableColumns;
  logs: OrderLog[];
  info?: OrderDetailsInfo[];
  title?: string;
  branch?: string;
};


export type OrderItem = {
  id: number;
  title: string;
  branch: string;
  status: OrderStatus;
  time: string;
  foodCount: string;
  packaging: string;
};

export type OrderListProps = {
  orders: OrderItem[];
  selectedOrder: number | false;
  onSelect: (id: number) => void;
};
export type OrderStatus =
  | 'در صف انتظار'
  | 'در حال آماده‌سازی'
  | 'تحویل به راننده'
  | 'ثبت شده'
  | 'تحویل شده'
  | 'لغو شده';

 export type BadgeColor = 'gray' | 'blue' | 'green' | 'red' | 'orange';

export type BadgeUIColor = 'gray' | 'blue' | 'success' | 'error' | 'orange';

/* ---------------- props ---------------- */

export type BadgeProps = {
  title: string;
  badges?: {
    label: string;
    color: BadgeColor;
  }[];
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
};

export type DetailPanelProps = {
  data: MealItem[];
  mealsTableColumns: TableColumn<MealItem>[];
  logs: OrderLog[];
};