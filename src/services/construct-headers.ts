import type { Headers } from '@/types/api';

export const constructHeaders = (
  token: string | null | undefined,
  isHeaderJson?: boolean,
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
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (isHeaderJson) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded;';
    headers['Accept'] = '*/*';
    headers['Access-Control-Allow-Credentials'] = 'true';
  }

  return { headers };
};
