import { fakeFoods } from '@/features/food/components/data';
import FoodSheet from '@/features/food/components/food-sheet';
import FoodTable from '@/features/food/components/food-table';
import type { FoodItem } from '@/features/food/type';
import { useState } from 'react';

export default function TableFood() {
  const [foods] = useState<FoodItem[]>(fakeFoods);

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const handleAdd = () => {
    setMode('create');
    setSelectedFood(null);
    setIsOpen(true);
  };

  const handleEdit = (row: FoodItem) => {
    setMode('edit');
    setSelectedFood(row);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedFood(null);
  };

  return (
    <>
      <FoodTable data={foods} onAdd={handleAdd} onEdit={handleEdit} />
      <FoodSheet
        open={isOpen}
        onClose={handleClose}
        mode={mode}
        selectedFood={selectedFood}
      />
    </>
  );
}
