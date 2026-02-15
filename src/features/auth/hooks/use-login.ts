import type { LoginApiResponse } from '@/features/auth/type';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../services';

export const useLoginMutation = () => {
  return useMutation<LoginApiResponse, Error, { phone: string }>({
    mutationFn: loginApi,
  });
};
