import { Skeleton } from '@/components/shared/skeleton-loader';


export default function ContractLoader() {
  return (
    <div className="grid grid-cols-12 gap-3xl p-7">
      {/* Main Content */}
      <div className="col-span-9 flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex gap-4">
          <Skeleton width={120} height={32} />
          <Skeleton width={120} height={32} />
          <Skeleton width={120} height={32} />
        </div>

        {/* Meal Card */}
        <div className="p-6 border border-rborder-primary rounded-lg space-y-4">
          <Skeleton width={220} height={20} />
          <Skeleton width="100%" height={42} />
          <Skeleton width="100%" height={42} />
          <Skeleton width="100%" height={42} />
        </div>

        {/* Limits + Menus */}
        <div className="grid grid-cols-9 gap-3xl">
          {/* Limits Card */}
          <div className="col-span-6 p-6 border border-rborder-primary rounded-lg space-y-4">
            <Skeleton width={200} height={20} />

            <div className="grid grid-cols-2 gap-4">
              <Skeleton width="100%" height={42} />
              <Skeleton width="100%" height={42} />
            </div>

            <Skeleton width="100%" height={1} />

            <Skeleton width={180} height={18} />
            <Skeleton width="100%" height={42} />
          </div>

          {/* Menus Card */}
          <div className="col-span-3 p-6 border border-rborder-primary rounded-lg space-y-3">
            <Skeleton width={160} height={20} />

            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-md">
                <Skeleton width={18} height={18} />
                <Skeleton width="80%" height={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Skeleton width={140} height={40} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-span-3 p-6 border border-rborder-primary rounded-lg space-y-4">
        <Skeleton width="70%" height={20} />

        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton width="50%" height={14} />
            <Skeleton width="90%" height={18} />
          </div>
        ))}
      </div>
    </div>
  );
}