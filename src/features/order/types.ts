export type TabType = "current week" | "feature week";

export type MealType = "breakfast" | "lunch" | "dinner";

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
  isCurrentWeek: boolean;
}