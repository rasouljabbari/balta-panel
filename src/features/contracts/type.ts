export type MealType = 'صبحانه' | 'ناهار' | 'شام' | 'ثبت نشده';

export type ContractItem = {
  id: number;
  name: string;
  branches: string;
  representative: string;
  representative_number: string;
  meals: MealType[];
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
}


export type SidebarInfoPanelProps = {
  openStates: Record<string, boolean>;
  toggle: (key: string) => void;
  userData: { label: string; value: string }[];
  branchData: { label: string; value: string }[];
};

