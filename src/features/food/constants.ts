import type { FoodFormValues } from "./type";

export const meal = [
    {
      id: 1,
      name: 'صبحانه'
    },
    {
      id: 2,
      name: 'ناهار'
    },
    {
      id: 3,
      name: 'شام'
    },
];
  
  
export const weekDays = [
    {
        day_translated: 'شنبه',
        day: 'saturday'
    },
    {
        day_translated: 'یکشنبه',
        day: 'sunday'
    },
    {
        day_translated: 'دوشنبه',
        day: 'monday'
    },
    {
        day_translated: 'سه شنبه',
        day: 'tuesday'
    },
    {
        day_translated: 'چهارشنبه',
        day: 'wednesday'
    },
    {
        day_translated: 'پنجشنبه',
        day: 'thursday'
    },
    {
        day_translated: 'جمعه',
        day: 'friday'
    },
];


export const DEFAULT_VALUES: FoodFormValues = {
    name: '',
    meal_types: [],
    menu_ids: [],
    category_id: null,
    price: '',
    description: '',
    is_daily: false,
    days: [],
    image: null,
    is_active: true,
  };