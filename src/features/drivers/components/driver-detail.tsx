import { useDriverById } from '@/features/drivers/hook/drivers';
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
  const { openStates, toggle } = useToggleCards({ driver: true });

  const { data: driver, isLoading } = useDriverById(id);

  if (isLoading) {
    return <div className="p-4">در حال بارگذاری...</div>;
  }

  if (!driver) {
    return <div className="p-4">اطلاعات راننده یافت نشد</div>;
  }

  const plate = driver.car_plate
    ? `${driver.car_plate.first} ${driver.car_plate.letter} ${driver.car_plate.second} - ${driver.car_plate.state}`
    : '-';

 const driverData = [
   { label: 'نام راننده', value: `${driver.first_name} ${driver.last_name}` },
   { label: 'جنسیت', value: driver.gender_translation },
   {
     label: 'تاریخ تولد',
     value: driver.birth_date
       ? new Date(driver.birth_date).toLocaleDateString('fa-IR')
       : '-',
   },
   { label: 'شماره موبایل', value: driver.phone },
   { label: 'کد راننده', value: driver.user_code ?? '-' },
   { label: 'کدملی', value: driver.national_id },
   { label: 'نوع خودرو', value: driver.car_type },
   { label: 'پلاک خودرو', value: plate },
   {
     label: 'تاریخ عضویت',
     value: driver.joined_at
       ? new Date(driver.joined_at).toLocaleDateString('fa-IR')
       : '-',
   },
 ];

  return (
    <div className="bg-gray-light-50 h-full max-w-[400px] border-r mr-auto border-gray-light-200 p-3xl">
      <AccordionCard
        title="اطلاعات راننده"
        icon={<TruckIcon />}
        isOpen={openStates.driver}
        onToggle={() => toggle('driver')}
      >
        <DetailGrid items={driverData} />

        <hr className="border-gray-light-200 mt-3" />

        <div className="p-lg flex justify-end items-end">
          <Button
            variant="secondaryGray"
            leftIcon={<Pencil size={20} />}
            onClick={() => navigate(`/drivers/edit/${id}`)}
          >
            ویرایش
          </Button>
        </div>
      </AccordionCard>
    </div>
  );
}