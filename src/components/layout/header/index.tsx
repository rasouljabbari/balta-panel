import HeaderNotificationBox from '@/components/layout/header/header-notification-box';
import type { Driver, HeaderProps } from '@/components/layout/header/type';
import HeaderAction from './header-action';
import HeaderUserInformationBox from './header-info';
import { useHeaderInfo } from './hook/use-header-info';


const drivers: Driver[] = [
  { id: 1, fullName: 'حسین عباسی', code: 'DRV-001', status: true },
  { id: 2, fullName: 'رضا کریمی', code: 'DRV-002', status: false },
];

export default function Header({
  onMenuClick,
  actionButton,
  extra,
}: HeaderProps) {
  const { title, description, showBackButton, driver } = useHeaderInfo(drivers);

  return (
    <header className="bg-white py-4 px-4 lg:py-5 lg:px-8 border-b border-gray-light-300 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center p-2 hover:bg-gray-light-100 rounded-lg transition-colors"
          aria-label="منوی اصلی"
        />

        <HeaderUserInformationBox
          title={title}
          description={description}
          showBackButton={showBackButton}
        />
      </div>

      <div className="flex items-center gap-lg">
        <HeaderAction
          isDriverEdit={Boolean(driver && title?.startsWith('ویرایش'))}
          isDriverDetail={Boolean(driver && !title?.startsWith('ویرایش'))}
          extra={extra}
          actionButton={actionButton}
          initialStatus={driver?.status || false}
          onStatusToggle={(checked) => {
            console.log('Driver status toggled:', checked);
          }}
        />
        <HeaderNotificationBox />
      </div>
    </header>
  );
}