
export const handleResponse = (response: any): any => {
  const status = response?.status;

  if ([200, 201, 204].includes(status)) {
    return response.data;
  }
  throw response;
};
