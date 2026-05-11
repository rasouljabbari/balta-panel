import * as yup from 'yup';
import { normalizeDigits } from '@/utils/normalize-digits';

export const foodSheetSchema = yup.object({
  name: yup.string().required('نام آیتم الزامی است'),

  meal_types: yup
  .array()
  .of(yup.number().typeError('وعده نامعتبر است'))
  .min(1, 'حداقل یک وعده باید انتخاب شود')
  .required(),

  menu_ids: yup.array().of(
    yup.number().required(),
  ).min(1, 'لطفا حداقل یک منو را انتخاب کنید').required(),

  category_id: yup
  .number()
  .typeError('لطفا یک دسته بندی را انتخاب کنید')
  .required('لطفا یک دسته بندی را انتخاب کنید'),

  price: yup
    .string()
    .transform((_, originalValue) => normalizeDigits(originalValue))
    .required('قیمت الزامی است')
    .matches(/^\d+$/, 'قیمت باید عدد باشد')
    .test('positive', 'قیمت باید بزرگتر از صفر باشد', (val) => !!val && Number(val) > 0),

  is_daily: yup.boolean().required(),

  description: yup
  .string()
  .max(80, 'توضیحات نباید بیشتر از ۸۰ کاراکتر باشد')
  .notRequired(),

  days: yup.array(yup.string().required())
    .default([])
    .when('is_daily', {
      is: true,
      then: schema => schema.min(1, 'حداقل یک روز هفته را انتخاب کنید'),
    }),

    image: yup
    .mixed()
    .nullable()
    .test(
      'fileSize',
      'حجم فایل باید کمتر از 2 مگابایت باشد',
      (file) => {
        if (!file) return true;
  
        return (file as File).size <= 2 * 1024 * 1024;
      },
    )
    .test(
      'fileType',
      'فرمت تصویر باید jpg یا png باشد',
      (file) => {
        if (!file) return true;
  
        return ['image/jpeg', 'image/png'].includes(
          (file as File).type,
        );
      },
    ),

  is_active: yup.boolean().required(),
});