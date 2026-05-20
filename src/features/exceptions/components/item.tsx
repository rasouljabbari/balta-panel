import { Funnel } from 'lucide-react';
import ItemPanel from '@/components/shared/item-panel';
import ExceptionItemList from './item-list';
import { Button } from 'dst-rg';
import { useEffect, useState, useMemo } from 'react';
import FilterModal from '@/features/exceptions/components/filter-modal';
import type { Option } from '@/components/shared/type';
import type { Item, ItemProps, ToggleIntent } from '@/features/exceptions/type';
import SharedModal from '@/components/shared/custom-modal';
import { useDeleteExceptionStatus } from '@/features/exceptions/hooks/use-delete-status';
import { useCreateException } from '@/features/exceptions/hooks/use-create-exception';
import { formatGregorianToPersianLongDate } from '@/utils/format-gregorian-to-persian-label';
import { toast } from 'react-toastify';
import EmptyBox from '@/components/shared/empty-box';

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

    const foodId = pendingItem.id;
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

  const filtersActive =
    selectedMenus.length > 0 ||
    selectedCategories.length > 0 ||
    selectedStatus.length > 0;

  const filteredItems = useMemo(() => {
    return localItems.filter((item: Item) => {
      const menuMatch =
        selectedMenus.length === 0
          ? true
          : (item.menus ?? []).some((m) =>
              selectedMenus.some(
                (menu: Option) => String(menu.value) === String(m.id),
              ),
            );

      const categoryMatch =
        selectedCategories.length === 0
          ? true
          : item.categoryId != null &&
            selectedCategories.some(
              (category: Option) =>
                String(category.value) === String(item.categoryId),
            );

      const statusMatch =
        selectedStatus.length === 0
          ? true
          : selectedStatus.some((status: Option) => {
              if (status.value === 'active') return item.exclusion == null;
              if (status.value === 'inactive') return item.exclusion != null;
              return false;
            });

      return menuMatch && categoryMatch && statusMatch;
    });
  }, [localItems, selectedMenus, selectedCategories, selectedStatus]);

  return (
    <>
      <FilterModal
        isOpen={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        appliedFilters={{
          menus: selectedMenus,
          categories: selectedCategories,
          status: selectedStatus,
        }}
        onApplyFilters={({ menus, categories, status }) => {
          setSelectedMenus(menus);
          setSelectedCategories(categories);
          setSelectedStatus(status);
        }}
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
        {hasItems ? (
          filtersActive && filteredItems.length === 0 ? (
            <EmptyBox
              title="هیچ آیتمی با فیلترهای انتخاب‌شده یافت نشد"
              image="/assets/images/empty-order.webp"
            />
          ) : (
            <ExceptionItemList
              items={filteredItems}
              isPending={isPending || mutationPending}
              onToggleClick={handleToggleRequest}
            />
          )
        ) : null}
      </ItemPanel>
    </>
  );
}
