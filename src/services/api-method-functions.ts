import { handleError } from '@/helper/handle-error';
<<<<<<< HEAD
=======
import type { GetData } from '@/types/api';
import { API_MAIN_URL, CRM_API_URL } from '@/utils/config';
>>>>>>> 0b4251732abd4fecd7f98ac469436a2a76c5caf8
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { GetData } from '@/types/api';
import { getCookie } from '../utils/cookies';
import { constructGetParams } from './construct-get-params';
import { constructHeaders } from './construct-headers';
import { handleResponse } from './response-handler';

<<<<<<< HEAD

// Environment configuration
const MAIN_URL = import.meta.env.VITE_API_MAIN_URL;
const AUTHENTICATION_URL = import.meta.env.VITE_API_AUTHENTICATION_URL;

=======
>>>>>>> 0b4251732abd4fecd7f98ac469436a2a76c5caf8
// Authentication token
const AUTH_TOKEN = getCookie('auth_token');

// Types for better type safety
interface FormDataPostParams {
  endPoint: string;
  formData: any;
  default_token?: string;
  type: 'post' | 'put';
  isHeaderJson?: boolean;
  hasTenant?: boolean;
  hasExcel?: boolean;
}

/**
 * Utility function to determine if an endpoint requires authentication
 */
const requiresAuthentication = (endPoint: string): boolean => {
  const publicEndpoints = ['auth/login', 'register', 'forgot-password'];
  return !publicEndpoints.some((publicEndpoint) =>
    endPoint.includes(publicEndpoint),
  );
};

/**
 * Utility function to validate required parameters
 */
const validateApiParams = (endPoint: string, type: string): void => {
  if (!endPoint) {
    throw new Error('Endpoint is required');
  }
  if (!type) {
    throw new Error('Request type is required');
  }
  if (!['get', 'post', 'delete', 'patch'].includes(type.toLowerCase())) {
    throw new Error(
      `Invalid request type: ${type}. Must be 'get', 'post', or 'delete'`,
    );
  }
};

/**
 * Determines the appropriate base URL based on the endpoint
 */
const getBaseUrl = (isCrm: boolean): string => {
  return isCrm ? CRM_API_URL : API_MAIN_URL;
};

/**
 * Prepares form data based on content type
 */
const prepareFormData = (dataParams: any, isHeaderJson: boolean): any => {
  return isHeaderJson ? dataParams : new URLSearchParams(dataParams);
};

/**
 * Makes a POST request
 */
const makePostRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
  isHeaderJson: boolean,
): Promise<any> => {
  const formData = prepareFormData(dataParams, isHeaderJson);
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}${endPoint}`,
      formData,
      headers,
    );
    return handleResponse(response);
  } catch (error) {
    await handleError(error);
    return Promise.reject(error);
  }
};

/**
 * Makes a DELETE request
 */
const makeDeleteRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.delete(
      `${baseUrl}${endPoint}`,
      {
        ...headers,
        data: dataParams,
      },
    );
    return handleResponse(response);
  } catch (error) {
    await handleError(error);
    return Promise.reject(error);
  }
};

/**
 * Makes a PATCH request
 */
const makePatchRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
): Promise<any> => {
  try {
    const formData = constructGetParams(dataParams);
    const response: AxiosResponse<any> = await axios.patch(
      `${baseUrl}${endPoint}${formData}`,
      headers,
    );
    return handleResponse(response);
  } catch (error) {
    await handleError(error);
    return Promise.reject(error);
  }
};

/**
 * Makes a GET request
 */
const makeGetRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
): Promise<any> => {
  try {
    const formData = constructGetParams(dataParams);
    const response: AxiosResponse<any> = await axios.get(
      `${baseUrl}${endPoint}${formData}`,
      headers,
    );
    return handleResponse(response);
  } catch (error) {
    await handleError(error);
    return Promise.reject(error);
  }
};

/**
 * Main function to handle different types of API requests (GET, POST, DELETE)
 *
 * @param params - Configuration object for the API request
 * @returns Promise resolving to the API response
 */
export const getData = async ({
  endPoint,
  type,
  dataParams = {},
  isToken = true,
  isHeaderJson = false,
  default_token = null,
  isCrm = false,
}: GetData): Promise<any> => {
  // Validate input parameters
  validateApiParams(endPoint, type);

  // Determine authentication requirements
  const needsAuth = requiresAuthentication(endPoint);
  const token = default_token ?? (isToken && needsAuth ? AUTH_TOKEN : null);
<<<<<<< HEAD
console.log(token)
  const headers = constructHeaders(token, isHeaderJson, hasTenant);
  const baseUrl = getBaseUrl(endPoint);
=======

  const headers = constructHeaders(token, isHeaderJson);
  const baseUrl = getBaseUrl(isCrm);
>>>>>>> 0b4251732abd4fecd7f98ac469436a2a76c5caf8

  console.log(headers)

  switch (type.toLowerCase()) {
    case 'post':
      return makePostRequest(
        baseUrl,
        endPoint,
        dataParams,
        headers,
        isHeaderJson,
      );

    case 'delete':
      return makeDeleteRequest(baseUrl, endPoint, dataParams, headers);

    case 'patch':
      return makePatchRequest(baseUrl, endPoint, dataParams, headers);

    case 'get':
    default:
      return makeGetRequest(baseUrl, endPoint, dataParams, headers);
  }
};

/**
 * Handles form data POST/PUT requests with file uploads
 *
 * @param params - Configuration object for the form data request
 * @returns Promise resolving to the API response
 */
export const submitFormData = async ({
  endPoint,
  formData,
  type = 'post',
  default_token = undefined,
  isHeaderJson = false,
  hasTenant = false,
}: FormDataPostParams): Promise<any> => {
  const token = default_token || AUTH_TOKEN;
  const headers = constructHeaders(token, isHeaderJson, hasTenant);
  const baseUrl = getBaseUrl(false);

  try {
    const response: AxiosResponse<any> = await axios[type](
      baseUrl + endPoint,
      formData,
      headers,
    );
    return handleResponse(response);
  } catch (error) {
    await handleError(error);
    return Promise.reject(error);
  }
<<<<<<< HEAD
};

/**
 * Convenience function for GET requests
 */
export const apiGet = async (
  endPoint: string,
  dataParams: any = {},
  options: Partial<GetData> = {},
): Promise<any> => {
  return getData({
    endPoint,
    type: 'get',
    dataParams,
    ...options,
  });
};

/**
 * Convenience function for POST requests
 */
export const apiPost = async (
  endPoint: string,
  dataParams: any = {},
  options: Partial<GetData> = {},
): Promise<any> => {
  return getData({
    endPoint,
    type: 'post',
    dataParams,
    ...options,
  });
};

/**
 * Convenience function for DELETE requests
 */
export const apiDelete = async (
  endPoint: string,
  dataParams: any = {},
  options: Partial<GetData> = {},
): Promise<any> => {
  return getData({
    endPoint,
    type: 'delete',
    dataParams,
    ...options,
  });
};

/**
 * Convenience function for file uploads
 */
export const apiUpload = async (
  endPoint: string,
  formData: FormData,
  options: Partial<FormDataPostParams> = {},
): Promise<any> => {
  return getFormDataPost({
    endPoint,
    formData,
    type: 'post',
    ...options,
  });
=======
>>>>>>> 0b4251732abd4fecd7f98ac469436a2a76c5caf8
};