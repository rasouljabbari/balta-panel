
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


export interface CreateDriverPayload {
  first_name: string;
  last_name: string;
  birth_date?: string;
  phone: string;
  national_id?: string;
  car_type?: string;
  car_plate?: {
    first?: number;
    letter?: string;
    second?: number;
    state?: number;
  };
  description?: string;
  joined_at?: string;
  user_code?: string;
  is_active?: boolean;
  gender?: 'male' | 'female';
}

export interface DriverResponse {
  status: 'success' | 'error';
  message: string;
  data: {
    driver: {
      id: number;
      first_name: string;
      last_name: string;
      birth_date: string;
      phone: string;
      national_id: string;
      car_type: string;
      car_plate: string;
      description?: string;
      joined_at?: string;
      user_code?: string;
      is_active: boolean;
      gender: 'male' | 'female';
      gender_translation: string;
    };
  };
}



export interface DriversMeta {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface GetDriversResponse {
  status: string;
  message: string;
  data: {
    drivers: DriverResponse[];
    meta: DriversMeta;
  };
}

