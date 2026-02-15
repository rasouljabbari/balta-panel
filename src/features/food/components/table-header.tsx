import { useState } from 'react';
import { CirclePlus, Funnel, Search, Trash2 } from 'lucide-react';
import { Button, Input } from 'rg-dst';
import { FoodIcons } from '@/components/icons/food-icons';
import SharedModal from '@/components/shared/custom-modal';
import CustomSelect from '@/components/shared/custom-select';
import type { FoodTableHeaderProps } from '../type';


export default function FoodTableHeader({ onAdd }: FoodTableHeaderProps) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-xl">
          <div className="border border-gray-light-200 p-3 shadow-xs rounded-lg">
            <FoodIcons />
          </div>
          <h2 className="text-lg font-semibold text-gray-light-900">
            لیست غذاها
          </h2>
        </div>

        <div className="flex items-center gap-lg">
          <div className="relative">
            <Input
              type="search"
              placeholder="جستجو در آیتم‌ها"
              className="h-10 pr-10 placeholder:text-sm placeholder:text-gray-light-500"
            />
            <Search
              size={20}
              className="absolute right-3 top-6 -translate-y-1/2 text-gray-light-500"
            />
          </div>

          <Button
            variant="secondaryColor"
            className="h-10 px-4!"
            leftIcon={<CirclePlus size={20} />}
            onClick={onAdd}
          >
            افزودن آیتم
          </Button>

          <Button
            onClick={() => setOpenFilter(true)}
            variant="secondaryGray"
            className="h-11"
            leftIcon={<Funnel size={20} />}
          >
            فیلترها
          </Button>
        </div>
      </div>
      <SharedModal
        footerLeft={
          <Button
            variant="secondaryColor"
            className="bg-white border-0"
            leftIcon={<Trash2 size={20} />}
          >
            حذف تمام فیلترها
          </Button>
        }
        isOpen={openFilter}
        onClose={() => setOpenFilter(false)}
        title={'فیلترها'}
        confirmText="اعمال"
        confirmButtonWidth=""
        icon={<Funnel color="var(--color-gray-light-500)" />}
        iconBgClass="bg-gray-light-100"
      >
        <div className="flex flex-col gap-xl">
          <CustomSelect
            options={[]}
            placeholder="منو را انتخاب نمایید"
            label="منو"
          />
          <CustomSelect
            options={[]}
            placeholder="دسته بندی را انتخاب نمایید"
            label="دسته بندی"
          />
          <CustomSelect
            options={[]}
            placeholder="وعده را انتخاب نمایید"
            label="وعده"
          />
          <CustomSelect
            options={[]}
            placeholder=""
            label="وضعیت نمایش در منو"
          />
        </div>
      </SharedModal>
    </>
  );
}