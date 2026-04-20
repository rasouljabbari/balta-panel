import LogoutModal from '@/components/layout/sidebar/logout-modal';
import { getCookie } from '@/utils/cookies';
import { getNameAbbreviation } from '@/utils/get-name-abbreviation';

function parseUserInfoCookie(): { first_name?: string; last_name?: string } | null {
  const raw = getCookie('user_info');
  if (!raw) return null;
  try {
    return JSON.parse(raw) as { first_name?: string; last_name?: string };
  } catch {
    return null;
  }
}

export default function SidebarInfoBox() {
  const userInfo = parseUserInfoCookie();

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
