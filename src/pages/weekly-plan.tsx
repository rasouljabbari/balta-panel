import { useMemo, useState } from 'react';
import OrderDetailsModal from '@/features/order/components/order-details-modal';
import OrderModal from '@/features/order/components/order-modal';
import type { CartItem, OrderDetails } from '@/features/order/types';
import SuggestModal from '@/features/weekly-plan/components/modal/suggest-modal';
import WeeklyPlanActions from '@/features/weekly-plan/components/weekly-plan-action';
import WeeklyPlanFooter from '@/features/weekly-plan/components/weekly-plan-footer';
import WeeklyPlanGrid from '@/features/weekly-plan/components/weekly-plan-grid';
import WeeklyPlanHeader from '@/features/weekly-plan/components/weekly-plan-header';
import type { MealConfig, TabType } from '@/features/weekly-plan/types';
import { getWeekDays } from '@/features/weekly-plan/utils';
import { Card } from '@/components/shared/card';
import SharedModal from '@/components/shared/shared-modal';

export default function WeeklyPlan() {
  const [tab, setTab] = useState<TabType>('current week');
  const [openCopyModal, setOpenCopyModal] = useState(false);
  const [openSuggestModal, setOpenSuggestModal] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedMealType, setSelectedMealType] = useState<
    'صبحانه' | 'ناهار' | 'شام'
  >('ناهار');

  const [selectedOrderDetails, setSelectedOrderDetails] =
    useState<OrderDetails | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);

  const isCurrentWeek = tab === 'current week';

  const days = useMemo(
    () => getWeekDays(isCurrentWeek ? 'current' : 'next'),
    [isCurrentWeek],
  );

  const handleRegisterFood = (
    date: Date,
    mealType: 'صبحانه' | 'ناهار' | 'شام',
  ) => {
    setSelectedDate(date);
    setSelectedMealType(mealType);
    setCart([]);
    setIsOrderModalOpen(true);
  };

  const handleViewDetails = (
    date: Date,
    mealType: 'صبحانه' | 'ناهار' | 'شام',
    meal: MealConfig,
  ) => {
    const orderDetails: OrderDetails = {
      id: `WP-${Date.now()}`,
      date: date.toLocaleDateString('fa-IR'),
      time:
        mealType === 'صبحانه'
          ? '۰۸:۰۰ - ۰۹:۰۰'
          : mealType === 'ناهار'
            ? '۱۲:۰۰ - ۱۳:۰۰'
            : '۱۹:۰۰ - ۲۰:۰۰',
      mealType,
      delivery: 'تحویل حضوری',
      items: meal.items.map((item) => ({
        title: item.title,
        price: 0,
        quantity: item.count,
      })),
      totalAmount: 0,
      status: meal.label,
      statusColor: 'blue',
    };

    setSelectedOrderDetails(orderDetails);
    setIsOrderDetailsModalOpen(true);
  };

  return (
    <>
      {/* Main Content */}
      <div className="relative pb-20">
        <Card className="p-3xl">
          <WeeklyPlanHeader tab={tab} onTabChange={setTab}>
            <WeeklyPlanActions
              disabled={isCurrentWeek}
              onCopyFood={() => setOpenCopyModal(true)}
              onSuggestFood={() => setOpenSuggestModal(true)}
            />
          </WeeklyPlanHeader>

          <hr className="border-gray-light-300 mt-3xl" />

          <WeeklyPlanGrid
            days={days}
            isCurrentWeek={isCurrentWeek}
            onRegisterFood={handleRegisterFood}
            onViewDetails={handleViewDetails}
          />
        </Card>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-[220px] 2xl:right-[320px] bg-white border-t border-gray-light-300 shadow-lg z-10">
        <div className="py-5 px-7">
          <WeeklyPlanFooter />
        </div>
      </div>

      {/* Copy Modal */}
      <SharedModal
        isOpen={openCopyModal}
        onClose={() => setOpenCopyModal(false)}
        title="تایید کپی برنامه هفته قبل"
        confirmText="کپی برنامه"
      >
        <p className="text-gray-light-600 text-start">
          با این کار، برنامه هفته قبل جایگزین برنامه فعلی می‌شود.
        </p>
      </SharedModal>

      {/* Suggest Modal */}
      <SuggestModal
        showModal={openSuggestModal}
        onClose={() => setOpenSuggestModal(false)}
      />

      {/* Order Modal */}
      {isOrderModalOpen && (
        <OrderModal
          onClose={() => setIsOrderModalOpen(false)}
          cart={cart}
          setCart={setCart}
          date={selectedDate}
          mealType={selectedMealType}
          mealSelectionLimitCount={2}
        />
      )}

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={isOrderDetailsModalOpen}
        onClose={() => setIsOrderDetailsModalOpen(false)}
        order={selectedOrderDetails}
      />
    </>
  );
}