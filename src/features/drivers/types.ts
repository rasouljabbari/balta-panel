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



export interface AddDriverModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export interface DriverTableHeaderProps {
  count: number;
}





