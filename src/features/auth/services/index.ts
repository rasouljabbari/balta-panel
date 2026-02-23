import type { LoginApiResponse } from '@/features/auth/type';
import { getData } from '@/services/api-method-functions';

export const loginApi = async ({
  phone,
}: {
  phone: string;
}): Promise<LoginApiResponse> => {
  const formData = new FormData();

  formData.append('phone', phone);

  return getData({
    endPoint: 'admin/v1/login',
    type: 'post',
    dataParams: {
      phone
    },
  });
};
