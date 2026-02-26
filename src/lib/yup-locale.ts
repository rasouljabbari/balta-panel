import * as yup from 'yup';

// Global Persian validation messages
yup.setLocale({
  mixed: {
    required: ({ label }) => label ? `فیلد ${label} الزامی است` : 'این فیلد الزامی است',
    notType: 'مقدار وارد شده معتبر نیست',
    oneOf: 'مقدار وارد شده معتبر نیست',
  },
  string: {
    min: ({ min, label }) => `فیلد ${label} باید حداقل ${min} کاراکتر باشد`,
    max: ({ max, label }) => `فیلد ${label} حداکثر ${max} کاراکتر می‌تواند باشد`,
    matches: ({ label }) => `فرمت فیلد ${label} صحیح نیست`,
    length: ({ length }) => `باید دقیقاً ${length} کاراکتر باشد`,
    email: 'ایمیل وارد شده معتبر نیست',
  },
  number: {
    min: ({ min, label }) => `فیلد ${label} باید حداقل ${min} کاراکتر باشد`,
    max: ({ max, label }) => `فیلد ${label} حداکثر ${max} کاراکتر می‌تواند باشد`,
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
