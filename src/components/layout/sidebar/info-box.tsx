import LogoutModal from '@/components/layout/sidebar/logout-modal';
import { getCookie } from '@/utils/cookies';
import { getNameAbbreviation } from '@/utils/get-name-abbreviation';

export default function SidebarInfoBox() {

  const userInfo = getCookie('user_info') ? JSON.parse(`${getCookie('user_info')}`) : null

  const fullName = userInfo?.first_name + " " + userInfo?.last_name

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-lg">
        <div className="w-10 h-10 bg-gray-light-100 rounded-full flex items-center justify-center border border-gray-light-300">
          <span className="font-semibold text-gray-light-500">
            {getNameAbbreviation(fullName)}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm leading-5 text-rtext-tertiary-600">
            {fullName}
          </span>
          {/* <span className="block text-sm 2xl:text-base font-bold leading-6 text-rtext-secondary-700">
            admin@baltafood.ir
          </span> */}
        </div>
      </div>

      <LogoutModal />
    </div>
  );
}
