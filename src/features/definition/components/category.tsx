import { CategoryIcon } from '@/components/icons/definition-icons';
import { useCategories, useChangeStatusCategory, useCreateCategory, useUpdateCategory } from '@/features/definition/hooks/category';
import { useState } from 'react';
import type { Category } from '../type';
import CategoryForm from './form/category';
import DefinitionItem from './item';


export default function CategoryDefinition() {
  const [modalOpen, setModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [serverValidationError, setServerValidationError] = useState<any>(null);

  const { data: categories = [], isLoading, isError } = useCategories();

  const createCategoryServiceMutation = useCreateCategory(
    setModalOpen,
    setServerValidationError,
  );
  const updateCategoryServiceMutation = useUpdateCategory(
    setModalOpen,
    setServerValidationError,
  );
  const changeStatusCategoryServiceMutation = useChangeStatusCategory(setStatusModalOpen)

  const handleAdd = (data: Category) => {
    createCategoryServiceMutation.mutate(data)
  };

  const handleEdit = (item: Category & { id: number }) => {
    updateCategoryServiceMutation.mutate(item)
  };

  const handleToggle = (item: Category & { id: number }) => {
    changeStatusCategoryServiceMutation.mutate(item.id)
  };

  return (
    <DefinitionItem
      isLoading={isLoading}
      isError={isError}
      title="دسته‌بندی‌ها"
      Icon={CategoryIcon}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      items={categories}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onToggle={handleToggle}
      FormRenderer={CategoryForm}
      name={''}
      isPending={createCategoryServiceMutation.isPending || updateCategoryServiceMutation.isPending || changeStatusCategoryServiceMutation.isPending}
      statusModalOpen={statusModalOpen}
      setStatusModalOpen={setStatusModalOpen}
      changeStatusDirectly={(id: number) => changeStatusCategoryServiceMutation.mutate(id)}
      serverValidationError={serverValidationError}
      setServerValidationError={setServerValidationError}
    />
  );
}