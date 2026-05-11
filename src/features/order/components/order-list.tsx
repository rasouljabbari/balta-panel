import { Clock9 } from 'lucide-react';
import { FoodIcon, IdIcon, PackageIcon } from '@/components/icons/order-icons';
import OrderCard from '@/components/shared/order-card';
import type { OrderListProps, OrderStatus } from '../types';


const statusColorMap: Record<
  OrderStatus,
  'orange' | 'blue' | 'gray' | 'green' | 'red'
> = {
  'در صف انتظار': 'orange',
  'در حال آماده‌سازی': 'orange',
  'تحویل به راننده': 'blue',
  'ثبت شده': 'gray',
  'تحویل شده': 'green',
  'لغو شده': 'red',
};


const mapToBadgeColor = (
  color: string,
): 'gray' | 'blue' | 'green' | 'red' | 'orange' => {
  switch (color) {
    case 'gray':
      return 'gray';
    case 'blue':
      return 'blue';
    case 'green':
      return 'green';
    case 'red':
      return 'red';
    case 'orange':
      return 'orange';
    default:
      return 'gray';
  }
};

export default function OrderList({
  orders,
  selectedOrder,
  onSelect,
}: OrderListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-3xl space-y-3xl">
      {orders.map((order) => {
        const statusColor = statusColorMap[order.status];

        return (
          <OrderCard
            key={order.id}
            selected={selectedOrder === order.id}
            onClick={() => onSelect(order.id)}
            title={order.title}
            badges={[
              {
                label: order.branch,
                color: 'gray',
              },
              {
                label: order.status,
                color: mapToBadgeColor(statusColor),
              },
            ]}
          >
            <div className="flex items-center gap-3xl">
              <Row
                icon={<IdIcon />}
                label="شماره سفارش"
                value={`#${order.id}`}
              />
              <Divider />
              <Row
                icon={<Clock9 size={20} color="#667085" />}
                label="ساعت تحویل"
                value={order.time}
              />
            </div>

            <div className="flex items-center gap-3xl">
              <Row
                icon={<FoodIcon />}
                label="تعداد غذا"
                value={order.foodCount}
              />
              <Divider />
              <Row
                icon={<PackageIcon />}
                label="بسته‌بندی"
                value={order.packaging}
              />
            </div>
          </OrderCard>
        );
      })}
    </div>
  );
}

/* ---------------- helpers ---------------- */

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-md">
        {icon}
        <p className="text-sm text-gray-light-600">{label}</p>
      </div>

      <p className="text-sm font-semibold text-gray-light-700">{value}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-5 w-px bg-gray-light-300" />;
}