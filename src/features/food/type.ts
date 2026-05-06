export type Menu = {
  id: number;
  name: string;
  is_active: boolean;
};
export type MealType = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  is_active: boolean;
  order_limit: string;
  order_limit_translation?: string;
};

export type MenuType = 'اقتصادی' | 'سازمانی';

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: number;
  image: string;
  meal_types: MealType[];
  menus: Menu[];
  description: string;
  is_active: boolean;
}

export interface BaseResponse {
  status: string;
  message: string;
}
export interface SheetFormProps {
  open: boolean;
  onClose: () => void;
  mode: 'create' | 'edit';
  foodId?: number | string;
}

export interface SingleFoodResponse extends BaseResponse {
  data: FoodItem;
}

export interface FoodListResponse extends BaseResponse {
  data: {
    foods: FoodItem[];
  };
}

export interface UploadedFileItem {
  id: string;
  url: string;
  name: string;
}

export interface UploadFileResponse extends BaseResponse {
  data: {
    file: UploadedFileItem;
  };
}

export interface FoodTableProps {
  isLoading: boolean;
  data: FoodItem[];
  onAdd: () => void;
  onEdit: (row: FoodItem) => void;
  onSearch: (search: string) => void;
}

export interface ImageUploadPreviewProps {
  file: File | null;
  onChange: (file: File | null) => void;
}

export interface FoodTableHeaderProps {
  onAdd: () => void;
  onSearch: (v: string) => void;
}

export interface FoodFormValues {
  name: string;
  meal_types: number[];
  menu_ids: number[];
  category_id: number | null;
  price: string;
  description: string;
  is_daily: boolean;
  days: string[];
  image: File | null;
  is_active?: boolean;
}


export interface SelectProps {
  control: any;
  error?: any
}

