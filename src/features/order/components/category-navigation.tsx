import SelectDropdown from '@/components/shared/select-dropdown';
import SearchInput from '@/components/shared/search-input';
import type { CategoryNavigationProps } from '@/features/order/types';

export default function CategoryNavigation({
  foodCategory,
  selectedFoodCategory,
  setSelectedFoodCategory,
  productGroups,
  activeSection,
  onScrollToSection,
}: CategoryNavigationProps) {
  return (
    <div className="flex justify-between items-center h-16 px-5 border-y border-gray-light-300 flex items-center gap-2 bg-white sticky top-0 z-10">
        <div className="flex items-center">
          <SelectDropdown
            options={foodCategory}
            selected={selectedFoodCategory}
            onChange={setSelectedFoodCategory}
            className="me-8 h-10 rounded-md"

          />
          <div className="flex items-center gap-2">
          {productGroups?.map((group) => (
            <button
              key={group.id}
              onClick={() => onScrollToSection(group.id)}
              className={`text-md font-medium px-6 py-2 rounded-md text-nowrap transition-colors ${
                activeSection === group.id
                  ? 'text-brand-600'
                  : 'text-gray-light-500 hover:bg-gray-light-100'
              }`}
            >
              {group.label}
            </button>
          ))}
          </div>
        </div>
      
      <SearchInput placeholder="جستجو" onSearch={() => {}} />
    </div>
  );
}

