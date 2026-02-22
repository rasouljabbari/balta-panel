import DriverTable from '@/features/drivers/components/table';
import DriverTableHeader from '@/features/drivers/components/table-headers';
import type { DriverItem } from '@/features/drivers/types';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';

export default function DriversPage() {
  const navigate = useNavigate();

  const drivers: DriverItem[] = [
    {
      id: 1,
      fullName: 'علی محمدی',
      phone: '09123456789',
      vehicleType: 'پژو ۴۰۵',
      status: 'active',
      plate: '۱۵ - ۱۳۹ ج ۱۲',
    },
    {
      id: 2,
      fullName: 'رضا کریمی',
      phone: '09351234567',
      vehicleType: 'پژو ۴۰۵',
      status: 'inactive',
      plate: '۱۵ - ۱۳۹ ج ۱۲',
    },
  ];

  if (drivers.length === 0) {
    return (
      <Card>
        <CardHeader>
          <DriverTableHeader count={drivers.length} />
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
