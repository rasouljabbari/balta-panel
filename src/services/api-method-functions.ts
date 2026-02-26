import { handleError } from '@/services/api-error-handler';
import type { GetData } from '@/types/api';
import { API_MAIN_URL, CRM_API_URL } from '@/utils/config';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { getCookie } from '../utils/cookies';
import { constructGetParams } from './construct-get-params';
import { constructHeaders } from './construct-headers';
import { handleResponse } from './response-handler';

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
  if (!['get', 'post', 'delete', 'patch', 'put'].includes(type.toLowerCase())) {
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
 * Makes a POST request
 */
const makePostRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      `${baseUrl}${endPoint}`,
      dataParams,
      headers,
    );
    return handleResponse(response);
  } catch (error) {
    console.log("catch error", error)
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
 * Makes a PUT request
 */
const makePutRequest = async (
  baseUrl: string,
  endPoint: string,
  dataParams: any,
  headers: any,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.put(
      `${baseUrl}${endPoint}`,
      dataParams,
      headers,
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
  headers: any,
): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.patch(
      `${baseUrl}${endPoint}`,
      null,
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
  default_token = null,
  isCrm = false,
}: GetData): Promise<any> => {
  // Validate input parameters
  validateApiParams(endPoint, type);

  // Determine authentication requirements
  const needsAuth = requiresAuthentication(endPoint);

  const AUTH_TOKEN = getCookie('auth_token');

  const token = default_token ?? (isToken && needsAuth ? AUTH_TOKEN : null);

  const headers = constructHeaders(token);
  const baseUrl = getBaseUrl(isCrm);

  switch (type.toLowerCase()) {
    case 'post':
      return makePostRequest(baseUrl, endPoint, dataParams, headers);

    case 'patch':
      return makePatchRequest(baseUrl, endPoint, headers);
    case 'delete':
      return makeDeleteRequest(baseUrl, endPoint, dataParams, headers);

    case 'put':
      return makePutRequest(baseUrl, endPoint, dataParams, headers);

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
}: FormDataPostParams): Promise<any> => {
  const AUTH_TOKEN = getCookie('auth_token');

  const token = default_token || AUTH_TOKEN;
  const headers = constructHeaders(token);
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
};