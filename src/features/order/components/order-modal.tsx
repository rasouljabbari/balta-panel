import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { productGroups } from "@/features/order/data";
import type { SelectOption } from '@/components/shared/select-dropdown';
import type { OrderModalProps } from '@/features/order/types';
import OrderModalHeader from "@/features/order/components/order-modal-header";
import CategoryNavigation from "@/features/order/components/category-navigation";
import ProductSection from "@/features/order/components/product-section";
import CartSidebar from "@/features/order/components/cart-sidebar";
import { useCart } from '@/features/order/hooks/use-cart';
import { useActiveScrollSection } from '@/features/order/hooks/use-active-scroll-section';

const foodCategory: SelectOption[] = [
  { id: "1", name: "شرکتی" },
  { id: "2", name: "اقتصادی" },
];

export default function OrderModal({ onClose, date, mealType, cart, setCart, mealSelectionLimitCount }: OrderModalProps) {
  const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    isLimitReached,
    totalAmount,
  } = useCart({
    cart,
    setCart,
    mealSelectionLimitCount,
  });
  const navigate = useNavigate();
  const formattedDate = date.toLocaleDateString('fa-IR');
  const [activeSection, setActiveSection] = useState<string>('kebab');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState(foodCategory[1]);
  const [orderDescription, setOrderDescription] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleClose]);
  
  useActiveScrollSection(scrollContainerRef, productGroups, setActiveSection);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const offsetTop = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = () => {
    // TODO: Add API call to submit order
    console.log('submit order', {
      cart,
      date: formattedDate,
      mealType,
      description: orderDescription,
      foodCategory: selectedFoodCategory.name,
      totalAmount
    });
    
    // Close modal and navigate to weekly plan
    onClose();
    navigate('/orders/weekly-plan');
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={handleClose}
      />

      <div className="relative h-full w-full bg-white flex flex-col">
        <OrderModalHeader 
          mealType={mealType}
          formattedDate={formattedDate}
          onClose={handleClose}
        />

        <div className="flex-1 min-h-0 flex">
          <div className="flex-1 border-r border-gray-light-300 flex flex-col">
            <CategoryNavigation 
              foodCategory={foodCategory}
              selectedFoodCategory={selectedFoodCategory}
              setSelectedFoodCategory={setSelectedFoodCategory}
              productGroups={productGroups}
              activeSection={activeSection}
              onScrollToSection={scrollToSection}
            />

            <ProductSection 
              scrollContainerRef={scrollContainerRef}
              productGroups={productGroups}
              cart={cart}
              isLimitReached={() => isLimitReached}
              onAddToCart={addItem}
              onRemoveFromCart={removeItem}
            />
          </div>

          <CartSidebar 
            cart={cart}
            selectedFoodCategory={selectedFoodCategory}
            orderDescription={orderDescription}
            onOrderDescriptionChange={setOrderDescription}
            onRemoveItem={removeItem}
            onIncreaseQuantity={increaseQuantity}
            onDecreaseQuantity={decreaseQuantity}
            onQuantityChange={setQuantity}
            onSubmit={handleSubmit}
            date={formattedDate}
            mealType={mealType}
          />
        </div>
      </div>  
    </div>
  );
} 
