  import type { MealConfig, MealType } from "@/features/weekly-plan/types";


  export const TABS = [
  { label: "هفته جاری", value: "current week" },
  { label: "هفته آینده", value: "feature week" },
  ] as const;

  export const WEEKLY_PLAN_TABS = [
    { label: 'برنامه های پیش فرض', value: 'Default programs' },
    { label: 'پیشنهاد کارشناس', value: 'Expert suggestion' },
  ] as const;

  export const DEFAULT_PROGRAMS = [
    {
      id: 1,
      title: 'برنامه غذایی ۱ - متعادل',
      description:
        'ترکیب متوازن از پروتئین، کربوهیدرات و سبزیجات برای مصرف روزانه',
    },
    {
      id: 2,
      title: 'برنامه غذایی ۲ - کم کالری',
      description: 'مناسب کاهش وزن با کالری کنترل شده و وعده های سبک تر.',
    },
    {
      id: 3,
      title: 'برنامه غذایی ۳ - پر انرژی',
      description: 'مناسب فعالیت بالا با وعده های مقوی و انرژی بخش.',
    },
  ];


  export const MEALS: Record<MealType, MealConfig> = {
    breakfast: {
      label: 'صبحانه',
      variant: 'yellow',
      dayClassName: 'text-yellow-700',
      items: [
        { title: 'نیمرو', count: '۲۰ پرس' },
        { title: 'نان و پنیر', count: '۲۰ پرس' },
      ],
    },
    lunch: {
      label: 'نهار',
      variant: 'green',
      dayClassName: 'text-green-light-700',
      items: [
        { title: 'قورمه سبزی', count: '۲۰ پرس' },
        { title: 'قیمه', count: '۲۰ پرس' },
        { title: 'نوشابه', count: '۴۰ پرس' },
        { title: 'قورمه سبزی', count: '۲۰ پرس' },
        { title: 'قیمه', count: '۲۰ پرس' },
        { title: 'نوشابه', count: '۴۰ پرس' },
      ],
    },
    dinner: {
      label: 'شام',
      variant: 'fuchsia',
      dayClassName: 'text-[#9F1AB1]',
      items: [
        { title: 'ماکارونی', count: '۲۰ پرس' },
        { title: 'نان کتلت', count: '۲۰ پرس' },
      ],
    },
  };