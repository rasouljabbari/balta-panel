import { Button } from "dst-rg";
import type { CartSummaryProps } from '@/features/order/types';
import { RamenIcon, CashIcon } from "@/components/icons/order-icons";
import { CirclePlus, CalendarDays, Clock3 } from "lucide-react";
import styles from './cart-summary.module.css';

export default function CartSummary({ 
  onShowSummary, 
  onSubmit, 
  showSummaryOpen,
  date,
  mealType,
  totalItems,
  totalAmount 
}: CartSummaryProps) {
  return (
    <div className="border-t border-gray-light-300 p-6">      
      <button
        onClick={onShowSummary}
        className="w-full flex items-center justify-between"
      >
        <span className="text-xl font-semibold text-gray-light-700">خلاصه سفارش</span>
        <span className="text-md font-medium text-brand-700">
          {showSummaryOpen ? 'بستن' : 'نمایش'}  
        </span>
      </button>

      <div className={`${styles.summaryDetails} ${showSummaryOpen ? styles.open : ''}`}>
        <div className="space-y-3 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-gray-light-500" />
              <span className="text-md text-gray-light-600">تاریخ</span>
            </div>
            
            <span className="text-lg font-medium text-gray-light-900">{date}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock3 className="w-5 h-5 text-gray-light-500" />
              <span className="text-md text-gray-light-600">ساعت تحویل</span>
            </div>
            
            <span className="text-lg font-medium text-gray-light-900">
              {mealType === 'صبحانه' ? '۰۸:۰۰ - ۱۰:۰۰' : mealType === 'ناهار' ? '۱۲:۰۰ - ۱۳:۰۰' : '۱۸:۰۰ - ۲۰:۰۰'}
            </span>
          </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RamenIcon className="w-6 h-6" />
                <span className="text-md text-gray-light-600">تعداد غذا</span>
              </div>
              <span className="text-lg font-medium text-gray-light-900">{totalItems} پرس</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CirclePlus className="w-5 h-5 text-gray-light-500" />
                <span className="text-md text-gray-light-600">افزودنی‌ها</span>
              </div>
              <span className="text-lg font-medium text-gray-light-900">{(totalAmount || 0).toLocaleString('fa-IR')} تومان</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CashIcon className="w-6 h-6" />
                <span className="text-md text-gray-light-600">مجموع مبلغ</span>
              </div>
              
              <span className="text-lg font-medium text-gray-light-900">{(totalAmount || 0).toLocaleString('fa-IR')} تومان</span>
            </div>
        </div>
      </div>

      <Button 
        onClick={onSubmit}
        className="w-full bg-utility-brand-600 hover:bg-utility-brand-700 text-white h-11 mt-4"
      >
        ثبت غذا
      </Button>
    </div>
  );
}


