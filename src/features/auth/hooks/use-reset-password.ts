import { useCallback, useState } from 'react';
import { resetPasswordApi } from '@/features/auth/services/reset-password-api';
import { deleteCookie } from '@/utils/cookies';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import type { ValidationError } from '@/types/api-methods';
import {
  extractErrorMessage,
  extractValidationErrors,
} from '@/services/api-error-handler';

export interface ResetPasswordPayload {
  phone: string;
  code: string;
  password: string;
  password_confirmation: string;
}

export function useResetPassword() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    [],
  );
  const [
    verificationCodeNotValidException,
    setVerificationCodeNotValidException,
  ] = useState<boolean>(false);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (payload: ResetPasswordPayload) => resetPasswordApi(payload),
    onSuccess: () => {
      setServerError(null);
      setValidationErrors([]);

      toast.success('رمز عبور با موفقیت بازنشانی شد');
      deleteCookie('reset_password_info');
      navigate('/auth/login?reset_password=true');
    },
    onError: (err: any) => {
      const validationErrs = extractValidationErrors(err);
      // console.log('validationErrs', validationErrs, 'err', err);
      if (validationErrs.length > 0) {
        setValidationErrors(validationErrs);
        setServerError(null);
      } else {
        if (
          err?.response?.data?.error?.type ===
          'VerificationCodeNotValidException'
        ) {
          setVerificationCodeNotValidException(true);
        } else {
          setServerError(extractErrorMessage(err));
        }
        setValidationErrors([]);
      }
    },
  });

  const resetPassword = useCallback(
    async (payload: ResetPasswordPayload) => {
      try {
        await mutation.mutateAsync(payload);
      } catch {
        // handled in onError
      }
    },
    [mutation],
  );

  return {
    resetPassword,
    serverError,
    validationErrors,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
    verificationCodeNotValidException,
  };
}

export type UseResetPasswordResult = ReturnType<typeof useResetPassword>;
