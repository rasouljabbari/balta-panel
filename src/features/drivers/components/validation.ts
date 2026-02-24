import type { DateObject } from 'react-multi-date-picker';
import * as yup from 'yup';
import type { InferType } from 'yup';


export const addDriverSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  mobile: yup
    .string()
    .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است')
    .required('شماره موبایل الزامی است'),

  nationalCode: yup
    .string()
    .matches(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required('کد ملی الزامی است'),

  birthDate: yup.mixed().nullable().required('تاریخ تولد الزامی است'),
  gender: yup
    .string()
    .oneOf(['male', 'female'], 'جنسیت را انتخاب کنید')
    .required('جنسیت الزامی است'),

  carType: yup.string().required('نوع خودرو الزامی است'),

  plateNumber: yup
    .object({
      first: yup
        .number()
        .min(0, 'دو رقم اول باید حداقل 0 باشد')
        .max(99, 'دو رقم اول باید حداکثر 99 باشد')
        .required('دو رقم اول الزامی است'),
      letter: yup
        .string()
        .oneOf(
          [
            'ب',
            'پ',
            'ت',
            'ث',
            'ج',
            'چ',
            'ح',
            'خ',
            'د',
            'ذ',
            'ر',
            'ز',
            'ژ',
            'س',
            'ش',
            'ص',
            'ض',
            'ط',
            'ظ',
            'ع',
            'غ',
            'ف',
            'ق',
            'ک',
            'گ',
            'ل',
            'م',
            'ن',
            'و',
            'ه',
            'ی',
          ],
          'حرف وسط پلاک معتبر نیست',
        )
        .required('حرف وسط الزامی است'),
      second: yup
        .number()
        .min(0, 'سه رقم وسط باید حداقل 0 باشد')
        .max(999, 'سه رقم وسط باید حداکثر 999 باشد')
        .required('سه رقم وسط الزامی است'),
      state: yup
        .number()
        .min(0, 'دو رقم آخر باید حداقل 0 باشد')
        .max(99, 'دو رقم آخر باید حداکثر 99 باشد')
        .required('دو رقم آخر الزامی است'),
    })
    .required('پلاک خودرو الزامی است'),
});

// -----------------------------
// نوع TypeScript فرم
// -----------------------------
export type FormValues = Omit<
  InferType<typeof addDriverSchema>,
  'birthDate' | 'plateNumber'
> & {
  birthDate: DateObject | null;
  plateNumber: {
    first: number;
    letter: string; // allow any string here
    second: number;
    state: number;
  };
};
// -----------------------------
// مقدارهای پیش‌فرض فرم
// -----------------------------
export const addDriverDefaultValues: FormValues = {
  firstName: '',
  lastName: '',
  mobile: '',
  nationalCode: '',
  birthDate: null as any,
  gender: undefined as any,
  carType: '',
  plateNumber: { first: 0, letter: 'ب', second: 0, state: 0 },
  
};