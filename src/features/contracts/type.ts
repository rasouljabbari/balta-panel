import type { Option } from '@/components/shared/type';

export type MealType = 'صبحانه' | 'ناهار' | 'شام' | 'ثبت نشده';

export type ContractItem = {
  id: string;
  name: string;
  branches: string;
  representative: string;
  representative_number: string;
  meals: string[];
  status: 'فعال' | 'غیرفعال';
};

export interface TabItem {
  label: string;
  value: string;
}

export interface TabsWithBadgesProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (value: string) => void;

  contractSettings?: ContractSetting[];
}
export type SidebarInfoPanelProps = {
  openStates: Record<string, boolean>;
  toggle: (key: string) => void;
  userData: { label: string; value: string }[];
  branchData: { label: string; value: string }[];
  customerType?: 'personal' | 'organization';
};

export type ContractsFilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedMeals: Option[];
  setSelectedMeals: (val: Option[]) => void;
  mealOptions: Option[];
};

export type ContractsTableCardProps = {
  data: ContractItem[];
  onEdit: (row: ContractItem) => void;
  onOpenFilter: () => void;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  isLoading: boolean;
};

export type ContractMenu = {
  id: number;
  name: string;
  description: string;
  default_packaging_id: number;
  is_active: boolean;
};
export type Contract = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;

  city: {
    id: number;
    name: string;
  } | null;

  province?: string | null;
  address?: string | null;

  landline_number?: string | null;

  economic_code?: string | null;
  identification_code?: string | null;

  meals: string[];
  is_active: boolean;

  type: 'personal' | 'organization';
  type_translation: 'personal' | 'organization';

  parent?: Contract | null;
};
export type ContractSetting = {
  meal_translation: any;
  id: number;
  meal: string;
  delivery_time: string;
  count: number;
  variety: number;

  default_driver: number | null;

  kitchen_description: string;

  initial_order_min_tolerance: number;
  initial_order_max_tolerance: number;

  daily_order_tolerance: number;

  is_active: boolean;

  menus: ContractMenu[];
};
export type ContractSettingsMeta = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
};

export type GetContractSettingsResponse = {
  status: string;
  message: string;
  data: {
    customer: Contract;
    is_branch: boolean;
    contract_settings: ContractSetting[];
    meta: ContractSettingsMeta;
  };
};
export type MealTypePayload = 'breakfast' | 'lunch' | 'dinner';

export interface ContractSettingPayload {
  meal: string;
  delivery_time: string;
  count: number;
  variety: number;
  kitchen_description: string;
  default_driver: number;
  is_active: boolean;
  initial_order_max_tolerance: number;
  initial_order_min_tolerance: number;
  daily_order_tolerance: number;
  customer_id: string;
  menus: number[];
}

export type FormValues = {
  mealTime: string;
  orderCount: number;
  variety: number;

  driverId: number | null;

  kitchenNote: string;

  minOrder: number;
  maxOrder: number;

  editTolerance: number;

  isActive: boolean;

  menus: number[];
};