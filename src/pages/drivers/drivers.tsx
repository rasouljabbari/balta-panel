import { useState } from 'react';
import DriverTable from '@/features/drivers/components/table';
import DriverTableHeader from '@/features/drivers/components/table-headers';
import { useDrivers } from '@/features/drivers/hook/drivers';
import type { DriverItem } from '@/features/drivers/types';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';


export default function DriversPage() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading } = useDrivers({ page, search: searchValue });
  const drivers: DriverItem[] =
    data?.drivers.map((driver) => ({
      id: driver.id,
      fullName: `${driver.first_name} ${driver.last_name}`,
      phone: driver.phone,
      car_type: driver.car_type,
      status: driver.is_active ? 'active' : 'inactive',
      car_plate: driver.car_plate ? driver.car_plate : undefined,
    })) ?? [];

  const meta = data?.meta;

  const handleSearchDriver = (search: string) => {
    setSearchValue(search)
  }

  if (!isLoading && drivers.length === 0) {
    return (
      <Card>
        <CardHeader>
          <DriverTableHeader
            onSearch={handleSearchDriver}
            searchValue={searchValue}
            count={0}
          />
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
      meta={meta}
      onPageChange={setPage}
      onAllocatedOrders={(driver) => {
        navigate(`/drivers/${driver.id}`);
      }}
      searchValue={searchValue}
      onSearch={handleSearchDriver}
      isLoading={isLoading}
    />
  );
}