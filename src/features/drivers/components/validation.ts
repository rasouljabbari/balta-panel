import * as yup from 'yup';


export const addDriverSchema = yup.object({
  firstName: yup.string().required('نام الزامی است'),
  lastName: yup.string().required('نام خانوادگی الزامی است'),
  mobile: yup
    .string()
    .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است')
    .required('شماره موبایل الزامی است'),
  nationalCode: yup
    .string()
    .matches(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required('کد ملی الزامی است'),
  birthDate: yup.date().nullable(),
  gender: yup.string().required('جنسیت الزامی است'),
  carType: yup.string().nullable(),
  plateNumber: yup
    .string()
    .nullable()
    .matches(
      /^[0-9۰-۹]{2}\s?-\s?[0-9۰-۹]{3}\s?[بجدرسصطقلمنوهی]\s?[0-9۰-۹]{2}$/,
      'فرمت پلاک معتبر نیست (مثال: 15 - 139 ج 12)',
    ),
});