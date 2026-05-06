import type { serverValidationErrorProps } from '@/types/api';


export interface Item {
  id: number;
  name: string;
  code: number;
  is_active: boolean;
  is_daily: boolean;
  category: string;
}

export interface DefinitionItemProps {
  title: string;
  Icon: React.ElementType;
  items?: any;
  children?: React.ReactNode;
}

export interface DefinitionItemListProps {
  items: Item[];
  onToggle: (item: Item) => void;
  statusModalOpen: boolean;
  setStatusModalOpen: (open: boolean) => void;
  isPending: boolean;
  changeStatusDirectly: (id: number) => void;
}

export type MetaType = 'Limited by contract' | 'No restrictions';

export interface MenuFormProps {
  mode: 'add' | 'edit';
  defaultValues: Item | null;
  onSubmit: (data: Partial<Item>) => void;
  formId: string;
  serverValidationError: serverValidationErrorProps | null;
}

export interface ItemProps extends DefinitionItemProps {
  isPending: boolean;
  name: string;
  onToggle: (item: any) => void;
  setStatusModalOpen: (open: boolean) => void;
  changeStatusDirectly: (id: number) => void;
  serverValidationError: any;
  isLoading: boolean;
  isError: boolean;
}

export interface Menu {
  id: number;
  name: string;
  is_active?: boolean;
  default_packaging_id: number;
}

export interface GetMenusResponse {
  status: 'success';
  message: string;
  data: {
    menus: Menu[];
  };
}

export interface Menu {
  id: number;
  name: string;
  price: number;
}