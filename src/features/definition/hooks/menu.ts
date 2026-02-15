import { changeStatusMenuService, createMenuService, getMenusService, updateMenuService } from "@/features/definition/services/menu";
import type { Menu } from "@/features/definition/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const MENUS_QUERY_KEY = ['menus'];

export const useMenus = () => {
  return useQuery({
    queryKey: MENUS_QUERY_KEY,
    queryFn: getMenusService,
    select: (res) => res.data.menus as Menu[],
  });
};

export const useCreateMenu = (
  setModalOpen: (modalOpen: boolean) => void,
  setServerValidationError: (error: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Menu) => createMenuService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MENUS_QUERY_KEY });
      setModalOpen(false);
      setServerValidationError(null); 
    },
    onError: (error: any) => {
      setServerValidationError(error);
    },
  });
};

export const useUpdateMenu = (
  setModalOpen: (modalOpen: boolean) => void,
  setServerValidationError: (error: any) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: Menu) => updateMenuService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MENUS_QUERY_KEY });
      setModalOpen(false);
      setServerValidationError(null); 
    },
    onError: (error: any) => {
      setServerValidationError(error); 
    },
  });
};

export const useChangeStatusMenu = (setStatusModalOpen: (statusModalOpen: boolean) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      changeStatusMenuService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MENUS_QUERY_KEY });
      setStatusModalOpen(false)
    },
  });
};