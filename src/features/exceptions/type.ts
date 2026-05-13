import type { Option } from "@/components/shared/type";

export const MealId = {
  BREAKFAST: 1,
  LUNCH: 2,
  DINNER: 3,
} as const;

export type MealId = (typeof MealId)[keyof typeof MealId];

export interface Item {
  id: number | string;
  name: string;
  code?: number;
  is_active: boolean;
  is_daily: boolean;
  category: string;
  exclusion?: ExceptionsApiFoodExclusion | null;
  foodId?: string | number;
}

export interface ExceptionItemProps {
  title: string;
  items?: any;
  children?: React.ReactNode;
}

export interface ExceptionItemListProps {
  items: Item[];
  isPending: boolean;
  onToggleClick: (item: Item) => void;
}
export interface ItemProps extends ExceptionItemProps {
  mealId: number;
  date: string;
  isPending: boolean;
  name: string;
  isLoading: boolean;
  isError: boolean;
}
export interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMenus?: Option[];
  setSelectedMenus?: (val: Option[]) => void;
  selectedCategories?: Option[];
  setSelectedCategories?: (val: Option[]) => void;
  selectedStatus?: Option[];
  setSelectedStatus?: (val: Option[]) => void;
}

export interface ExceptionsApiFoodMenu {
  id: number;
  name: string;
  is_active: boolean;
}

export interface ExceptionsApiFoodCategory {
  id: number;
  name: string;
  is_active?: boolean;
  order_limit?: string;
  order_limit_translation?: string;
}

export interface ExceptionsApiFoodExclusion {
  id: number;
}

export interface ExceptionsApiFood {
  id: number | string;
  name: string;
  menus: ExceptionsApiFoodMenu[];
  category: ExceptionsApiFoodCategory;
  exclusion: ExceptionsApiFoodExclusion | null;
  is_daily: boolean;
}

export interface ExceptionsApiMeal {
  id: number;
  name: string;
  foods: ExceptionsApiFood[];
}

export interface ListExceptionsResponse {
  status: 'success';
  message: string;
  data: {
    meals: ExceptionsApiMeal[];
  };
}

export interface ExceptionsMeal {
  id: number;
  name: string;
  items: Item[];
}

export interface ListExceptionsResult {
  meals: ExceptionsMeal[];
}

export interface CreateExceptionPayload {
  food_id: string | number;
  date: string;
  meal_id: number;
}