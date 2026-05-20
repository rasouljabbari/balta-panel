import { AlertCircleIcon } from '@/components/icons';
import { Button } from 'dst-rg';

export default function WeeklyPlanFooter() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-md">
        <span className="text-xl font-semibold text-utility-brand-600">
          ۲۵۰،۰۰۰ تومان
        </span>
        <span className="text-gray-light-600">میانگین مبلغ سفارش هر نفر در هفته</span>
      </div>

      <div className="flex items-center gap-3xl">
        <div className="flex items-center gap-md bg-warning-50 px-xl h-11 border border-warning-200 rounded-sm">
          <AlertCircleIcon />
          <p className="text-sm font-bold text-warning-600">
            ذخیره خودکار انجام شد. جهت اعمال، لازم است ثبت نهایی کنید.
          </p>
        </div>
        <Button className="bg-utility-brand-600 h-11">
          ثبت نهایی برنامه
        </Button>
      </div>
    </div>
  );
}
