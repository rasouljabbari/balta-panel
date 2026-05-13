import { Badge } from 'rg-dst';
import { Trash2, Plus, Minus } from 'lucide-react';
import type { CartItemProps } from '@/features/order/types';

export default function CartItem({
  item,
  selectedFoodCategory,
  onRemove,
  onIncrease,
  onDecrease,
  onQuantityChange,
}: CartItemProps) {
  return (
    <div className="border border-gray-light-300 rounded-lg p-5 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-gray-light-700">{item.title}</h4>
          <Badge color="gray" className="whitespace-nowrap">{selectedFoodCategory.name}</Badge>
        </div>
          
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" color="#B71A33" />
        </button>
      </div>
      
      <div className="flex items-center justify-between rounded-md py-2">
        <Badge color="gray" className="text-sm text-gray-light-600 whitespace-nowrap">
          {item.price.toLocaleString()} تومان
        </Badge>
        <div className="flex items-center gap-2 text-gray-light-700">
          <button
            onClick={() => onIncrease(item.id)}
            className="w-10 h-10 text-xl flex items-center justify-center border border-gray-light-300 rounded-lg hover:bg-gray-100"
          >
            <Plus className="w-5 h-5" color="#344054" />
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
            className="w-18 h-10 text-center text-gray-light-500 font-medium border border-gray-light-300 rounded-lg px-2 py-1 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            onClick={() => onDecrease(item.id)}
            className="w-10 h-10 text-xl flex items-center justify-center border border-gray-light-300 rounded-lg hover:bg-gray-100"
          >
            <Minus className="w-5 h-5" color="#344054" />
          </button>
        </div>
      </div>
    </div>
  );
}

