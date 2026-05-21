import { KnifeForkIcon, SideBarIcon } from '@/components/icons';
import type { SidebarProps } from '@/components/layout/sidebar/type';
import { useEscapeKey } from '@/hooks/use-escape-key';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import SidebarInfoBox from './info-box';
import SidebarLogoBox from './logo-box';
import SidebarMenu from './menu';

export default function Sidebar({
  isMobileOpen = false,
  onClose,
  isMobile = false,
}: SidebarProps) {
  // ✅ Close sidebar on Escape (only when mobile sidebar is open)
  useEscapeKey(() => {
    if (onClose) onClose();
  }, isMobile && isMobileOpen);

  // ✅ Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else if (isMobile) {
      document.body.style.overflow = '';
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = '';
      }
    };
  }, [isMobile, isMobileOpen]);

  /* ===================== MOBILE ===================== */
  if (isMobile) {
    return (
      <>
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-xl ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full border-l border-gray-light-300">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
              <SidebarLogoBox />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-light-100 rounded-lg transition-colors"
                aria-label="بستن منو"
              >
                <X className="w-5 h-5 text-gray-light-700" />
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-2">
              <SidebarMenu onItemClick={onClose} />
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 pb-6 flex flex-col">
              <SidebarInfoBox />
              <hr className="border-gray-light-300 w-full my-4" />
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ===================== DESKTOP ===================== */
  return (
    <div className="flex flex-col h-full w-[220px] 2xl:w-[320px] border-l border-gray-light-300 bg-white">
      <div className="flex-shrink-0">
        <SidebarLogoBox />
      </div>

      <div className="px-3xl">
        <div className="border border-gray-light-300 rounded-md flex items-center justify-between">
          <div className="flex items-center gap-md py-[10px] px-[14px]">
            <KnifeForkIcon />
            <span className="font-medium text-gray-light-700">بالتافود</span>
          </div>
          <div className="flex items-center px-xl justify-center gap-xl">
            <div className="bg-gray-light-300 w-px h-[44px]" />
            <SideBarIcon />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <SidebarMenu />
      </div>

      <div className="shrink-0 pb-4xl flex flex-col px-3xl">
        <SidebarInfoBox />
      </div>
    </div>
  );
}
