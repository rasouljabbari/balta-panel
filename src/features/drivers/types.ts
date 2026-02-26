
export interface DriverTableProps {
  data: DriverItem[];
  onAllocatedOrders: (driver: DriverItem) => void;
  meta?: DriversMeta;
  onPageChange: (page: number) => void;
}

export interface AddDriverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ===============================
// 1️⃣ آیتم خامی که از API لیست میاد
// ===============================
export interface DriverApiItem {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  phone: string;
  national_id: string;
  car_type: string;
  car_plate: {
    first: string;
    letter: string;
    second: string;
    state: string;
  } | null;
  description?: string | null;
  joined_at?: string | null;
  user_code?: string | null;
  is_active: boolean;
  gender: 'male' | 'female';
  gender_translation: string;
}

// ===============================
// 2️⃣ Meta اطلاعات صفحه‌بندی
// ===============================
export interface DriversMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

// ===============================
// 3️⃣ پاسخ API لیست راننده‌ها
// ===============================
export interface GetDriversResponse {
  status: 'success' | 'error';
  message: string;
  data: {
    drivers: DriverApiItem[];
    meta: DriversMeta;
  };
}

// ===============================
// 4️⃣ تایپ مخصوص جدول (ViewModel)
// ===============================
export interface DriverItem {
  id: number;
  fullName: string;
  phone: string;
  vehicleType: string;
  plate: string;
  status: 'active' | 'inactive';
}

// ===============================
// 5️⃣ Props جدول
// ===============================
export interface DriverTableProps {
  data: DriverItem[];
  onAllocatedOrders: (driver: DriverItem) => void;
}

// ===============================
// 6️⃣ ساخت Payload ساخت راننده
// ===============================
export interface CreateDriverPayload {
  first_name: string;
  last_name: string;
  birth_date?: string;
  phone: string;
  national_id?: string;
  car_type?: string;
  car_plate?: {
    first?: string;
    letter?: string;
    second?: string;
    state?: string;
  };
  description?: string;
  joined_at?: string;
  user_code?: string;
  is_active?: boolean;
  gender?: 'male' | 'female';
}

export interface CreateDriverResponse {
  status: 'success' | 'error';
  message: string;
  data: {
    driver: DriverApiItem;
  };
}

export interface DriverDetail {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: string;
  phone: string;
  national_id: string;
  car_type: string;
  car_plate: {
    first: string;
    letter: string;
    second: string;
    state: string;
  } | null;
  description?: string | null;
  joined_at?: string | null;
  user_code?: string | null;
  is_active: boolean;
  gender: 'male' | 'female';
  gender_translation: string;
}

export interface GetDriverByIdResponse {
  status: 'success' | 'error';
  message: string;
  data: {
    driver: DriverDetail;
  };
}

export interface PlateInputProps {
  value?: any;
  onChange?: (value: {
    first: number;
    letter: string;
    second: number;
    state: number;
  }) => void;
  error?: boolean;
  required?: boolean;
  label?: string;
}

export interface PlateParts {
  part1: number;
  part2: number;
  letter: string;
  part3: number;
}

export interface SearchOption {
  id: string | number;
  label: string;
}