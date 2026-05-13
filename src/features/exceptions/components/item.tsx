import { Funnel } from 'lucide-react';
import ItemPanel from '@/components/shared/item-panel';
import type { ItemProps } from '../type';
import ExceptionItemList from './item-list';
import { Button } from 'rg-dst';
import { useEffect, useState } from 'react';
import FilterModal from '@/features/exceptions/components/filter-modal';
import type { Option } from '@/components/shared/type';
import type { Item } from '../type';
import SharedModal from '@/components/shared/custom-modal';
import { useDeleteExceptionStatus } from '@/features/exceptions/hooks/use-delete-status';
import { useCreateException } from '@/features/exceptions/hooks/use-create-exception';
import { formatGregorianToPersianLongDate } from '@/utils/format-gregorian-to-persian-label';
import { toast } from 'react-toastify';

type ToggleIntent = 'activate' | 'deactivate';

export default function ExceptionItem(props: ItemProps) {
  const {
    isPending,
    title,
    items = [],
    mealId,
    date,
    isLoading,
    isError,
  } = props;
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState<Option[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
  const [localItems, setLocalItems] = useState(items);

  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [pendingItem, setPendingItem] = useState<Item | null>(null);
  const [pendingIntent, setPendingIntent] = useState<ToggleIntent | null>(
    null,
  );

  const deleteException = useDeleteExceptionStatus();
  const createException = useCreateException();

  const mutationPending =
    deleteException.isPending || createException.isPending;

  const hasItems = items.length > 0;

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const persianDateLabel = date ? formatGregorianToPersianLongDate(date) : '';

  const itemDisplayLabel = (item: Item) =>
    `${item.name} ${item.category}`.trim();

  const handleToggleRequest = (item: Item) => {
    const intent: ToggleIntent = item.exclusion ? 'activate' : 'deactivate';
    setPendingItem(item);
    setPendingIntent(intent);
    setStatusModalOpen(true);
  };

  const handleCloseModal = () => {
    setStatusModalOpen(false);
    setPendingItem(null);
    setPendingIntent(null);
  };

  const handleConfirmToggle = async () => {
    if (!pendingItem || !pendingIntent || !date) {
      handleCloseModal();
      return;
    }

    const foodId = pendingItem.foodId ?? pendingItem.id;
    const exclusionId = pendingItem.exclusion?.id ?? null;

    try {
      if (pendingIntent === 'deactivate') {
        if (exclusionId != null) {
          await deleteException.mutateAsync(exclusionId);
        } else {
          await createException.mutateAsync({
            food_id: foodId,
            meal_id: mealId,
            date,
          });
        }
      } else {
        if (exclusionId == null) {
          toast.error('رکورد استثنا برای این آیتم یافت نشد.');
          return;
        }
        await deleteException.mutateAsync(exclusionId);
      }
      handleCloseModal();
    } catch {
      // toast handled in hooks
    }
  };

  const modalTitle =
    pendingIntent === 'activate'
      ? 'فعال کردن آیتم'
      : pendingIntent === 'deactivate'
        ? 'غیر فعال کردن آیتم'
        : '';

  const modalBody =
    pendingItem && pendingIntent ? (
      <p className="text-gray-light-600 leading-relaxed">
        {pendingIntent === 'deactivate' ? (
          <>
            شما در حال غیرفعال کردن آیتم «{itemDisplayLabel(pendingItem)}» در
            «وعده {title}» روز «{persianDateLabel}» هستید. آیا این تغییر وضعیت را
            تایید می‌کنید؟
          </>
        ) : (
          <>
            شما در حال فعال کردن آیتم «{itemDisplayLabel(pendingItem)}» در «وعده{' '}
            {title}» روز «{persianDateLabel}» هستید. آیا این تغییر وضعیت را تایید
            می‌کنید؟
          </>
        )}
      </p>
    ) : null;

  return (
    <>
      <FilterModal
        isOpen={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <SharedModal
        isOpen={statusModalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        confirmText="تایید"
        cancelText="انصراف"
        onConfirm={handleConfirmToggle}
        isPending={mutationPending}
        confirmButtonClassName="!bg-utility-error-600 hover:!bg-utility-error-700"
      >
        {modalBody}
      </SharedModal>
      <ItemPanel
        title={title}
        hasItems={hasItems}
        isLoading={isLoading}
        isError={isError}
        headerRight={(
          <Button
            onClick={() => setOpenFilterModal(true)}
            variant="secondaryGray"
            leftIcon={<Funnel size={20} color="var(--color-gray-light-700)" />}
          >
            فیلترها
          </Button>
        )}
      >
        <ExceptionItemList
          items={localItems}
          isPending={isPending || mutationPending}
          onToggleClick={handleToggleRequest}
        />
      </ItemPanel>
    </>
  );
}
