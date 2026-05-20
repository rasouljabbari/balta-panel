import { TruckIcon } from '@/components/icons';
import AccordionCard from '@/components/shared/accordion-card';
import DetailGrid from '@/components/shared/detail-grid';
import { Skeleton } from '@/components/shared/skeleton-loader';
import { useDriverById } from '@/features/drivers/hook/drivers';
import { useToggleCards } from '@/hooks/use-toggle-card';
import { plateText } from '@/utils/plate-text';
import { Pencil } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'dst-rg';


export default function DriverDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openStates, toggle } = useToggleCards({ driver: true });

  const { data: driver, isLoading } = useDriverById(id);

  if (isLoading) {
    return (
      <div className="bg-gray-light-50 h-full max-w-[400px] border-r mr-auto border-gray-light-200 p-3xl">
        <AccordionCard
          title={<Skeleton className="h-6 w-1/3 mb-2 " />}
          icon={<TruckIcon />}
          isOpen={true}
          onToggle={() => { }}
        >
          <div className="space-y-3 p-4">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-32 h-4" />
              </div>
            ))}
            <div className="flex justify-end mt-3">
              <Skeleton className="w-32 h-10 rounded-md" />
            </div>
          </div>
        </AccordionCard>
      </div>
    );
  }

  if (!driver) {
    return <div className="p-4">اطلاعات راننده یافت نشد</div>;
  }

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
    { label: 'شناسه', value: driver.user_code ?? '-' },
    { label: 'کدملی', value: driver.national_id },
    { label: 'نوع خودرو', value: driver.car_type },
    { label: 'پلاک خودرو', value: driver.car_plate ? plateText(driver.car_plate) : '-' },
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
            aria-label="ویرایش"
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