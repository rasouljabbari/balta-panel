import { getCookie } from '@/utils/cookies';

export const API_MAIN_URL = import.meta.env.VITE_API_MAIN_URL ?? '';
export const MAIN_URL = import.meta.env.VITE_MAIN_URL ?? '';
export const AUTH_TOKEN = getCookie('auth_token') as string | undefined;
