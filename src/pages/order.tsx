import { Card, CardHeader } from '@/components/shared/card';
import OrderHeader from '@/features/order/components/order-header';
import { useMemo, useState } from 'react';
import type { TabType } from '@/features/order/types';
import OrderGrid from '@/features/order/components/order-grid';
import { getWeekDays } from '@/features/order/utils';
import { useMidnightRerender } from '@/features/order/hooks/use-midnight-renderer';


export default function OrderPage() {
  const [tab, setTab] = useState<TabType>('current week');

  useMidnightRerender();

  const isCurrentWeek = tab === 'current week';

  const days = useMemo(
    () => getWeekDays(isCurrentWeek ? 'current' : 'next'),
    [isCurrentWeek],
  );

  return(
    <Card className="min-h-full flex flex-col overflow-hidden">
        <CardHeader>
            <OrderHeader tab={tab} onTabChange={setTab} />
        </CardHeader>

        <OrderGrid days={days} />
    </Card>
  )
}