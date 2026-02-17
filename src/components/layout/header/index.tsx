import { useLocation } from 'react-router-dom';
import { Button, Switch } from 'rg-dst';
import { routeInfos } from '@/components/layout/header/data';
import HeaderNotificationBox from '@/components/layout/header/header-notification-box';
import type { HeaderProps } from '@/components/layout/header/type';
import HeaderUserInformationBox from './header-info';

const drivers = [
  { id: 1, fullName: 'حسین عباسی', code: 'DRV-001', status: 'active' },
  { id: 2, fullName: 'رضا کریمی', code: 'DRV-002', status: 'inactive' },
];

const matchRoute = (pathname: string, pattern: string): boolean => {
  const patternParts = pattern.split('/');
  const pathParts = pathname.split('/');

  if (patternParts.length !== pathParts.length) return false;

  return patternParts.every(
    (part, i) => part.startsWith(':') || part === pathParts[i],
  );
};

export default function Header({
  onMenuClick,
  actionButton,
  extra,
}: HeaderProps) {
  const { pathname } = useLocation();

  let title: string | undefined;
  let description: string | undefined;

  const isDriverDetail = /^\/drivers\/\d+$/.test(pathname);
  const isDriverEdit = /^\/drivers\/edit\/\d+$/.test(pathname);

  const showBackButton = isDriverDetail || isDriverEdit;

  let driver;

  // =========================
  // Driver Detail Page
  // =========================
  if (isDriverDetail) {
    const id = Number(pathname.split('/')[2]);
    driver = drivers.find((d) => d.id === id);

    if (driver) {
      title = driver.fullName;
      description = `کد راننده: ${driver.code}`;
    } else {
      title = 'راننده یافت نشد';
    }
  }

  // =========================
  // Driver Edit Page
  // =========================
  else if (isDriverEdit) {
    const id = Number(pathname.split('/')[3]);
    driver = drivers.find((d) => d.id === id);

    if (driver) {
      title = `ویرایش اطلاعات ${driver.fullName}`;
      description = `کد راننده: ${driver.code}`;
    } else {
      title = 'راننده یافت نشد';
    }
  }

  // =========================
  // Other Pages
  // =========================
  else {
    if (routeInfos[pathname]) {
      title = routeInfos[pathname].title;
      description = routeInfos[pathname].description;
    } else {
      for (const [pattern, info] of Object.entries(routeInfos)) {
        if (matchRoute(pathname, pattern)) {
          title = info.title;
          description = info.description;
          break;
        }
      }
    }
  }

  const renderAction = () => {
    if (isDriverEdit) return null;

    if (extra) return extra;

    if (isDriverDetail) {
      return (
        <div className="border border-gray-light-300 rounded-md py-[10px] px-4 flex items-center justify-center gap-xs">
          <Switch
            onToggle={() => {
              console.log('status changed');
            }}
          />
          <span className="text-sm font-semibold text-gray-light-700">
            وضعیت فعالیت
          </span>
        </div>
      );
    }

    if (actionButton) {
      return (
        <Button
          className={actionButton.className}
          onClick={actionButton.onClick}
          leftIcon={actionButton.leftIcon}
        >
          {actionButton.label}
        </Button>
      );
    }

    return null;
  };

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
        {renderAction()}
        <HeaderNotificationBox />
      </div>
    </header>
  );
}
