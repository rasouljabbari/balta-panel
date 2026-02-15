import { AxiosError } from 'axios';

export const apiErrorHandler = async (e: AxiosError) => {
  const status = e.response?.status ?? 500;
  const data = e.response?.data as any;

  // ✅ Validation error (422)
  if (status === 422 && data?.error?.validation_errors) {
    return {
      status,
      error: {
        type: data.error.type,
        message: data.error.message,
        validation_errors: data.error.validation_errors,
      },
    };
  }

  // 404
  if (status === 404) {
    return {
      status,
      error: {
        message: 'Api Route Not Found',
      },
    };
  }

  // Network error
  if (!e.response) {
    return {
      status: 500,
      error: {
        message: 'Network error. Please check your connection.',
      },
    };
  }

  // Fallback
  return {
    status,
    error: {
      message: `Server error (status code : ${status})`,
    },
  };
};