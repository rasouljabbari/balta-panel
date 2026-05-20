import { useMemo } from 'react';
import ExceptionItem from './item';
import { useListExceptions } from '../hooks/use-list-exceptions';
import { MealId, type ExceptionsMeal } from '../type';
import { useSearchParams } from 'react-router-dom';


export default function MealType() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date') || undefined;
  const { data, isPending, isError } = useListExceptions(date);

  const mealsById = useMemo(() => {
    const map = new Map<number, ExceptionsMeal>();
    (data?.meals ?? []).forEach((meal) => {
      map.set(meal.id, meal);
    });
    return map;
  }, [data?.meals]);

  const mealOrder: MealId[] = [
    MealId.BREAKFAST,
    MealId.LUNCH,
    MealId.DINNER,
  ];

  const mealTitles: Record<MealId, string> = {
    [MealId.BREAKFAST]: 'صبحانه',
    [MealId.LUNCH]: 'ناهار',
    [MealId.DINNER]: 'شام',
  };

  const dateParam = date ?? '';

  return (
    <>
      {mealOrder.map((mealId) => {
        const meal = mealsById.get(mealId);

        return (
          <ExceptionItem
            key={mealId}
            mealId={mealId}
            date={dateParam}
            isLoading={isPending}
            isError={isError}
            title={meal?.name ?? mealTitles[mealId]}
            items={meal?.items ?? []}
            isPending={isPending}
          />
        );
      })}
    </>
  );
}