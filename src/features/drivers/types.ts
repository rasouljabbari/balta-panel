export interface DriverItem {
  id: number;
  fullName: string;
  phone: string;
  vehicleType: string;
  plate: string;
  status: 'active' | 'inactive';
}

export interface DriverTableProps {
  data: DriverItem[];
  onAllocatedOrders: (driver: DriverItem) => void;
}


export interface FormValues {
  firstName: string;
  lastName: string;
  mobile: string;
  nationalCode: string;
  birthDate: Date | null;
  gender: string;
  carType: string;
  plateNumber: string;
}


export interface AddDriverModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export interface DriverTableHeaderProps {
  count: number;
}

export type DriverFormValues = {
  firstName: string;
  lastName: string;
  mobile: string;
  nationalCode: string;
  birthDate?: Date | null;
  gender?: { label: string; value: string } | null;
  carType?: string;
  plateNumber?: string;
  userCode?: string;
  joinDate?: string;
};



