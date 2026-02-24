import type { LoginFormValues } from '@/features/auth/type';
import { getData } from '@/services/api-method-functions';

export async function loginApi(inputValues: LoginFormValues, isCrm?: boolean, crmToken?: string) {
  return await getData({
    endPoint: `admin/v1/auth/login`,
    type: 'post',
    dataParams: inputValues,
    isCrm,
    default_token: crmToken ?? null
  });
}
