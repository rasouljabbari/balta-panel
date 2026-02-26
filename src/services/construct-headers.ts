import type { Headers } from '@/types/api';

export const constructHeaders = (
  token: string | null | undefined,
  hasExcel?: boolean,
): { headers: Headers } => {

  const headers: Headers = {
    'Access-Control-Allow-Origin': '*/*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (hasExcel) {
    headers['Accept'] =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }


  return { headers };
};
