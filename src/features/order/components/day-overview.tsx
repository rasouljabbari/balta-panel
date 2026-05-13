import { cn } from '@/utils/cn';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';


const meals = [
  {
    title: 'صبحانه',
    bgColor: 'bg-yellow-50',
    items: [
      {
        name: 'کره مربا',
        count: 74,
      },
      {
        name: 'نان پنیر',
        count: 32,
      },
    ],
  },
  {
    title: 'نهار',
    bgColor: 'bg-green-light-50',
    items: [
      {
        name: 'چلوکباب',
        count: 120,
      },
      {
        name: 'چلومرغ',
        count: 85,
      },
    ],
  },
  {
    title: 'شام',
    bgColor: 'bg-fuchsia-50',
    items: [
      {
        name: 'خورشت قیمه',
        count: 64,
      },
      {
        name: 'خورشت قورمه‌سبزی',
        count: 41,
      },
    ],
  },
];

export default function DayOverview() {
    const navigate = useNavigate();
      const { day } = useParams();


  return (
    <Card>
      <CardHeader className="border-b border-gray-light-200">
        <div className="flex justify-between">
          <div className="flex items-center gap-xl">
            <div className="flex items-center rounded-md border border-gray-light-200 p-[10px] cursor-pointer">
              <ArrowRight
                size={20}
                color="#323232"
                onClick={() => navigate(-1)}
              />
            </div>

            <h2 className="text-lg font-semibold text-rtext-primary-900">
              نمای کلی سفارش‌ها
            </h2>
          </div>

          <div className="flex items-center gap-xs rounded-md border border-gray-light-300 px-[14px] py-[10px]">
            <CalendarDays size={20} color="#344054" />

            <span className="text-sm font-semibold text-gray-light-700">
              یکشنبه ۱۹ بهمن ۱۴۰۴
            </span>
          </div>
        </div>
      </CardHeader>

      <div className="grid grid-cols-3">
        {meals.map((meal) => (
          <div
            onClick={() => navigate(`/orders/${meal.title}/${day}`)}
            key={meal.title}
            className="min-h-[700px] border-r border-gray-light-200 first:border-r-0 hover:bg-gray-light-50 cursor-pointer"
          >
            <div className="border-b border-gray-light-200 p-lg">
              <h3 className="text-center text-md font-semibold text-gray-light-700">
                {meal.title}
              </h3>
            </div>

            <div className="flex flex-col gap-md px-3xl py-xl">
              {meal.items.length === 0 ? (
                <span className="text-center text-sm text-gray-light-400">
                  سفارشی ثبت نشده است
                </span>
              ) : (
                meal.items.map((item) => (
                  <div
                    key={item.name}
                    className={cn(
                      'flex items-center justify-between rounded-md px-md py-xs',
                      meal.bgColor,
                    )}
                  >
                    <span className="text-sm font-medium text-gray-light-700">
                      {item.name}
                    </span>

                    <span className="text-sm font-medium text-gray-light-700">
                      {item.count}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}