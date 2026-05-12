import { useState } from 'react';
import OrderCard from '@/features/weekly-plan/components/order-card';
import type { MealCardProps } from '@/features/weekly-plan/types';
import { isPastDay, isToday } from '@/features/weekly-plan/utils';
import { cn } from '@/utils/cn';
import { Pencil, Trash2 } from 'lucide-react';
import { Button, TooltipWrapper } from 'rg-dst';
import { FileIcon, PlateCircleIcon } from '@/components/icons/order-icons';
import SharedModal from '@/components/shared/shared-modal';
import EditFoodModal from './modal/edit-food-modal';


export default function MealCard({
  meal,
  disabled,
  isEmptyMeal,
  isCurrentWeek,
  dayDate,
  onRegisterFood,
  onViewDetails,
}: MealCardProps) {
  const [openTrash, setOpenTrash] = useState(false);
  const[openPencil , setOpenPencil] = useState(false)

  const isEmpty = isEmptyMeal ?? false;
  const isFutureWeek = !isCurrentWeek;
  const shouldPassDisabled = isCurrentWeek && disabled;
  const isPast = dayDate ? isPastDay(dayDate) : false;
  const isTodayDay = dayDate ? isToday(dayDate) : false;

  const handlePencilClick = () => {
    if (isTodayDay) return;
    if (!isCurrentWeek) {
      onRegisterFood?.();
      return;
    }
    setOpenPencil(true);
  };

  return (
    <OrderCard
      day={meal.label}
      variant={isEmpty ? 'default' : meal.variant}
      dayClassName={isEmpty ? 'text-gray-700' : meal.dayClassName}
      centerDay
      className="relative min-h-[212px] group"
      disabled={shouldPassDisabled}
    >
      {/* ===== Content ===== */}
      {isEmpty ? (
        <>
          <p className="flex items-center justify-center text-center text-sm text-gray-light-700">
            در این وعده غذایی ثبت نشده است
          </p>

          {/* Plate icon */}
          <div
            className={cn(
              'absolute right-13 -bottom-12 transition-opacity',
              isFutureWeek && 'group-hover:opacity-0',
            )}
          >
            <PlateCircleIcon width={100} height={100} />
          </div>

          {/* Add meal button (future week + hover) */}
          {isFutureWeek && (
            <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 w-[166px]">
              <Button
                variant="secondaryGray"
                className="w-full"
                onClick={onRegisterFood}
              >
                ثبت غذا
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col gap-md max-h-[130px] overflow-y-auto no-scrollbar">
          {meal.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-sm font-bold text-gray-light-700">
                {item.title}
              </span>
              <span className="text-sm text-rtext-tertiary-600">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ===== Actions ===== */}
      {!isEmpty && !isPast && (
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-0 left-0 right-0 p-md bg-white ">
          <div className="flex flex-col gap-xs">
            <hr className="border-gray-light-300 w-full" />

            <div className="flex items-center gap-5xl justify-center py-sm ">
              <TooltipWrapper
                content="نمایش جزییات"
                position="bottom"
                dir="rtl"
                contentClassName="text-xs"
              >
                <button
                  className="p-xs hover:bg-gray-light-100 rounded-lg transition-colors"
                  onClick={onViewDetails}
                >
                  <FileIcon width={22} height={22} />
                </button>
              </TooltipWrapper>

              <TooltipWrapper
                content={isTodayDay ? 'مهلت ویرایش پایان یافته' : 'ویرایش'}
                position="bottom"
                dir="rtl"
                contentClassName="text-xs"
              >
                <button
                  className={cn(
                    'p-xs hover:bg-gray-light-100 rounded-lg transition-colors',
                    isTodayDay && 'cursor-not-allowed',
                  )}
                  disabled={isTodayDay}
                  onClick={handlePencilClick}
                >
                  <Pencil
                    size={20}
                    color={isTodayDay ? '#98A2B3' : '#667085'}
                  />
                </button>
              </TooltipWrapper>

              <TooltipWrapper
                content={isCurrentWeek ? 'مهلت حذف پایان یافته' : 'حذف'}
                position="bottom"
                dir="rtl"
                contentClassName="text-xs"
              >
                <button
                  className={cn(
                    'p-xs hover:bg-gray-light-100 rounded-lg transition-colors',
                    isCurrentWeek && 'cursor-not-allowed',
                  )}
                  disabled={isCurrentWeek}
                  onClick={() => setOpenTrash(true)}
                >
                  <Trash2
                    size={20}
                    color={isCurrentWeek ? '#98A2B3' : '#FF4405'}
                  />
                </button>
              </TooltipWrapper>
            </div>
          </div>
          <SharedModal
            isOpen={openTrash}
            onClose={() => setOpenTrash(false)}
            title="حذف وعده غذایی"
            confirmText="حذف"
          >
            <p className="text-gray-light-600 text-start">
              با حذف این مورد، غذای ثبت شده برای دوشنبه - ناهار پاک می شود و جای
              آن خالی خواهد شد.
            </p>
          </SharedModal>
        </div>
      )}
      <EditFoodModal
        onClose={() => setOpenPencil(false)}
        showModal={openPencil}
      />
    </OrderCard>
  );
}