import { useState } from 'react';
import DefinitionItem from './item';


export default function MealType() {
  const [serverValidationError, setServerValidationError] = useState<any>(null);

  const items = [
    { id: 1, name: 'چلوکباب', category: 'اقتصادی', is_daily: true, is_active: true, code: 123 },
    { id: 2, name: 'چلوجوجه کباب', category: 'شرکتی', is_daily: true, is_active: true, code: 123 },
    { id: 3, name: 'سبزی‌پلو با ماهی', category: 'اقتصادی', is_daily: false, is_active: true, code: 123 },
    { id: 4, name: 'چلوگوشت', category: 'ویژه', is_daily: false, is_active: true, code: 123 },
    { id: 5, name: 'مرغ پلو', category: 'ویژه', is_daily: false, is_active: true, code: 123 },
    { id: 6, name: 'مرغ بریان', category: 'ویژه', is_daily: false, is_active: true, code: 123 },
    { id: 7, name: 'خورشت قورمه‌سبزی', category: 'شرکتی', is_daily: false, is_active: true, code: 123 },
  ];

  const mealTypes = [
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
  ]

  return (
    <>
      {mealTypes.map((mealType) => (
        <DefinitionItem
          key={mealType.id}
          isLoading={false}
          isError={false}
          title={mealType.name}
          items={items}
          onToggle={(id: number) => console.log(id)}
          name={''}
          isPending={false}
          changeStatusDirectly={(id: number) => console.log(id)}
          setStatusModalOpen={() => console.log('')}
          serverValidationError={serverValidationError}
          setServerValidationError={setServerValidationError}
        />
      ))}
    </>
  );
}