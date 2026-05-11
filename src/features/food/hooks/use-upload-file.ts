import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { uploadFileService } from '../services/upload-file';

export const useUploadFile = () => {
  return useMutation({
    mutationFn: (file: File) => uploadFileService(file),
    onSuccess: () => {
      toast.success('فایل با موفقیت آپلود شد.');
    },
    onError: (error: any) => {
      console.log('upload file error', error);
      toast.error('آپلود فایل با خطا مواجه شد.');
    },
  });
};
