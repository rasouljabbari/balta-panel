import { getData } from '@/services/api-method-functions';
import type { ListExceptionsResponse } from '../type';

export const listExceptionsService = async (
  date: string,
): Promise<ListExceptionsResponse> => {
  return getData({
    endPoint: 'admin/v1/exclusions',
    type: 'get',
    dataParams: { date },
  });
};

