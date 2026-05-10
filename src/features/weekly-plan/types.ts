export type TabType = "current week" | "feature week";

export type SuggestType = "Default programs" | "Expert suggestion";


export type MealType = "breakfast" | "lunch" | "dinner";


export interface MealItem {
title: string;
count: string;
}


export interface MealConfig {
label: string;
variant: "yellow" | "green" | "fuchsia" | "default";
dayClassName: string;
items: MealItem[];
}


export interface DayItem {
dayName: string;
fullDate: string;
isToday: boolean;
date: Date;

}

export interface WeeklyPlanHeaderProps {
  tab: TabType;
  onTabChange: (tab: TabType) => void;
  children: React.ReactNode;
}


export interface WeeklyPlanGridProps {
  days: DayItem[];
  isCurrentWeek: boolean;
  onRegisterFood: (date: Date, mealType: 'صبحانه' | 'ناهار' | 'شام') => void;
  onViewDetails: (date: Date, mealType: 'صبحانه' | 'ناهار' | 'شام', meal: MealConfig) => void;
}


export interface WeeklyPlanActionsProps {
  disabled: boolean;
  onCopyFood: () => void;
  onSuggestFood: () => void;
}


export interface MealCardProps {
  meal: MealConfig;
  disabled?: boolean;
  isEmptyMeal?: boolean;   
  isCurrentWeek: boolean;
  dayDate: Date;
  onRegisterFood?: () => void;
  onViewDetails?: () => void;
}

export interface SuggestModalProps {
  showModal: boolean;
  onClose: () => void;
}

