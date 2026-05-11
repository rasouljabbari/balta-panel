import { SquarePen } from 'lucide-react';
import { Button } from 'rg-dst';
import { ForkIcon } from '@/components/icons/order-icons';

export default function MealsTableHeader() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-xl">
        <div className="flex items-center justify-center border border-gray-light-200 p-[10px] rounded-lg">
          <ForkIcon />
        </div>
        <h3 className="text-lg font-semibold text-rtext-primary-900">
          آیتم های سفارش
        </h3>
      </div>
      <Button
        variant="secondaryGray"
        leftIcon={<SquarePen size={20} color="#344054" />}
      >
        ویرایش
      </Button>
    </div>
  );
}
