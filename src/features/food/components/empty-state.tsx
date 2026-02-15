import { FoodIcons } from '@/components/icons/food-icons';
import { Card, CardBody, CardHeader } from '@/components/shared/card';
import EmptyBox from '@/components/shared/empty-box';

export default function FoodEmptyState() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-xl">
          <div className="border border-gray-light-200 p-3 shadow-xs rounded-lg">
            <FoodIcons />
          </div>
          <h2 className="text-lg font-semibold text-gray-light-900">
            لیست غذاها
          </h2>
        </div>
      </CardHeader>

      <CardBody className="py-4xl">
        <EmptyBox
          image="/assets/images/empty-food.webp"
          title="در حال حاضر آیتمی برای نمایش وجود ندارد."
          buttonText="افزودن آیتم"
        />
      </CardBody>
    </Card>
  );
}
