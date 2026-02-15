import { useState } from 'react';
import { useChangeStatusMenu, useCreateMenu, useMenus, useUpdateMenu } from '@/features/definition/hooks/menu';
import { MenuIcon } from '@/components/icons/definition-icons';
import type { Item, Menu } from '../type';
import MenuForm from './form/menu';
import DefinitionItem from './item';


export default function MenuDefinition() {
  const [modalOpen, setModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [serverValidationError, setServerValidationError] = useState<any>(null);

  const { data: items = [], isLoading, isError } = useMenus();

  const createMenuServiceMutation = useCreateMenu(
    setModalOpen,
    setServerValidationError,
  );
  const updateMenuServiceMutation = useUpdateMenu(
    setModalOpen,
    setServerValidationError,
  );
  const changeStatusMenuServiceMutation = useChangeStatusMenu(setStatusModalOpen)

  const handleAdd = (data: Menu) => {
    createMenuServiceMutation.mutate(data)
  };

  const handleEdit = (item: Menu) => {
    updateMenuServiceMutation.mutate(item)
  };

  const handleToggle = (item: Menu) => {
    changeStatusMenuServiceMutation.mutate(item.id)
  };

  return (
    <DefinitionItem
      isLoading={isLoading}
      isError={isError}
      title="منو‌ها"
      Icon={MenuIcon}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      items={items}
      onAdd={handleAdd as (v: Menu | Item) => void}
      onEdit={handleEdit as (v: Menu | Item) => void}
      onToggle={handleToggle as (v: Menu | Item) => void}
      FormRenderer={MenuForm}
      name={''}
      isPending={
        createMenuServiceMutation.isPending ||
        updateMenuServiceMutation.isPending ||
        changeStatusMenuServiceMutation.isPending
      }
      statusModalOpen={statusModalOpen}
      setStatusModalOpen={setStatusModalOpen}
      changeStatusDirectly={(id: number) =>
        changeStatusMenuServiceMutation.mutate(id)
      }
      serverValidationError={serverValidationError}
      setServerValidationError={setServerValidationError}
    />
  );
}