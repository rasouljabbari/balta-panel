import { AxiosError } from 'axios';
import type { ValidationError } from '@/types/api';


export const apiErrorHandler = async (e: AxiosError): Promise<any> => {
  console.log('e.response', e.response, extractErrorMessage(e.response?.data));
  return {
    status: e.response?.status ?? 422,
    error: extractErrorMessage(e.response?.data),
  };
};

export const extractErrorMessage = (err: any): string => {
  return (
    err?.error?.message ||
    err?.data?.message ||
    err?.response?.data?.message ||
    err?.response?.data?.error?.message ||
    'ورود با خطا مواجه شد. دوباره تلاش کنید.'
  );
};

export const extractValidationErrors = (err: any): ValidationError[] => {
  const errorData = err?.response?.data || err?.data || err;

  if (
    errorData?.error?.validation_errors &&
    Array.isArray(errorData.error.validation_errors)
  ) {
    return errorData.error.validation_errors;
  }

  return [];
};