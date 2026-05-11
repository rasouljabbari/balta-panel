import FoodSheet from '@/features/food/components/food-sheet';
import FoodTable from '@/features/food/components/food-table';
import { useListFood } from '@/features/food/hooks/use-list-food';
import type { FoodItem } from '@/features/food/type';
import { useState } from 'react';

export default function TableFood() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const { data: foodData, isLoading } = useListFood({ page, per_page: 10, search: searchValue });


  const onSearch = (val: string) => {
    setSearchValue(val)
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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <FoodTable
        isLoading={isLoading}
        searchValue={searchValue}
        onSearch={onSearch}
        data={foodData?.foods ?? []}
        meta={foodData?.meta}
        onPageChange={handlePageChange}
        onAdd={handleAdd}
        onEdit={handleEdit} />
      <FoodSheet
        open={isOpen}
        onClose={handleClose}
        mode={mode}
        foodId={editingId ?? undefined}
      />
    </>
  );
}
