import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleExceptionStatusService } from "../services/delete-status";
import { toast } from "react-toastify";

export const useDeleteExceptionStatus = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (id: number) =>
        toggleExceptionStatusService(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['exclusions'] });
        toast.success('وضعیت استثنا با موفقیت تغییر کرد.');
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };