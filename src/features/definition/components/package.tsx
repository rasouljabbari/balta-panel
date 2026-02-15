import { useState } from 'react';
import { useChangeStatusPackage, useCreatePackage, usePackaging, useUpdatePackage } from '@/features/definition/hooks/packages';
import type { Package } from '@/features/definition/type';
import { PackagingIcon } from '@/components/icons/definition-icons';
import PackageForm from './form/package';
import DefinitionItem from './item';


export default function PackageDefinition() {
  const [modalOpen, setModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [serverValidationError, setServerValidationError] =useState<any>(null);


  const { data: items = [], isLoading, isError } = usePackaging();

const createPackageServiceMutation = useCreatePackage(
  setModalOpen,
  setServerValidationError,
  );
  const updatePackageServiceMutation = useUpdatePackage(
    setModalOpen,
    setServerValidationError,
  );
  const changeStatusPackageServiceMutation = useChangeStatusPackage(setStatusModalOpen)

  const handleAdd = (data: Package) => {
    createPackageServiceMutation.mutate(data)
  };

  const handleEdit = (item: Package) => {
    updatePackageServiceMutation.mutate(item)
  };

  const handleToggle = (item: Package) => {
    changeStatusPackageServiceMutation.mutate(item.id)
  };

  return (
    <DefinitionItem
      isLoading={isLoading}
      isError={isError}
      title="بسته‌بندی‌ها"
      Icon={PackagingIcon}
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      items={items}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onToggle={handleToggle}
      FormRenderer={PackageForm}
      name={''}
      isPending={
        createPackageServiceMutation.isPending ||
        updatePackageServiceMutation.isPending ||
        changeStatusPackageServiceMutation.isPending
      }
      statusModalOpen={statusModalOpen}
      setStatusModalOpen={setStatusModalOpen}
      changeStatusDirectly={(id: number) =>
        changeStatusPackageServiceMutation.mutate(id)
      }
      serverValidationError={serverValidationError}
      setServerValidationError={setServerValidationError}
    />
  );
}