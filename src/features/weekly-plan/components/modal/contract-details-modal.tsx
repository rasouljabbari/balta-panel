import SharedModal from '@/components/shared/custom-modal';
import { CirclePlus } from 'lucide-react';
import { CustomerIcon, BranchIcon, MenuIcon, HashtagIcon, ClockIcon } from '@/components/icons/contract-icon';
import { Badge } from 'rg-dst';

export default function ContractDetailsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const branchDetails = {
    customer_name: 'راهکارگستران',
    branch: 'شعبه ۱ آبرسان',
    meals: [
      {
        meal_type: 'وعده ناهار',
        menus: ['ویژه', 'اقتصادی', 'شرکتی'],
        order_count: 150,
        delivery_time: '12:00',
      },
      {
        meal_type: 'وعده شام',
        menus: ['اقتصادی', 'شرکتی'],
        order_count: 120,
        delivery_time: '21:00',
      },
    ],
  };

  return (
    <SharedModal
      isOpen={isOpen}
      onClose={onClose}
      title="اطلاعات قرارداد"
      icon={<CirclePlus color="var(--color-gray-light-500)" />}
      iconBgClass="bg-gray-light-100"
      showFooter={false}
      aria-label="اطلاعات قرارداد"
      bodyClassName="!p-0"
      widthClass="w-[640px]"
    >
      <div className="px-3xl py-4xl space-y-4xl">
        {/* Header Info */}
        <div className="space-y-2xl border-b border-gray-light-200 pb-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-lg text-gray-light-600">
              <CustomerIcon />
              <span>نام مشتری</span>
            </div>

            <span className="text-gray-light-700 text-lg font-medium">
              {branchDetails.customer_name}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-lg text-gray-light-600">
              <BranchIcon />
              <span>شعبه</span>
            </div>

            <span className="text-gray-light-700 text-lg font-medium">
              {branchDetails.branch}
            </span>
          </div>
        </div>

        {/* Meals */}
        <div className="space-y-4xl">
          {branchDetails.meals.map((meal, index) => (
            <div
              key={index}
              className={`space-y-2xl ${
                index !== branchDetails.meals.length - 1
                  ? 'border-b border-gray-light-200 pb-4xl'
                  : ''
              }`}
            >
              <h3 className="text-lg font-bold text-gray-light-700 text-lg">
                {meal.meal_type}
              </h3>

              {/* Menus */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-lg text-gray-light-600">
                  <MenuIcon />
                  <span>منو ها</span>
                </div>

                <div className="flex flex-wrap gap-md max-w-[60%] justify-end">
                  {meal.menus.map((menu) => (
                    <Badge key={menu} color='gray' size='md'>
                      {menu}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Order Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-lg text-gray-light-600">
                  <HashtagIcon />
                  <span>تعداد سفارش</span>
                </div>

                <span className="text-gray-light-700 text-lg font-medium">
                  {meal.order_count} پرس
                </span>
              </div>

              {/* Delivery Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-lg text-gray-light-600">
                  <ClockIcon />
                  <span>ساعت تحویل</span>
                </div>

                <span className="text-gray-light-700 text-lg font-medium">
                  {meal.delivery_time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SharedModal>
  );
}