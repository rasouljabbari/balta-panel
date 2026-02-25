export type Headers = {
  'Access-Control-Allow-Methods': string;
  'Access-Control-Allow-Headers': string;
  'Access-Control-Allow-Origin'?: string;
  'Content-Type'?: string;
  Accept?: string;
  Authorization?: string;
  'Access-Control-Allow-Credentials'?: string;
};

export interface HeadersConfig {
  headers: Headers;
}

export type RequestType = 'get' | 'post' | 'delete' | 'patch';

export type DataParams = Record<string, any>;

export type GetData = {
  endPoint: string;
  type: RequestType;
  dataParams?: DataParams;
  isToken?: boolean;
  isHeaderJson?: boolean;
  default_token?: string | null;
  isCrm?: boolean;
};

export type PostFormData = {
  endPoint: string;
  formData: FormData;
  type?: 'post' | 'put';
  default_token?: string | null;
};

export interface ApiErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
  [key: string]: any;
}

export interface serverValidationErrorProps {
  status: number;
  error: {
    type: string;
    message: string;
    validation_errors: { filed: string, message: string }[]
  }
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  error?: {
    type?: string;
    status?: number;
    message?: string;
    timestamp?: string;
    validation_errors?: ValidationError[];
  };
}