import { Card } from "@/components/shared/card";
import type { StatCardProps } from "@/features/reports/type";

export default function StatCard({ value, label, unit, className, icon }: StatCardProps) {
  return (
    <Card className={className}>
      <div className="flex items-center gap-2xl">
        <span className='h-12 w-12 flex flex-col items-center justify-center rounded-lg shadow-xs border border-[#E4E7EC]'>
          {icon}
        </span>
        
        <div>
          <span className="block pt-2 text-sm font-medium text-gray-light-600">
            {label}
          </span>

          <span className="block text-2xl font-semibold pt-2 text-gray-light-900">
            {value}
            {unit && <span className="ps-2">{unit}</span>}
          </span>
        </div>
      </div>
    </Card>
  );
}