import { Funnel } from 'lucide-react';
import ItemPanel from '@/components/shared/item-panel';
import type { ItemProps } from '../type';
import ExceptionItemList from './item-list';
import { Button } from 'rg-dst';
import { useEffect, useState } from 'react';
import FilterModal from '@/features/exceptions/components/filter-modal';
import type { Option } from '@/components/shared/type';
import type { Item } from '../type';



export default function ExceptionItem({
  isPending,
  title,
  items = [],
  onToggle,
  changeStatusDirectly,
  isLoading,
  isError,
}: ItemProps & { setServerValidationError?: (err: any) => void }) {

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState<Option[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<Option[]>([]);
  const [localItems, setLocalItems] = useState(items);

  const hasItems = items.length > 0;

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const handleStatusChange = async (id: number) => {
    setLocalItems((prev : any) =>
      prev.map((item: Item) =>
        item.id === id
          ? { ...item, is_active: !item.is_active }
          : item
      )
    );
  
    await changeStatusDirectly(id);
  };


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
          onToggle={onToggle}
          title={title}
          isPending={isPending}
          statusModalOpen={false}
          setStatusModalOpen={() => console.log('')}
          changeStatusDirectly={handleStatusChange}
        />
      </ItemPanel>
    </>
  );
}