import { MEALS } from "@/features/weekly-plan/components/data";
import MealCard from "@/features/weekly-plan/components/meals-card";
import type { DayItem, MealConfig } from "@/features/weekly-plan/types";
import { Badge } from "rg-dst";


function isPastDay(dayDate: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  dayDate.setHours(0, 0, 0, 0);

  return dayDate < today;
}

export default function DayColumn({ 
  day, 
  isCurrentWeek, 
  onRegisterFood,
  onViewDetails
}: { 
  day: DayItem; 
  isCurrentWeek: boolean;
  onRegisterFood: (date: Date, mealType: 'صبحانه' | 'ناهار' | 'شام') => void;
  onViewDetails: (date: Date, mealType: 'صبحانه' | 'ناهار' | 'شام', meal: MealConfig) => void;
}) {
  const isThursday = day.date.getDay() === 4; 
  const isFriday = day.date.getDay() === 5;   
  const isPast = isPastDay(day.date);

  const isEmptyMeal = isThursday || isFriday; 
  const disabled =isCurrentWeek && (isPast || isEmptyMeal);     

  function getMealProps(meal: MealConfig) {
    return {
      disabled: disabled,
      isEmptyMeal: isEmptyMeal,
      meal,
    };
  }

  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-md">
          <p
            className={`text-lg font-semibold ${
              day.isToday ? 'text-utility-brand-600' : 'text-gray-light-700'
            }`}
          >
            {day.dayName}
          </p>

          <div className="border border-gray-light-300 w-px h-3xl" />

          <p className="text-sm text-gray-light-600">{day.fullDate}</p>
        </div>
        {isEmptyMeal && <Badge color="orange" className="whitespace-nowrap">تعطیل</Badge>}
      </div>

      <hr
        className={
          day.isToday ? 'border-utility-brand-600' : 'border-gray-light-200'
        }
      />

      <div className="mt-3xl">
        <MealCard
          {...getMealProps(MEALS.breakfast)}
          isCurrentWeek={isCurrentWeek}
          dayDate={day.date}
          onRegisterFood={() => onRegisterFood(day.date, 'صبحانه')}
          onViewDetails={() =>
            onViewDetails(day.date, 'صبحانه', MEALS.breakfast)
          }
        />
      </div>

      <div className="mt-xl">
        <MealCard
          {...getMealProps(MEALS.lunch)}
          isCurrentWeek={isCurrentWeek}
          dayDate={day.date}
          onRegisterFood={() => onRegisterFood(day.date, 'ناهار')}
          onViewDetails={() => onViewDetails(day.date, 'ناهار', MEALS.lunch)}
        />
      </div>

      <div className="mt-xl">
        <MealCard
          {...getMealProps(MEALS.dinner)}
          isCurrentWeek={isCurrentWeek}
          dayDate={day.date}
          onRegisterFood={() => onRegisterFood(day.date, 'شام')}
          onViewDetails={() => onViewDetails(day.date, 'شام', MEALS.dinner)}
        />
      </div>
    </div>
  );
}