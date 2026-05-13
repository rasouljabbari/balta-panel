import { useCallback, useMemo } from 'react';
import { productGroups } from '@/features/order/data';
import type { Meal, UseCartParams } from '@/features/order/types';

export function useCart({
  cart,
  setCart,
  mealSelectionLimitCount,
}: UseCartParams) {
  const mealMap = useMemo(() => {
    const map = new Map<number, Meal>();
    productGroups.forEach(group => {
      group.meals.forEach(meal => {
        map.set(meal.id, meal);
      });
    });
    return map;
  }, []);

  const limitedMealIds = useMemo(
    () =>
      productGroups
        .filter(group => group.isLimitedByContract)
        .flatMap(group => group.meals.map(meal => meal.id)),
    []
  );

  const limitedItemsCount = useMemo(
    () => cart.filter(item => limitedMealIds.includes(item.id)).length,
    [cart, limitedMealIds]
  );

  const isLimitReached = limitedItemsCount >= mealSelectionLimitCount;

  const addItem = useCallback(
    (mealId: number) => {
      const meal = mealMap.get(mealId);
      if (!meal) return;

      setCart(prev => {
        const existing = prev.find(item => item.id === mealId);

        if (existing) {
          return prev.map(item =>
            item.id === mealId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [
          ...prev,
          {
            id: meal.id,
            title: meal.title,
            price: meal.price,
            quantity: 1,
          },
        ];
      });
    },
    [mealMap, setCart]
  );

  const removeItem = useCallback(
    (id: number) => {
      setCart(prev => prev.filter(item => item.id !== id));
    },
    [setCart]
  );

  const increaseQuantity = useCallback(
    (id: number) => {
      setCart(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    },
    [setCart]
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      setCart(prev =>
        prev
          .map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      );
    },
    [setCart]
  );

  const setQuantity = useCallback(
    (id: number, value: string) => {
      const quantity = parseInt(value, 10) || 0;

      if (quantity < 1) {
        removeItem(id);
        return;
      }

      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    },
    [removeItem, setCart]
  );

  const totalAmount = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return {
    isLimitReached,
    limitedItemsCount,
    totalAmount,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
  };
}
