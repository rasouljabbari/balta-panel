import { PERSIAN_LETTERS } from '@/features/drivers/data';
import { phoneRegex } from '@/utils/regex';
import { isValidIranianNationalCode } from '@/utils/valid-iran-national-code';
import type { DateObject } from 'react-multi-date-picker';
import type { InferType } from 'yup';
import * as yup from 'yup';

const plateLetters = PERSIAN_LETTERS.map((item) => String(item));

export const addDriverSchema = yup.object({
  first_name: yup.string().label('نام').required(),
  last_name: yup.string().label('نام خانوادگی').required(),
  phone: yup
    .string()
    .required().label('شماره موبایل')
    .min(11, 'شماره موبایل باید 11 رقم باشد')
    .matches(phoneRegex, 'شماره موبایل معتبر نیست'),

  national_id: yup
    .string()
    .label('کدملی')
    .required()
    .test(
      'iranian-national-code',
      'کدملی وارد شده معتبر نیست',
      isValidIranianNationalCode
    ),

  birth_date: yup.mixed().nullable().required().label('تاریخ تولد'),
  gender: yup
    .string()
    .label('جنسیت')
    .oneOf(['male', 'female'], 'جنسیت را انتخاب کنید')
    .required(),

  car_type: yup.string().required().label('نوع خودرو'),

  car_plate: yup
    .object({
      first: yup
        .string()
        .required('دو رقم اول پلاک الزامی است')
        .matches(/^\d{2}$/, 'دو رقم اول پلاک نامعتبر است'),

      letter: yup
        .string()
        .oneOf(plateLetters, 'حرف وسط پلاک معتبر نیست')
        .required('حرف پلاک الزامی است'),

      second: yup
        .string()
        .required('سه رقم پلاک الزامی است')
        .matches(/^\d{3}$/, 'سه رقم پلاک نامعتبر است'),

      state: yup
        .string()
        .required('کد شهر پلاک الزامی است')
        .matches(/^\d{2}$/, 'کد شهر پلاک نامعتبر است'),
    })
    .required(),
});


export type FormValues = Omit<
  InferType<typeof addDriverSchema>,
  'birth_date' | 'car_plate'
> & {
  birth_date: DateObject | null;
  car_plate: {
    first?: string;
    letter: string;
    second?: string;
    state?: string;
  };
};

export const addDriverDefaultValues: FormValues = {
  first_name: '',
  last_name: '',
  phone: '',
  national_id: '',
  birth_date: null as any,
  gender: undefined as any,
  car_type: '',
  car_plate: { first: undefined, letter: '', second: undefined, state: undefined },

};