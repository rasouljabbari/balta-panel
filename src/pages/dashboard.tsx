import { useState } from 'react';
import ReportsList from '@/features/reports/components/list'
import { Card } from '@/components/shared/card';
import { Tabs } from 'dst-rg';
import StatCard from '@/features/reports/components/stat-card';
import ColumnChart from '@/components/shared/column-chart';
import { columnChartData, donutTabContent } from '@/features/reports/data';
import { FoodBasketIcon, PendingOrderIcon, DeliveryIcon, UnapprovedOrderIcon, DonutChartIcon, ChartIcon } from '@/components/icons';


export default function Reports() {
  const [donutTab, setDonutTab] = useState<'currentWeek' | 'nextWeek'>('currentWeek');
  const [columnTab, setColumnTab] = useState<'weekly' | 'monthly' | 'yearly'>('yearly');

  const donutTabs = [
    { label: 'هفته جاری', value: 'currentWeek' },
    { label: 'هفته آینده', value: 'nextWeek' },
  ];

  const columnTabs = [
    { label: 'سال', value: 'yearly' },
    { label: 'ماه', value: 'monthly' },
    { label: 'هفته', value: 'weekly' },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4 2xl:gap-6">
          <div className="col-span-12 lg:grid grid-cols-4 gap-5 2xl:col-span-3 2xl:block">
            <StatCard 
              value="۳۱,۷۵۰,۹۹۹"
              label="سفارش نهایی شده (هفته جاری)"
              className="mb-2 lg:mb-0 2xl:mb-5 p-3xl"
              icon={<FoodBasketIcon />} 
            
            />
          </div>
          <div className="col-span-12 lg:grid grid-cols-4 gap-5 2xl:col-span-3 2xl:block">
            <StatCard 
              value={127}
              label="سفارش تحویل شده (هفته جاری) "
              className="mb-2 lg:mb-0 2xl:mb-5 p-3xl"
              icon={<DeliveryIcon />}
            />
          </div>
          <div className="col-span-12 lg:grid grid-cols-4 gap-5 2xl:col-span-3 2xl:block">
            <StatCard 
              value="۲۵۰,۰۰۰"
              label="سفارش نهایی نشده (هفته آینده)"
              className="mb-2 lg:mb-0 2xl:mb-5 p-3xl"
              icon={<PendingOrderIcon />}
            />
          </div>
          <div className="col-span-12 lg:grid grid-cols-4 gap-5 2xl:col-span-3 2xl:block">
            <StatCard 
              value="۲۵۰,۰۰۰"
              label="سفارش تایید نشده (امروز)"
              className="p-3xl col-span-12 lg:grid grid-cols-4 gap-5 2xl:col-span-3 2xl:block"
              icon={<UnapprovedOrderIcon />}
            />
          </div>
      </div>

      <div className="grid grid-cols-12 pt-lg gap-4 2xl:gap-6">
      <Card className="col-span-12 lg:col-span-4 p-2xl">
          <Tabs
            defaultValue={donutTab}
            onValueChange={(val: string) =>
              setDonutTab(val as 'currentWeek' | 'nextWeek')
            }
          >
            <div className="flex flex-col xl:flex-row justify-between items-center gap-2 mb-3">
              <div className="flex items-center gap-xl">
                <span className='h-11 w-11 flex flex-col items-center justify-center rounded-lg shadow-xs border border-[#E4E7EC]'>
                  <DonutChartIcon />
                </span>
                <span className="block text-lg font-semibold text-gray-light-700 pe-4">وضعیت سفارش‌ها</span>
              </div>

              <Tabs.List listVariant="gray" fullWidth={false} className="max-w-[230px] h-11 w-full border border-rborder-secondary p-xs rounded-lg bg-gray-light-50">
                {donutTabs.map((item) => (
                  <Tabs.Trigger className="text-xs 2xl:text-base font-semibold data-[state=active]:bg-base-white data-[state=active]:shadow-sm data-[state=active]:text-utility-brand-600" key={item.value} value={item.value}>{item.label}</Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>
            <Tabs.Content value={donutTab} className="mt-6">        
              {donutTabContent[donutTab]}
            </Tabs.Content>   
          </Tabs>
        </Card>
        <Card className="col-span-12 lg:col-span-8 p-2xl">
          <Tabs
            defaultValue={columnTab}
            onValueChange={(val: string) =>
              setColumnTab(val as 'weekly' | 'monthly' | 'yearly')
            }
          >
            <div className="flex flex-col xl:flex-row justify-between items-center gap-2 mb-3">
              <div className="flex items-center gap-xl">
                <span className='h-11 w-11 flex flex-col items-center justify-center rounded-lg shadow-xs border border-[#E4E7EC]'>
                  <ChartIcon />
                </span>
                <span className="block text-lg font-semibold text-gray-light-700 pe-4">آمار کلی سفارش‌ها</span>
              </div>

              <Tabs.List listVariant="gray" fullWidth={false} className="max-w-[230px] h-11 w-full border border-rborder-secondary p-xs rounded-lg bg-gray-light-50">
                {columnTabs.map((item) => (
                  <Tabs.Trigger className="text-xs 2xl:text-base font-semibold data-[state=active]:bg-base-white data-[state=active]:shadow-sm data-[state=active]:text-utility-brand-600" key={item.value} value={item.value}>{item.label}</Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>
            <Tabs.Content value={columnTab} className="mt-2">
              <ColumnChart
                series={columnChartData[columnTab].series}
                months={columnChartData[columnTab].categories}
              />
            </Tabs.Content>
          </Tabs>
        </Card>        
      </div>
     
      <ReportsList hasSummaryRow={false} hasDatePicker={false} hasSearchBox={false} hasShowAllBtn={true} />
    </>
  );
}
