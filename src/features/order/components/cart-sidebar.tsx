import { useState } from "react";
import { CartIcon } from "@/components/icons";
import CartItem from "@/features/order/components/cart-item";
import EmptyCart from "@/features/order/components/empty-cart";
import CartSummary from "@/features/order/components/cart-summary";
import type { CartSidebarProps } from '@/features/order/types';

export default function CartSidebar({
  cart,
  selectedFoodCategory,
  orderDescription,
  onOrderDescriptionChange,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onQuantityChange,
  onSubmit,
  date,
  mealType,
}: CartSidebarProps) {
  const [showSummary, setShowSummary] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleToggleSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="w-100 border-r border-gray-light-300 flex flex-col">
      <div className="h-16 px-6 border-y border-gray-light-300 flex items-center">
        <CartIcon />
        <span className="ps-2 font-semibold">
          لیست انتخاب‌شده
        </span>
      </div>
      
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex-1 min-h-0 overflow-y-auto px-6">
            <div className="py-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  selectedFoodCategory={selectedFoodCategory}
                  onRemove={onRemoveItem}
                  onIncrease={onIncreaseQuantity}
                  onDecrease={onDecreaseQuantity}
                  onQuantityChange={onQuantityChange}
                />
              ))}

              <div className="pb-4">
                <span className="block mb-2 text-gray-light-700 text-sm font-medium">
                  توضیحات سفارش
                </span>
                <textarea
                  rows={3}
                  placeholder="توضیحات سفارش ..."
                  value={orderDescription}
                  onChange={(e) => onOrderDescriptionChange(e.target.value)}
                  className="w-full border border-gray-light-300 rounded-lg p-3 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-colors"
                />
              </div>
            </div>
          </div>

          <CartSummary 
            onShowSummary={handleToggleSummary} 
            onSubmit={onSubmit} 
            showSummaryOpen={showSummary}
            date={date}
            mealType={mealType}
            totalItems={totalItems}
            totalAmount={totalAmount}
          />
        </>
      )}
    </div>
  );
}

