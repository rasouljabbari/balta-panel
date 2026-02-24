import { useCallback, useState } from 'react';
import { sendCodeApi } from '@/features/auth/services/verify-code-api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { ValidationError } from '@/types/api-methods';
import {
  extractErrorMessage,
  extractValidationErrors,
} from '@/services/api-error-handler';

export function useSendCode() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    [],
  );
  const [lastPhone, setLastPhone] = useState<string | null>(null);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (phone: string) => sendCodeApi({ phone }),
    onSuccess: (data, phone) => {
      setLastPhone(phone);
      setServerError(null);
      setValidationErrors([]);
      toast.success(data?.message as string);
      navigate(`/auth/verify-code?mobile=${phone}`);
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

  const sendCode = useCallback(
    async (phone: string) => {
      try {
        await mutation.mutateAsync(phone);
      } catch {
        // errors handled in onError
      }
    },
    [mutation],
  );

  return {
    sendCode,
    serverError,
    validationErrors,
    lastPhone,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  };
}

export type UseSendCodeResult = ReturnType<typeof useSendCode>;
