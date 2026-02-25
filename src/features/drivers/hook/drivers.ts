import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createDriverService, editDriverService, getDriverByIdService, getDriversService, toggleDriverStatusService } from '../services/drivers';
import type { CreateDriverPayload, CreateDriverResponse } from '../types';


export const DRIVERS_QUERY_KEY = ['drivers'];

export const useCreateDriver = (
  closeModal: () => void,
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation<CreateDriverResponse, any, CreateDriverPayload>({
    mutationFn: (payload) => createDriverService(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DRIVERS_QUERY_KEY });
      closeModal();
      setServerValidationError?.(null);
    },

    onError: (error: any) => {
      const serverError = error?.response?.data || error;
      setServerValidationError?.(serverError);
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
    },

    onError: (error: any) => {
      setServerValidationError?.(error?.message || 'خطایی رخ داد');
    },
  });
};

export const useDrivers = (page: number) => {
  return useQuery({
    queryKey: [...DRIVERS_QUERY_KEY, page],
    queryFn: getDriversService,
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