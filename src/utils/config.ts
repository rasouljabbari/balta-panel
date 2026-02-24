import { getCookie } from '@/utils/cookies';

export const API_MAIN_URL = import.meta.env.VITE_API_MAIN_URL ?? '';
export const CRM_API_URL = import.meta.env.VITE_CRM_API_MAIN_URL ?? '';
export const AUTH_TOKEN = getCookie('auth_token') as string | undefined;

export const VITE_REDUX_SECRET_KEY =
    import.meta.env.VITE_REDUX_SECRET_KEY ?? '';
export const RAHKAR_GOSTARAN_URL =
    import.meta.env.VITE_RAHKAR_GOSTARAN_URL ?? '';
