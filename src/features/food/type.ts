import type { Control } from "react-hook-form";
import type { MultiValue } from "react-select";


export type MealType = 'صبحانه' | 'نهار' | 'شام';
export type MenuType = 'اقتصادی' | 'سازمانی';
export type menuType = 'فعال' | 'غیرفعال';

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  mealTypes: MealType[];
  menuType: MenuType;
  description: string;
  status: menuType;
}


export interface SheetFormProps {
  open: boolean;
  onClose: () => void;
  mode: 'create' | 'edit';
  selectedFood?: FoodItem | null;
}

export interface FoodTableProps {
  data: FoodItem[];
  onAdd: () => void;
  onEdit: (row: FoodItem) => void;
}

export interface ImageUploadPreviewProps {
  file: File | null;
  onChange: (file: File | null) => void;
}

export interface FoodTableHeaderProps {
  onAdd: () => void;
}

type OptionType = { value: string; label: string };

export interface FoodFormValues {
  name: string;
  meals: MultiValue<OptionType>;
  menus: MultiValue<OptionType>;
  categories: MultiValue<OptionType>;
  price: string;
  description: string;
  isDailyFood: boolean;
  weekDays: string[];
  image: File | null;
  isVisible: boolean;
}


export interface SelectProps {
  control: Control<FoodFormValues>;
}

