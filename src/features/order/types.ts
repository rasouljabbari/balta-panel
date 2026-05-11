import type { SelectOption } from '@/components/shared/select-dropdown';
import type { ReactNode, RefObject } from 'react';

export type TabType = "current week" | "future week";

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
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface OrderDetails {
  id: string;
  date: string;
  time: string;
  mealType: 'صبحانه' | 'ناهار' | 'شام';
  delivery: string;
  items: Array<{
      title: string;
      price: number;
      quantity?: number | string;
  }>;
  description?: string;
  totalAmount: number;
  status: string;
  statusColor: 'green' | 'yellow' | 'red' | 'blue';
}

export interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: OrderDetails | null;
}

export interface Meal {
  id: number;
  img?: string;
  price: number;
  title: string;
  description: string;
}

export interface ProductGroup {
  id: string;
  label: string;
  isLimitedByContract: boolean;
  meals: Meal[];
}

export interface UseCartParams {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  mealSelectionLimitCount: number;
}

export interface OrderModalProps extends UseCartParams {
  date: Date;
  mealType: 'صبحانه' | 'ناهار' | 'شام';
  onClose: () => void;
}

export interface CartSidebarProps {
  cart: CartItem[];
  selectedFoodCategory: SelectOption;
  orderDescription: string;
  onOrderDescriptionChange: (description: string) => void;
  onRemoveItem: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
  onQuantityChange: (id: number, value: string) => void;
  onSubmit: () => void;
  date: string;
  mealType: 'صبحانه' | 'ناهار' | 'شام';
}

export interface CartSummaryProps {
  onShowSummary: () => void;
  onSubmit: () => void;
  showSummaryOpen?: boolean;
  date?: string;
  mealType?: 'صبحانه' | 'ناهار' | 'شام';
  totalItems?: number;
  totalAmount?: number;
}

export interface CategoryNavigationProps {
  foodCategory: SelectOption[];
  selectedFoodCategory: SelectOption;
  setSelectedFoodCategory: (option: SelectOption) => void;
  productGroups: ProductGroup[];
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

export interface OrderCardProps {
  day: string;
  date?: string;
  variant?: 'default' | 'green' | 'fuchsia' | 'yellow';
  readMoreLink?: string;
  onViewDetails?: () => void;
  children: ReactNode;
  disabled?: boolean;
   className?: string;
  dayClassName?: string; 
  centerDay?: boolean; 
  headerVariant?: "default" | "green" | "fuchsia" | "yellow"
}

export interface OrderBoxProps extends Meal {
  isSelected: boolean;
  isDisabled?: boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export interface WeeklyPlanHeaderProps {
  tab: TabType;
  onTabChange: (tab: TabType) => void;
  children: React.ReactNode;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartItemProps {
  item: CartItem;
  selectedFoodCategory: SelectOption;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onQuantityChange: (id: number, value: string) => void;
}

export interface ProductSectionProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  productGroups: ProductGroup[];
  cart: CartItem[];
  isLimitReached: () => boolean;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export interface OrderModalHeaderProps {
  mealType: 'صبحانه' | 'ناهار' | 'شام';
  formattedDate: string;
  onClose: () => void;
}