import { Pencil } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'rg-dst';
import { useToggleCards } from '@/hooks/use-toggle-card';
import { TruckIcon } from '@/components/icons/drivers-icon';
import AccordionCard from '@/components/shared/accordion-card'; 
import DetailGrid from '@/components/shared/detail-grid';

export default function DriverDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { openStates, toggle } = useToggleCards({ driver: false });

  const driverFakeData = [
    { label: 'نام راننده', value: 'حسین عباسی' },
    { label: 'جنسیت', value: 'مرد' },
    { label: 'تاریخ تولد', value: '۱۳۷۹/۱۱/۱۰' },
    { label: 'شماره موبایل', value: '۰۹۹۰۹۹۹۹۹۹۹' },
    { label: 'کد راننده', value: '۱۲۳۴۵۶' },
    { label: 'کدملی', value: '۱۴۵۱۵۷۹۵۹۴' },
    { label: 'نوع خودرو', value: 'پژو ۴۰۵' },
    { label: 'پلاک خودرو', value: '۶۵۸ ج ۱۶' },
    { label: 'تاریخ عضویت', value: '۱۴۰۰/۰۲/۰۲' },
  ];

  return (
    <div className="bg-gray-light-50 h-full max-w-[400px] border-r mr-auto border-gray-light-200 p-3xl">
      <AccordionCard
        title="اطلاعات راننده"
        icon={<TruckIcon />}
        isOpen={openStates.driver}
        onToggle={() => toggle('driver')}
      >
        <DetailGrid items={driverFakeData} />

        <hr className="border-gray-light-200 mt-3" />

        <div className="p-lg flex justify-end items-end">
          <Button
            variant="secondaryGray"
            leftIcon={<Pencil size={20} color="var(--color-gray-light-500)" />}
            onClick={() => navigate(`/drivers/edit/${id}`)}
          >
            ویرایش
          </Button>
        </div>
      </AccordionCard>
    </div>
  );
}
