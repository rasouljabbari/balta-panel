import { useState } from 'react';
import { ChevronDown, Pencil } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'rg-dst';
import { TruckIcon } from '@/components/icons/drivers-icon';

export default function DriverDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-light-50 h-full max-w-[400px] border-r mr-auto border-gray-light-200 p-3xl">
      <div className="flex flex-col gap-lg border border-gray-light-200 rounded-lg">
        {/* Header */}
        <div
          className="flex items-center justify-between p-lg cursor-pointer"
          onClick={toggleSection}
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

            <div className="p-lg">
              <div className="grid grid-cols-2 gap-md border border-gray-light-100 bg-gray-light-50 p-lg rounded-md">
                <span className="text-sm text-gray-light-500">نام راننده</span>
                <span className="text-sm text-gray-light-700">حسین عباسی</span>

                <span className="text-sm text-gray-light-500">جنسیت</span>
                <span className="text-sm text-gray-light-700">مرد</span>

                <span className="text-sm text-gray-light-500">تاریخ تولد</span>
                <span className="text-sm text-gray-light-700">۱۳۷۹/۱۱/۱۰</span>

                <span className="text-sm text-gray-light-500">
                  شماره موبایل
                </span>
                <span className="text-sm text-gray-light-700">۰۹۹۰۹۹۹۹۹۹۹</span>

                <span className="text-sm text-gray-light-500">کد راننده</span>
                <span className="text-sm text-gray-light-700">۱۲۳۴۵۶</span>

                <span className="text-sm text-gray-light-500">کدملی</span>
                <span className="text-sm text-gray-light-700">۱۴۵۱۵۷۹۵۹۴</span>

                <span className="text-sm text-gray-light-500">نوع خودرو</span>
                <span className="text-sm text-gray-light-700">پژو ۴۰۵</span>

                <span className="text-sm text-gray-light-500">پلاک خودرو</span>
                <span className="text-sm text-gray-light-700">۶۵۸ ج ۱۶</span>

                <span className="text-sm text-gray-light-500">تاریخ عضویت</span>
                <span className="text-sm text-gray-light-700">۱۴۰۰/۰۲/۰۲</span>
              </div>
            </div>

            <hr className="border-gray-light-200" />

            <div className="p-lg mr-auto">
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
      </div>
    </div>
  );
}
