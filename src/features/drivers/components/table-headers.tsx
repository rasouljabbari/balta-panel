import SearchInput from "@/components/shared/search-input";
import { User } from "lucide-react";


export default function DriverTableHeader() {
    return (
      <div className="flex items-center justify-between">
        <div className="flex item-center gap-xl">
          <div className="flex-center border border-gray-light-200 w-10 h-10 rounded-lg">
            <User color="var(--color-gray-light-500)" />
          </div>
          <div className="flex flex-col gap-xs">
            <h2 className="text-lg font-semibold text-gray-light-900">
              اطلاعات رانندگان
            </h2>
            <span className="text-sm text-gray-light-600">۵۶ راننده</span>
          </div>
        </div>
        <SearchInput
          placeholder="جستجو در رانندگان"
        />
      </div>
    );
}