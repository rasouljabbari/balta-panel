import DriverTable from "@/features/drivers/components/table";
import type { DriverItem } from "@/features/drivers/types";


export default function DriversPage() {
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

  return (
    <DriverTable
      data={drivers}
      onAllocatedOrders={(driver) => console.log('edit', driver)}
    />
  );
}