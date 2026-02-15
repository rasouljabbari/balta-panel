import { changeStatusPackageService, createPackageService, getPackagesService, updatePackageService } from "@/features/definition/services/packages";
import type { Package } from "@/features/definition/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const PACKAGES_QUERY_KEY = ['packages'];

export const usePackaging = () => {
  return useQuery({
    queryKey: PACKAGES_QUERY_KEY,
    queryFn: getPackagesService,
    select: (res) => res.data.packagings,
  });
};

export const useCreatePackage = (
  setModalOpen: (modalOpen: boolean) => void,
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Package) => createPackageService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PACKAGES_QUERY_KEY });
      setModalOpen(false);
      if (setServerValidationError) setServerValidationError(null);
    },
    onError: (err: any) => {
      if (setServerValidationError) setServerValidationError(err);
    },
  });
};

export const useUpdatePackage = (
  setModalOpen: (modalOpen: boolean) => void,
  setServerValidationError?: (err: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Package) => updatePackageService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PACKAGES_QUERY_KEY });
      setModalOpen(false);
      if (setServerValidationError) setServerValidationError(null);
    },
    onError: (err: any) => {
      if (setServerValidationError) setServerValidationError(err);
    },
  });
};

export const useChangeStatusPackage = (setStatusModalOpen: (statusModalOpen: boolean) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      changeStatusPackageService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PACKAGES_QUERY_KEY });
      setStatusModalOpen(false)
    },
  });
};