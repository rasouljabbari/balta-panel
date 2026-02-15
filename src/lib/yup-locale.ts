import * as yup from 'yup';

// Global Persian validation messages
yup.setLocale({
  mixed: {
    required: 'این فیلد الزامی است',
    notType: 'مقدار وارد شده معتبر نیست',
    oneOf: 'مقدار وارد شده معتبر نیست',
  },
  string: {
    min: ({ min }) => `حداقل ${min} کاراکتر وارد کنید`,
    max: ({ max }) => `حداکثر ${max} کاراکتر مجاز است`,
    length: ({ length }) => `باید دقیقاً ${length} کاراکتر باشد`,
    email: 'ایمیل وارد شده معتبر نیست',
    matches: 'فرمت وارد شده صحیح نیست',
  },
  number: {
    min: ({ min }) => `مقدار باید حداقل ${min} باشد`,
    max: ({ max }) => `مقدار باید حداکثر ${max} باشد`,
    integer: 'فقط عدد صحیح مجاز است',
    positive: 'فقط عدد مثبت مجاز است',
    negative: 'فقط عدد منفی مجاز است',
  },
  date: {
    min: 'تاریخ وارد شده معتبر نیست',
    max: 'تاریخ وارد شده معتبر نیست',
  },
  array: {
    min: ({ min }) => `حداقل ${min} آیتم باید انتخاب شود`,
    max: ({ max }) => `حداکثر ${max} آیتم مجاز است`,
  },
});
