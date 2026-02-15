import { LogOutIcon } from '@/components/icons/layout-icons';
import { getNameAbbreviation } from '@/utils/get-name-abbreviation';

export default function SidebarInfoBox() {
  const fullName = 'مجید حسین‌نژاد';

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-lg">
        <div className="w-10 h-10 bg-gray-light-100 rounded-full flex items-center justify-center border border-gray-light-300">
          <span className="font-semibold text-gray-light-500">
            {getNameAbbreviation(fullName)}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm leading-5 text-rtext-tertiary-600">
            {fullName}
          </span>
          <span className="block text-sm 2xl:text-base font-bold leading-6 text-rtext-secondary-700">
            admin@baltafood.ir
          </span>
        </div>
      </div>

      <LogOutIcon />
    </div>
  );
}
