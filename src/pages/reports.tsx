import { useState } from 'react';
import ReportsList from '@/features/reports/components/list'
import { Card } from '@/components/shared/card';
import { Tabs } from 'dst-rg';
import AreaChart from '@/features/reports/components/area-chart';
import StatCard from '@/features/reports/components/stat-card';
import { chartData, donutTabContent } from '@/features/reports/data';
import { FoodBasketIcon, OrderIcon, BagIcon, ChartIcon} from '@/components/icons/reports-icon';


export default function Reports() {
  const [donutTab, setDonutTab] = useState<'weekly' | 'monthly' | 'yearly'>('yearly');
  const [chartTab, setChartTab] = useState<'weekly' | 'monthly' | 'yearly'>('yearly');

  const tabs = [
    { label: 'هفتگی', value: 'weekly' },
    { label: 'ماهانه', value: 'monthly' },
    { label: 'سالانه', value: 'yearly' },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4 2xl:gap-6">
          <div className="col-span-12 lg:grid grid-cols-3 gap-5 2xl:col-span-3 2xl:block">
            <StatCard 
              value="۳۱,۷۵۰,۹۹۹"
              label="مجموع مبلغ کل‌سفارش‌ها"
              unit="تومان"
              className="mb-2 lg:mb-0 2xl:mb-5 p-3xl"
              icon={<BagIcon />}
            
            />
            <StatCard 
              value={127}
              label="تعداد کل‌سفارش‌ها"
              className="mb-2 lg:mb-0 2xl:mb-5 p-3xl"
              icon={<OrderIcon />}
            />
            <StatCard 
              value="۲۵۰,۰۰۰"
              label="میانگین مبلغ هر سفارش"
              unit="تومان"
              className="p-3xl"
              icon={<FoodBasketIcon />}
            />
          </div>

          <Card className="col-span-12 lg:col-span-7 2xl:col-span-6 p-xl">
            <Tabs
              defaultValue={chartTab}
              onValueChange={(val: string) =>
                setChartTab(val as 'weekly' | 'monthly' | 'yearly')
              }
            >
              <div className="flex flex-col xl:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-xl">
                  <span className='h-12 w-12 flex flex-col items-center justify-center rounded-lg shadow-xs border border-[#E4E7EC]'>
                    <ChartIcon />
                  </span>
                  <span className="block text-lg 2xl:text-xl font-bold text-gray-light-700 pe-5">تعداد سفارشات</span>
                </div>
                
                <Tabs.List listVariant="gray" fullWidth={false} className="max-w-[230px] h-11 w-full border border-rborder-secondary p-xs rounded-lg bg-gray-light-50">
                  {tabs.map((item) => (
                    <Tabs.Trigger className="text-xs 2xl:text-base font-semibold data-[state=active]:bg-base-white data-[state=active]:shadow-sm data-[state=active]:text-utility-brand-600" key={item.value} value={item.value}>{item.label}</Tabs.Trigger>
                  ))}
                </Tabs.List>
              </div>
              <Tabs.Content value={chartTab}>        
                <AreaChart 
                  series={chartData[chartTab].series}
                  months={chartData[chartTab].categories}
                  colors={["#F79009"]} 
                  height={270}
                />
              </Tabs.Content>   
            </Tabs>
          </Card>

          <Card className="col-span-12 lg:col-span-5 2xl:col-span-3 p-xl">
            <Tabs
              defaultValue={donutTab}
              onValueChange={(val: string) =>
                setDonutTab(val as 'weekly' | 'monthly' | 'yearly')
              }
            >
              <div className="flex flex-col xl:flex-row justify-between items-center gap-2 mb-3">
                <span className="block text-lg 2xl:text-xl font-bold text-gray-light-700 pe-5">پرتکرارها</span>

                <Tabs.List listVariant="gray" fullWidth={false} className="max-w-[230px] h-11 w-full border border-rborder-secondary p-xs rounded-lg bg-gray-light-50">
                  {tabs.map((item) => (
                    <Tabs.Trigger className="text-xs 2xl:text-base font-semibold data-[state=active]:bg-base-white data-[state=active]:shadow-sm data-[state=active]:text-utility-brand-600" key={item.value} value={item.value}>{item.label}</Tabs.Trigger>
                  ))}
                </Tabs.List>
              </div>
              <Tabs.Content value={donutTab} className="mt-6">        
                {donutTabContent[donutTab]}
              </Tabs.Content>   
            </Tabs>
          </Card>
      </div>

      <ReportsList />
    </>
  );
}
