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
  carType: yup.string().nullable(), // اختیاری
  plateNumber: yup
    .string()
    .nullable() // اختیاری
    .matches(
      /^\d{1,2}\s?-\s?\d{1,3}\s?[آ-ی]?\s?\d{1,3}$/,
      'فرمت پلاک معتبر نیست، مثال: ۱۵ - ۱۳۹ ج ۱۲',
    ),
});
