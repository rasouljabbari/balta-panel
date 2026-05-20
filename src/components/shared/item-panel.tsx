import { Card, CardBody, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';
import ErrorBox from '@/components/shared/error-box';
import { Skeleton } from '@/components/shared/skeleton-loader';
import { cn } from '@/utils/cn';
import type { ItemPanelProps } from '@/components/shared/type'

export default function ItemPanel({
  title,
  hasItems,
  isLoading,
  isError,
  headerLeft,
  headerRight,
  children,
}: ItemPanelProps) {
  return (
    <Card className={cn(hasItems && 'h-full')}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-center gap-xl">
            {headerLeft}
            <h2 className="text-lg font-semibold text-gray-light-900">{title}</h2>
          </div>
          {headerRight}
        </div>
      </CardHeader>

      <CardBody>
        {isLoading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-18.5 bg-gray-50 mb-4" />
          ))
        ) : isError ? (
          <ErrorBox title={`بارگزاری لیست ${title} با خطا مواجه شده است!`} />
        ) : hasItems ? (
          children
        ) : (
          <EmptyBox
            title={`لیست ${title} خالی است`}
            image="/assets/images/empty-order.webp"
          />
        )}
      </CardBody>
    </Card>
  );
}
