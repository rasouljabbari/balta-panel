import { submitFormData } from '@/services/api-method-functions';
import type { UploadFileResponse } from '../type';

export const uploadFileService = async (file: File): Promise<UploadFileResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  return submitFormData({
    endPoint: 'admin/v1/files',
    type: 'post',
    formData,
  });
};
