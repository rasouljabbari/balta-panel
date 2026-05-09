import type { FormValues } from '@/features/drivers/validation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createDriverService, editDriverService, getDriverByIdService, getDriversService, toggleDriverStatusService } from '../services/drivers';
import type { CreateDriverPayload, CreateDriverResponse } from '../types';

export const DRIVERS_QUERY_KEY = ['drivers'];

export const useCreateDriver = (
  closeModal: () => void,
  setError?: any,
) => {
  const queryClient = useQueryClient();

  return useMutation<CreateDriverResponse, any, CreateDriverPayload>({
    mutationFn: (payload) => createDriverService(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DRIVERS_QUERY_KEY });
      closeModal();
      setError?.(null);
    },

    onError: (err: any) => {
      if (err?.error.length > 0) {
        err?.error?.forEach((validationError: any) => {
          const fieldName = validationError.field as keyof FormValues;
          setError(fieldName, {
            type: 'server',
            message: validationError.message,
          });
        });
      }
    },
  });
};

export const useEditDriverPage = (
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateDriverResponse,
    any,
    { id: number | string; payload: CreateDriverPayload }
  >({
    mutationFn: ({ id, payload }) => editDriverService(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DRIVERS_QUERY_KEY });
      setServerValidationError?.(null);
      toast.success('ویرایش اطلاعات راننده با موفقیت ثبت شد.')
    },

    onError: (error: any) => {
      setServerValidationError?.(error?.message || 'خطایی رخ داد');
    },
  });
};

type UseDriversParams = {
  page?: number;
  name?: string;
  last_name?: string;
};

export const useDrivers = ({ page = 1, name, last_name }: UseDriversParams) => {
  return useQuery({
    queryKey: [...DRIVERS_QUERY_KEY, page, name, last_name],
    queryFn: () =>
      getDriversService({
        page,
        name,
        last_name,
      }),
    select: (res) => res.data,
  });
};

export const useDriverById = (id?: number | string) => {
  return useQuery({
    queryKey: ['driver', id],
    queryFn: () => getDriverByIdService(id as number | string),
    enabled: !!id,
    select: (res) => res.data.driver,
  });
};

export const useToggleDriverStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<void, any, number>({
    mutationFn: (driverId) => toggleDriverStatusService(driverId),

    onSuccess: (_data, driverId) => {
      queryClient.invalidateQueries({ queryKey: DRIVERS_QUERY_KEY });

      queryClient.invalidateQueries({ queryKey: ['driver', driverId] });
    },

    onError: (error: any) => {
      console.error('خطا در تغییر وضعیت راننده:', error);
    },
  });
};