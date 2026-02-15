export interface LoginFormData {
  phone_number: string;
}

export interface LoginApiResponseData {
  already_registered: boolean;
  phone: string | null;
  success: boolean;
  time: number | null;
}

export interface LoginApiResponse {
  status: number;
  data: LoginApiResponseData;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}
