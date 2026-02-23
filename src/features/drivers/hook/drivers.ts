import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createDriverService, getDriversService } from '../services/drivers';
import type { CreateDriverPayload, DriverResponse } from '../types';

export const DRIVERS_QUERY_KEY = ['drivers'];

export const useCreateDriver = (
  setModalOpen: (modalOpen: boolean) => void,
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation<DriverResponse, any, CreateDriverPayload>({
    mutationFn: (payload: CreateDriverPayload) => createDriverService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DRIVERS_QUERY_KEY });

      setModalOpen(false);

      setServerValidationError?.(null);
    },
    onError: (error: any) => {
      setServerValidationError?.(error);
    },
  });
};

export const useDrivers = () => {
  return useQuery({
    queryKey: DRIVERS_QUERY_KEY,
    queryFn: getDriversService,
    select: (res) => res.data,
  });
};