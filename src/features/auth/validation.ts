import { phoneRegex } from '@/utils/regex';
import { isValidIranianNationalCode } from '@/utils/valid-iran-national-code';
import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  identification_code: yup
    .string()
    .required()
    .test(
      'iranian-national-code',
      'کد ملی وارد شده معتبر نیست',
      isValidIranianNationalCode
    ),
  password: yup
    .string()
    .required()
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

export const forgotPasswordValidationSchema = yup.object({
  phone: yup
    .string()
    .required()
    .min(11, 'شماره موبایل باید 11 رقم باشد')
    .matches(phoneRegex, 'شماره موبایل معتبر نیست'),
});

export const verifyCodeValidationSchema = yup.object({
  code: yup
    .string()
    .required()
    .length(4, 'کد تایید باید 4 رقم باشد')
    .matches(/^\d+$/, 'کد تایید باید فقط شامل اعداد باشد'),
});

export const resetPasswordValidationSchema = yup.object({
  password: yup
    .string()
    .required()
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
  password_confirmation: yup
    .string()
    .required('تایید رمز عبور الزامی است')
    .oneOf([yup.ref('password')], 'رمز عبور و تایید رمز عبور باید یکسان باشد'),
});

export const forgetUsernameValidationSchema = yup.object({
  phone: yup
    .string()
    .required()
    .min(11, 'شماره موبایل باید 11 رقم باشد')
    .matches(phoneRegex, 'شماره موبایل معتبر نیست'),
});

export const newPasswordValidationSchema = yup.object({
  password: yup
    .string()
    .required()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .matches(/[!@#$%^&*]/, 'رمز عبور باید حداقل یک کاراکتر خاص (!@#$%^&*) داشته باشد')
    .matches(/[a-z]/, 'رمز عبور باید شامل حروف کوچک باشد')
    .matches(/[A-Z]/, 'رمز عبور باید شامل حروف بزرگ باشد')
    .matches(/[0-9]/, 'رمز عبور باید شامل عدد باشد'),
  password_confirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'رمز عبور و تایید رمز عبور باید یکسان باشد'),
});
