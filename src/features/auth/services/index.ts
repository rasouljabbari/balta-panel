import type { LoginApiResponse } from '@/features/auth/type';

const url = 'store/login-register';

export const loginApi = async ({
  phone,
}: {
  phone: string;
}): Promise<LoginApiResponse> => {
  const formData = new FormData();

  formData.append('phone', phone);

  const response = await postFormDataHandler({
    endPoint: url,
    formData,
    default_token: null,
  });

  if (response && typeof response === 'object' && 'status' in response) {
    if ('data' in response) {
      return {
        status: response.status,
        data: response.data,
      } as LoginApiResponse;
    }
  }

  throw new Error('Unexpected response format from login API');
};
