import { useMutation } from "@tanstack/react-query";
import { createExceptionService } from "../services/create-exception";
import { type CreateExceptionPayload } from "@/features/exceptions/type";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateException = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: CreateExceptionPayload) => createExceptionService(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['exclusions'] });
            toast.success('استثنا با موفقیت ثبت شد.');
        },
        onError: (error: any) => {
            toast.error(error.message);
        },
    });
};