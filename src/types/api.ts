export type Headers = {
  'Accept-Language': string;
  'Access-Control-Allow-Methods': string;
  'Access-Control-Allow-Headers': string;
  'Access-Control-Allow-Origin'?: string;
  'Content-Type'?: string;
  Accept?: string;
  Authorization?: string;
  'Access-Control-Allow-Credentials'?: string;
  __tenant?: string;
  'Accept-currency'?: string;
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
  hasTenant?: boolean;
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
    validation_errors: {filed: string, message: string}[]
  }
}