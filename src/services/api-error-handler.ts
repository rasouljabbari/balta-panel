import { showUniqueErrorToast } from '@/helper/show-unique-error-toast';
import type { ValidationError } from '@/types/api';
import { AxiosError } from 'axios';


export const apiErrorHandler = async (e: AxiosError): Promise<any> => {
  return {
    status: e.response?.status ?? 422,
    error: extractValidationErrors(e.response?.data),
  };
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

const NETWORK_ERROR_CODES = [
  'ERR_NETWORK',
  'ERR_CONNECTION_CLOSED',
  'ECONNABORTED',
] as const;

export const getAxiosErrorMessage = (error: any): string => {
  // 🔴 No response → network / timeout / connection closed
  if (!error?.response) {
    if (NETWORK_ERROR_CODES.includes(error?.code)) {
      switch (error.code) {
        case 'ECONNABORTED':
          return 'زمان درخواست به پایان رسید. لطفاً دوباره تلاش کنید.';
        case 'ERR_CONNECTION_CLOSED':
          return 'ارتباط با سرور قطع شد. لطفاً مجدداً تلاش کنید.';
        case 'ERR_NETWORK':
        default:
          return 'خطای شبکه رخ داده است. لطفاً اتصال اینترنت خود را بررسی کنید.';
      }
    }

    return 'خطای غیرمنتظره‌ای رخ داده است.';
  }

  // 🟠 Has response → API error
  return error.response?.data?.error?.message ?? 'خطایی از سمت سرور رخ داده است.';
};


export const handleError = async (error: any) => {
  console.log("handleError status", error?.status)
  if (!error?.status) {
    const message = getAxiosErrorMessage(error);
    showUniqueErrorToast(message);
    return;
  }

  // if (error?.status === 401) {
  //   deleteAllCookie();
  //   showUniqueErrorToast('توکن شما منقضی شده است، لطفا مجدد وارد شوید.')
  //   setTimeout(() => {
  //     window.location.href = '/auth/login';
  //   }, 3000)
  //   return;
  // }

  // 🔴 network-level errors → stop here
  if (!error?.response) return;

  // 🟠 API errors
  const errorResponse = await apiErrorHandler(error);
  console.log("apiErrorHandler errorResponse", errorResponse)
  // console.log("errorResponse", errorResponse)
  throw errorResponse
};
