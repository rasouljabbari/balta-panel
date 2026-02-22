import { deleteCookie } from "../utils/cookies";

export const handleResponse = (response: any): any => {
  const status = response?.status;

  if ([200, 201, 204].includes(status)) {
    return response.data;
  }

  if (status === 401) {
    deleteCookie('auth_token');
    window.location.href = '/login';
    return;
  }

  throw response;
};
