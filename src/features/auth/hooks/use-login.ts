import { loginApi } from '@/features/auth/services/login-api';
import type { LoginFormValues } from '@/features/auth/type';
import {
  extractErrorMessage,
  extractValidationErrors,
} from '@/services/api-error-handler';
import type { ValidationError } from '@/types/api';
import { setCookie } from '@/utils/cookies';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  const mutation = useMutation({
    mutationFn: ({
      payload,
      crmToken,
    }: {
      payload: LoginFormValues;
      crmToken: string;
    }) => loginApi(payload, false, crmToken),

    onSuccess: (response: any) => {
      const token = response?.data?.token;

      setCookie('auth_token', token, 2 * 24 * 60 * 60);

      setServerError(null);
      setValidationErrors([]);

      navigate('/dashboard');
    },

    onError: (err: any) => {
      const validationErrs = extractValidationErrors(err);

      if (validationErrs.length > 0) {
        setValidationErrors(validationErrs);
        setServerError(null);
      } else {
        setServerError(extractErrorMessage(err));
        setValidationErrors([]);
      }
    },
  });

  // Crm login
  const crmMutation = useMutation({
    mutationFn: (payload: LoginFormValues) => loginApi(payload, true),

    onSuccess: (response: any, payload) => {
      const crmToken = response?.data?.token;
      setCookie('user_info', JSON.stringify(response?.data?.admin));
      setCookie('auth_token', crmToken, 2 * 24 * 60 * 60);

      // pass crm token
      mutation.mutate({
        payload,
        crmToken,
      });
    },

    onError: (err: any) => {
      const validationErrs = extractValidationErrors(err);

      if (validationErrs.length > 0) {
        setValidationErrors(validationErrs);
        setServerError(null);
      } else {
        setServerError(extractErrorMessage(err));
        setValidationErrors([]);
      }
    },
  });

  const login = useCallback(
    async (payload: LoginFormValues) => {
      try {
        await crmMutation.mutateAsync(payload);
      } catch {
        // handled in onError
      }
    },
    [crmMutation],
  );

  return {
    login,
    serverError,
    validationErrors,
    isPending: crmMutation.isPending || mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: crmMutation.isError || mutation.isError,
    reset: mutation.reset,
  };
}

export type UseLoginResult = ReturnType<typeof useLogin>;