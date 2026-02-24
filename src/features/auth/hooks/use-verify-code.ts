import { useCallback, useState } from 'react';
import { verifyCodeApi } from '@/features/auth/services/verify-code-api';
import type { VerifyCodeFormValues } from '@/features/auth/type';
import { setCookie } from '@/utils/cookies';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { extractErrorMessage } from '@/services/api-error-handler';

export function useVerifyCode() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (payload: VerifyCodeFormValues) => verifyCodeApi(payload),
    onSuccess: (response: any) => {
      const token = response?.token ?? response?.data?.token ?? '1234567890';
      setCookie('auth_token', token, 30 * 24 * 60 * 60); // 30 days
      setServerError(null);
      navigate('/dashboard');
    },
    onError: (err: any) => {
      setServerError(extractErrorMessage(err));
    },
  });

  const verifyCode = useCallback(
    async (payload: VerifyCodeFormValues) => {
      try {
        await mutation.mutateAsync(payload);
      } catch {
        // errors handled in onError
      }
    },
    [mutation],
  );

  return {
    verifyCode,
    serverError,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  };
}

export type UseVerifyCodeResult = ReturnType<typeof useVerifyCode>;
