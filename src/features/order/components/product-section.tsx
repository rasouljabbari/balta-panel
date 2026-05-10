import OrderBox from "@/features/order/components/order-box";
import type { ProductSectionProps } from '@/features/order/types';

export default function ProductSection({
  scrollContainerRef,
  productGroups,
  cart,
  isLimitReached,
  onAddToCart,
  onRemoveFromCart,
}: ProductSectionProps) {
  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-y-auto no-scrollbar px-6 pb-8">
      {productGroups?.map((group) => (
        <div key={group.id} id={`section-${group.id}`} className="pt-6">
          <h2 className="text-2xl font-semibold text-gray-light-700 mb-4 py-2">
            {group.label}
          </h2>
          {group.meals?.length > 0 ? (
            <div className="grid grid-cols-4 gap-6 pb-4">
              {group.meals?.map((meal) => (
                <OrderBox
                  key={meal.id}
                  id={meal.id}
                  img={meal.img}
                  price={meal.price}
                  title={meal.title}
                  description={meal.description}
                  isSelected={cart.some(item => item.id === meal.id)}
                  isDisabled={isLimitReached() && group.isLimitedByContract}
                  onAddToCart={onAddToCart}
                  onRemoveFromCart={onRemoveFromCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-light-500">
              محصولی در این دسته موجود نیست
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

