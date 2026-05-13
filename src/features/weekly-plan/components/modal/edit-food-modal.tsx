import { useState } from 'react';
import { Minus, Pencil, Plus } from 'lucide-react';
import { Badge } from 'rg-dst';
import SharedModal from '@/components/shared/shared-modal';
import type { SuggestModalProps } from '../../types';

type FoodItem = {
  id: number;
  name: string;
  price: string;
  type: string;
  quantity: number;
};

export default function EditFoodModal({
  showModal,
  onClose,
}: SuggestModalProps) {
  // Sample food items state
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: 1,
      name: 'ماکارونی',
      price: '۱۷۰،۰۰۰ تومان',
      type: 'شرکتی',
      quantity: 20,
    },
    { id: 2, name: 'کتلت', price: '۱۵۰،۰۰۰ تومان', type: 'شرکتی', quantity: 20 },
  ]);

  // Increase quantity
  const onIncrease = (id: number) => {
    setFoodItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 5 } : item,
      ),
    );
  };

  // Decrease quantity
  const onDecrease = (id: number) => {
    setFoodItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(5, item.quantity - 5) }
          : item,
      ),
    );
  };

  // Handle input change
  const onQuantityChange = (id: number, value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) return;
    setFoodItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: num } : item)),
    );
  };

  return (
    <SharedModal
      isOpen={showModal}
      onClose={onClose}
      icon={<Pencil size={16} color="#667085" />}
      iconBgClass="bg-gray-light-100"
      title="ویرایش تعداد غذا"
      confirmText="تایید"
      cancelText="انصراف"
      onConfirm={() => console.log('Final quantities:', foodItems)}
    >
      <div className="flex flex-col gap-xl">
        <p className="text-gray-light-600 text-start">
          ویرایش تعداد غذاهای وعده ناهار - حداکثر تا ± ۵ پرس
        </p>

        {foodItems.map((item) => (
          <div
            key={item.id}
            className="px-3xl py-2xl border border-gray-light-200 rounded-xl flex flex-col gap-lg"
          >
            <div className="flex items-center gap-xs">
              <h2 className="text-xl font-semibold text-[#344054]">
                {item.name}
              </h2>
              <Badge color="gray" className="whitespace-nowrap">{item.type}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <Badge color="gray" className="whitespace-nowrap">{item.price}</Badge>
              <div className="flex items-center gap-2 text-gray-light-700">
                <button
                  onClick={() => onIncrease(item.id)}
                  className="w-10 h-10 text-xl flex items-center justify-center border border-gray-light-300 rounded-xl hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5" color="#344054" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(item.id, e.target.value)}
                  className="w-18 h-10 text-center text-gray-light-500 font-medium border border-gray-light-300 rounded-xl px-2 py-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => onDecrease(item.id)}
                  className="w-10 h-10 text-xl flex items-center justify-center border border-gray-light-300 rounded-xl hover:bg-gray-100"
                >
                  <Minus className="w-5 h-5" color="#344054" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SharedModal>
  );
}
