import * as yup from 'yup';
import type { InferType } from 'yup';

export const addDriverSchema = yup.object({
  firstName: yup.string().required(), 
  lastName: yup.string().required(),
  mobile: yup
    .string()
    .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است')
    .required(),
  nationalCode: yup
    .string()
    .matches(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required(),
  birthDate: yup.date().nullable(),
  gender: yup.string().optional(),
  carType: yup.string().optional(),
  plateNumber: yup
    .string()
    .optional()
    .test(
      'plate-format',
      'فرمت پلاک معتبر نیست (مثال: 15 - 139 ج 12)',
      (value) => {
        if (!value) return true;
        return /^[0-9۰-۹]{2}\s?-\s?[0-9۰-۹]{3}\s?[بجدرسصطقلمنوهی]\s?[0-9۰-۹]{2}$/.test(
          value,
        );
      },
    ),
  userCode: yup.string().optional(),
  joinDate: yup.string().optional(),
});

export type FormValues = InferType<typeof addDriverSchema>;

export const addDriverDefaultValues: FormValues = {
  firstName: '',
  lastName: '',
  mobile: '',
  nationalCode: '',
  birthDate: null,
  gender: '',
  carType: undefined,
  plateNumber: undefined,
};
