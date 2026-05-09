import * as yup from 'yup';


const timeHHmmRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

export const editContractsSchema = yup.object({
  mealTime: yup
    .string()
    .defined()
    .required('ساعت تحویل الزامی است')
    .matches(timeHHmmRegex, 'فرمت ساعت باید HH:mm باشد'),

  orderCount: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('تعداد سفارش باید عدد باشد')
    .required('تعداد سفارش الزامی است')
    .integer('تعداد سفارش باید عدد صحیح باشد')
    .min(1, 'تعداد سفارش باید حداقل 1 باشد'),

  variety: yup
    .number()
    .defined()
    .typeError('تنوع غذایی باید عدد باشد')
    .required('تنوع غذایی الزامی است')
    .integer('تنوع غذایی باید عدد صحیح باشد')
    .min(1, 'تنوع غذایی باید حداقل 1 باشد')
    .max(
      yup.ref('orderCount'),
      'تنوع غذایی نمی‌تواند بیشتر از تعداد سفارش باشد',
    ),

  driverId: yup
    .number()
    .nullable()
    .defined()
    .typeError('راننده را انتخاب کنید')
    .test('required-driver', 'راننده پیش‌فرض الزامی است', (v) => v !== null),

  kitchenNote: yup.string().defined().max(500, 'حداکثر 500 کاراکتر'),
  minOrder: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('حداقل سفارش باید عدد باشد')
    .required('حداقل سفارش الزامی است')
    .integer('حداقل سفارش باید عدد صحیح باشد')
    .min(1, 'حداقل سفارش باید حداقل 1 باشد'),
  maxOrder: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('حداکثر سفارش باید عدد باشد')
    .required('حداکثر سفارش الزامی است')
    .integer('حداکثر سفارش باید عدد صحیح باشد')
    .min(1, 'حداکثر سفارش باید حداقل 1 باشد'),

  editTolerance: yup
    .number()
    .defined()
    .typeError('تلرانس ویرایش باید عدد باشد')
    .required('تلرانس ویرایش الزامی است')
    .integer('تلرانس ویرایش باید عدد صحیح باشد')
    .min(1, 'تلرانس ویرایش سفارش باید حداقل 1 باشد'),

  isActive: yup.boolean().defined().required(),

  menus: yup
    .array()
    .defined()
    .of(yup.number().required())
    .min(1, 'حداقل یک منو را انتخاب کنید')
    .max(2, 'حداکثر دو منو قابل انتخاب است')
    .required(),
});