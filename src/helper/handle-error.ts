import { showUniqueErrorToast } from "@/helper/show-unique-error-toast";
import { apiErrorHandler } from "@/services/api-error-handler";


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
  if (!error?.status) {
    const message = getAxiosErrorMessage(error);
    showUniqueErrorToast(message);
    return;
  }

  // 🔴 network-level errors → stop here
  if (!error?.response) return;

  // 🟠 API errors
  const errorResponse = await apiErrorHandler(error);
  throw errorResponse
};