import { ForkIcon } from '@/components/icons/order-icons';
import { Button } from 'dst-rg';
import { SquarePen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function MealsTableHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-xl">
        <div className="flex items-center justify-center border border-gray-light-200 p-[10px] rounded-lg">
          <ForkIcon />
        </div>
        <h3 className="text-lg font-semibold text-rtext-primary-900">
          آیتم های سفارش
        </h3>
      </div>
      <Button
        variant="secondaryGray"
        leftIcon={<SquarePen size={20} color="#344054" />}
        onClick={() => navigate('/orders/weekly-plan')}
      >
        ویرایش
      </Button>
    </div>
  );
}