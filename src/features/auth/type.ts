import type { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface LoginFormValues {
  identification_code: string;
  password: string;
}

export interface ForgotPasswordFormValues {
  phone: string;
}

export interface VerifyCodeFormValues {
  code: string;
}

export interface ResetPasswordFormValues {
  password: string;
  password_confirmation: string;
}

export interface ForgetUsernameFormValues {
  phone: string;
}

export interface NewPasswordFormValues {
  password: string;
  password_confirmation: string;
}

export type PasswordFieldsProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
};
