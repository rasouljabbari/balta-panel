import { Card, CardBody, CardHeader } from '@/components/shared/card';
import SharedModal from '@/components/shared/custom-modal';
import EmptyBox from '@/components/shared/empty-box';
import ErrorBox from '@/components/shared/error-box';
import ErrorsBox from '@/components/shared/errors-box';
import { Skeleton } from '@/components/shared/skeleton-loader';
import { useResetOnClose } from '@/hooks/use-reset-onClose';
import { cn } from '@/utils/cn';
import { CirclePlus } from 'lucide-react';
import { useRef, useState } from 'react';
import { Button } from 'rg-dst';
import type { Item, ItemProps } from '../type';
import DefinitionItemList from './item-list';


export default function DefinitionItem({
  isPending,
  title,
  Icon,
  items = [],
  onAdd,
  onEdit,
  onToggle,
  FormRenderer,
  modalOpen,
  setModalOpen,
  statusModalOpen,
  setStatusModalOpen,
  changeStatusDirectly,
  serverValidationError,
  setServerValidationError,
  isLoading,
  isError,
}: ItemProps & { setServerValidationError?: (err: any) => void }) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [mode, setMode] = useState<'add' | 'edit'>('add');

  const formRef = useRef<{ submit: () => void }>(null);

  const hasItems = items.length > 0;

  const handleAddClick = () => {
    setSelectedItem(null);
    setMode('add');
    setModalOpen(true);
  };

  const handleEditClick = (item: Item) => {
    setSelectedItem(item);
    setMode('edit');
    setModalOpen(true);
  };

  const handleCloseModal = useResetOnClose({
    reset: () => { },
    resetValues: undefined,
    onClose: () => {
      setModalOpen(false);
      if (setServerValidationError) setServerValidationError(null);
    },
  });

  const onSubmit = (data: Item) => {
    if (mode === 'add') {
      onAdd(data);
    } else if (selectedItem) {
      onEdit({ ...selectedItem, ...data });
    }
  };

  const modalTitle = mode === 'add' ? `افزودن ${title}` : `ویرایش ${title}`;

  return (
    <>
      <Card className={cn(hasItems && 'h-full')}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-center gap-xl">
              <div className="flex-center border p-3 border-gray-light-200 rounded-lg shadow-sm">
                <Icon />
              </div>
              <h2 className="text-lg font-semibold text-gray-light-900">
                {title}
              </h2>
            </div>

            <Button
              onClick={handleAddClick}
              disabled={isError || isLoading}
              variant="secondaryColor"
              className="h-5xl px-4! hover:bg-transparent"
              leftIcon={<CirclePlus size={20} />}
            >
              افزودن
            </Button>
          </div>
        </CardHeader>

        <CardBody>
          {isLoading ? (
            Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-18.5 bg-gray-50 mb-4" />
            ))
          ) : isError ? (
            <ErrorBox title={`بارگزاری لیست ${title} با خطا مواجه شده است!`} />
          ) : hasItems ? (
            <DefinitionItemList
              items={items}
              onEdit={handleEditClick}
              onToggle={onToggle}
              title={title}
              statusModalOpen={statusModalOpen}
              setStatusModalOpen={setStatusModalOpen}
              isPending={isPending}
              changeStatusDirectly={changeStatusDirectly}
            />
          ) : (
            <EmptyBox
              title={`لیست ${title} خالی است`}
              image="/assets/images/empty-order.webp"
            />
          )}
        </CardBody>
      </Card>

      <SharedModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        confirmText={mode === 'add' ? 'ذخیره' : 'ذخیره تغییرات'}
        onConfirm={() => formRef.current?.submit()}
        isPending={isPending}
      >
        <FormRenderer
          ref={formRef}
          mode={mode}
          defaultValues={selectedItem}
          formId={`${title}-form`}
          onSubmit={onSubmit}
          serverValidationError={serverValidationError}
          modalOpen={modalOpen}
        />

        {
          typeof serverValidationError?.error === 'string' &&
          <ErrorsBox className='mt-6' errors={serverValidationError?.error as string} />
        }

      </SharedModal>
    </>
  );
}