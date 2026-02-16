import { Button } from 'rg-dst';
import HeaderNotificationBox from '@/components/layout/header/header-notification-box';
import type { HeaderProps } from '@/components/layout/header/type';
import HeaderUserInformationBox from './header-info';

export default function Header({ onMenuClick, actionButton }: HeaderProps) {
  return (
    <header className="bg-white py-4 px-4 lg:py-5 lg:px-8 border-b border-gray-light-300 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center p-2 hover:bg-gray-light-100 rounded-lg transition-colors"
          aria-label="منوی اصلی"
        />
        <HeaderUserInformationBox />
      </div>

      <div className="flex items-center gap-lg">
        {actionButton && (
          <Button
            className={actionButton.className}
            onClick={actionButton.onClick}
            leftIcon={actionButton.leftIcon}
          >
            {actionButton.label}
          </Button>
        )}

        <HeaderNotificationBox />
      </div>
    </header>
  );
}
