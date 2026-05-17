import { changeStatusMenuService, createMenuService, getMenusService, updateMenuService } from "@/features/definition/services/menu";
import type { Menu } from "@/features/definition/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


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

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: MENUS_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError(null);

      toast.success('منو با موفقیت ایجاد شد');
    },

    onError: (error: any) => {
      setServerValidationError(error);

      toast.error(error?.response?.data?.message || 'خطا در ایجاد منو');
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

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: MENUS_QUERY_KEY,
      });

      setModalOpen(false);

      setServerValidationError(null);

      toast.success('منو با موفقیت ویرایش شد');
    },

    onError: (error: any) => {
      setServerValidationError(error);

      toast.error(error?.response?.data?.message || 'خطا در ویرایش منو');
    },
  });
};

export const useChangeStatusMenu = (
  setStatusModalOpen: (statusModalOpen: boolean) => void,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      changeStatusMenuService(id),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: MENUS_QUERY_KEY,
      });

      setStatusModalOpen(false);

      toast.success('وضعیت منو با موفقیت تغییر کرد');
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          'خطا در تغییر وضعیت منو',
      );
    },
  });
};