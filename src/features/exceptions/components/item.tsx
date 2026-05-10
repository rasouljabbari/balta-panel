import { Funnel } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import ErrorBox from '@/components/shared/error-box';
import { Skeleton } from '@/components/shared/skeleton-loader';
import { cn } from '@/utils/cn';
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
      <Card className={cn(hasItems && 'h-full')}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-center gap-xl">
              <h2 className="text-lg font-semibold text-gray-light-900">
                {title}
              </h2>
            </div>
            <Button
              onClick={()=> setOpenFilterModal(true)}
              variant="secondaryGray"
              leftIcon={
                <Funnel size={20} color="var(--color-gray-light-700)" />
              }
            >
              فیلترها
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
            <ExceptionItemList
              items={localItems}
              onToggle={onToggle}
              title={title}
              isPending={isPending}
              statusModalOpen={false}
              setStatusModalOpen={()=> console.log('')}
              changeStatusDirectly={handleStatusChange}
            />
          ) : (
            <EmptyBox
              title={`لیست ${title} خالی است`}
              image="/assets/images/empty-order.webp"
            />
          )}
        </CardBody>
      </Card>
    </>
  );
}