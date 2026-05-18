import type { ApiErrorResponse } from '@/hooks/use-handle-api-form-errors';


export interface Item extends Category {
  id: number;
  name: string;
  is_active: boolean;
  packaging?: string;
  price?: number;
  meta?: string;
  default_packaging?: Package;
}

export interface DefinitionItemProps {
  title: string;
  Icon: React.ElementType;
  items?: any;
  children?: React.ReactNode;
}

export interface DefinitionItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onToggle: (item: Item) => void;
  statusModalOpen: boolean;
  setStatusModalOpen: (open: boolean) => void;
  isPending: boolean;
  changeStatusDirectly: (id: number) => void;
}

export interface Category {
  is_active: boolean;
  id: number;
  name: string;
  order_limit: string;
  order_limit_translation?: string;
}

export interface CategoryFormProps {
  defaultValues: Category;
  onSubmit: (data: Partial<Item>) => void;
  serverValidationError: ApiErrorResponse<Category>;
}

export interface PackageFormProps {
  defaultValues: Package;
  onSubmit: (data: Partial<Item>) => void;
  serverValidationError: ApiErrorResponse<Package>;
}

export type MetaType = 'Limited by contract' | 'No restrictions';

export interface MenuFormProps {
  mode: 'add' | 'edit';
  defaultValues: Item | null;
  onSubmit: (data: Partial<Item>) => void;
  formId: string;
  serverValidationError: ApiErrorResponse<Item>;
}

export interface ItemProps extends DefinitionItemProps {
  isPending: boolean;
  name: string;
  onAdd: (data: any) => void;
  onEdit: (item: any) => void;
  onToggle: (item: any) => void;
  FormRenderer: any;
  // FormRenderer: React.ForwardRefExoticComponent<
  //   React.PropsWithoutRef<{
  //     mode: 'add' | 'edit';
  //     defaultValues: Item | null;
  //     formId: string;
  //     onSubmit: (data: any) => void;
  //     serverValidationError: serverValidationErrorProps | null;
  //   }> &
  //   React.RefAttributes<{ submit: () => void }>
  // >;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  statusModalOpen: boolean;
  setStatusModalOpen: (open: boolean) => void;
  changeStatusDirectly: (id: number) => void;
  serverValidationError: any;
  isLoading: boolean;
  isError: boolean;
}

export interface Package {
  id: number;
  name: string;
  price: number;
  is_active: boolean;
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

export interface GetCategoryResponse {
  status: 'success';
  message: string;
  data: {
    categories: Category[];
  };
}

export interface GetPackageResponse {
  status: 'success';
  message: string;
  data: {
    packagings: Package[];
  };
}

export interface Menu {
  id: number;
  name: string;
  price: number;
}