import { useState } from 'react';
import { ChevronDown, Pencil } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'rg-dst';
import { TruckIcon } from '@/components/icons/drivers-icon';
import { Card } from '@/components/shared/card';
import DetailGrid from '@/components/shared/detail-grid';


export default function DriverDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const driverFakeData = [
    { label: 'نام راننده', value: 'حسین عباسی' },
    { label: 'جنسیت', value: 'مرد' },
    { label: 'تاریخ تولد', value: '۱۳۷۹/۱۱/۱۰' },
    { label: 'شماره موبایل', value: '۰۹۹۰۹۹۹۹۹۹۹' },
    { label: 'کد راننده', value: '۱۲۳۴۵۶' },
    { label: 'کدملی', value: '۱۴۵۱۵۷۹۵۹۴' },
    { label: 'نوع خودرو', value: 'پژو ۴۰۵' },
    { label: 'پلاک خودرو', value: '۶۵۸ ج ۱۶' },
    { label: 'تاریخ عضویت', value: '۱۴۰۰/۰۲/۰۲' },
  ];

  return (
    <div className="bg-gray-light-50 h-full max-w-[400px] border-r mr-auto border-gray-light-200 p-3xl">
      <Card>
        <div
          className="flex items-center justify-between p-lg cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center gap-xl">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-light-200 rounded-lg">
              <TruckIcon />
            </div>
            <h2 className="font-semibold text-gray-light-900">
              اطلاعات راننده
            </h2>
          </div>

          <ChevronDown
            size={20}
            color="var(--color-gray-light-600)"
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>

        {isOpen && (
          <>
            <hr className="border-gray-light-200" />

            <DetailGrid items={driverFakeData} />

            <hr className="border-gray-light-200" />

            <div className="p-lg flex justify-end items-end">
              <Button
                variant="secondaryGray"
                leftIcon={
                  <Pencil size={20} color="var(--color-gray-light-500)" />
                }
                onClick={() => navigate(`/drivers/edit/${id}`)}
              >
                ویرایش
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}