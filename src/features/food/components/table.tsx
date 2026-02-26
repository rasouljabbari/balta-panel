import { useState } from 'react';
import type { FoodItem } from '../type';
import { fakeFoods } from './data';
import FoodTable from './food-table';

export default function TableFood() {
  const [foods] = useState<FoodItem[]>(fakeFoods);

  const onSearch = (val: string) => {
    console.log(val)
  }

  const handleAdd = () => {
    console.log('افزودن غذا');
  };

  const handleEdit = (food: FoodItem) => {
    console.log('ویرایش غذا:', food);
  };

  return <FoodTable onSearch={onSearch} data={foods} onAdd={handleAdd} onEdit={handleEdit} />;
}
