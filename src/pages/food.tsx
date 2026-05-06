import { useListFood } from '@/features/food/hooks/use-list-food'
import FoodSheet from '@/features/food/components/food-sheet';
import FoodTable from '@/features/food/components/food-table';
import type { FoodItem } from '@/features/food/type';
import { useState } from 'react';

export default function TableFood() {
  const { data: foodData, isLoading } = useListFood();


  const onSearch = (val: string) => {
    console.log(val)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'create' | 'edit'>('create');
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAdd = () => {
    setMode('create');
    setEditingId(null);
    setIsOpen(true);
  };

  const handleEdit = (row: FoodItem) => {
    setMode('edit');
    setEditingId(row.id);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditingId(null);
  };

  return ( 
    <>
      <FoodTable isLoading={isLoading} onSearch={onSearch} data={foodData ?? []} onAdd={handleAdd} onEdit={handleEdit} />
      <FoodSheet
        open={isOpen}
        onClose={handleClose}
        mode={mode}
        foodId={editingId ?? undefined}
      />
    </>
  );
}
