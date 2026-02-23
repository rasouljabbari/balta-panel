import DriverTable from '@/features/drivers/components/table';
import DriverTableHeader from '@/features/drivers/components/table-headers';
import { useDrivers } from '@/features/drivers/hook/drivers';
import type { DriverItem } from '@/features/drivers/types';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';


export default function DriversPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useDrivers();

const drivers: DriverItem[] =
  data?.drivers.map((driver) => ({
    id: driver.id,
    fullName: `${driver.first_name} ${driver.last_name}`,
    phone: driver.phone,
    vehicleType: driver.car_type,
    status: driver.is_active ? 'active' : 'inactive',
    plate: driver.car_plate
      ? `${driver.car_plate.first}${driver.car_plate.letter}${driver.car_plate.second}${driver.car_plate.state}`
      : '',
  })) ?? [];

  if (isLoading) {
    return <div className="p-xl">در حال دریافت اطلاعات...</div>;
  }

  if (drivers.length === 0) {
    return (
      <Card>
        <CardHeader>
          <DriverTableHeader count={0} />
        </CardHeader>
        <div className="py-4xl">
          <EmptyBox
            title="هیچ راننده‌ای یافت نشد"
            image="/assets/images/union.webp"
          />
        </div>
      </Card>
    );
  }

  return (
    <DriverTable
      data={drivers}
      onAllocatedOrders={(driver) => {
        navigate(`/drivers/${driver.id}`);
      }}
    />
  );
}