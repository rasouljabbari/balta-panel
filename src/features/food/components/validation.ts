import * as yup from 'yup';


export const foodSheetSchema = yup.object({
  name: yup.string().required('نام آیتم الزامی است'),

  meals: yup.array().of(
    yup.object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
  ).min(1, 'لطفا حداقل یک وعده را انتخاب کنید').required(),

  menus: yup.array().of(
    yup.object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
  ).min(1, 'لطفا حداقل یک منو را انتخاب کنید').required(),

  categories: yup.array().of(
    yup.object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
  ).min(1, 'لطفا حداقل یک دسته بندی را انتخاب کنید').required(),

  price: yup.string()
    .required('قیمت الزامی است')
    .matches(/^\d+$/, 'قیمت باید عدد باشد')
    .test('positive', 'قیمت باید بزرگتر از صفر باشد', val => !!val && Number(val) > 0),

  description: yup.string().required('توضیحات الزامی است'),

  isDailyFood: yup.boolean().required(),

  weekDays: yup.array(yup.string().required())
    .default([])
    .when('isDailyFood', {
      is: true,
      then: schema => schema.min(1, 'حداقل یک روز هفته را انتخاب کنید'),
    }),

  image: yup.mixed()
    .required()
    .default(null)
    .test('fileSize', 'حجم فایل باید کمتر از 2 مگابایت باشد', file => !file || (file as File).size <= 2 * 1024 * 1024)
    .test('fileType', 'فرمت تصویر باید jpg یا png باشد', file => !file || ['image/jpeg', 'image/png'].includes((file as File).type)),

  isVisible: yup.boolean().required(),
});