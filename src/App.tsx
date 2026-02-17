import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import AddDriverModal from './features/drivers/components/add-driver-modal';
import { useDisableScroll } from './hooks/use-disable-scroll';


function App() {
  useDisableScroll();

  const location = useLocation(); 
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false); 

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const isDriversPage = location.pathname.startsWith('/drivers');
  const isDriverDetailPage = /^\/drivers\/\d+$/.test(location.pathname);


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onClose={closeMobileSidebar}
        isMobile
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-modern-50">
        <header className="sticky top-0 z-10 bg-white">
          <Header
            onMenuClick={toggleMobileSidebar}
            actionButton={
              isDriversPage
                ? {
                    label: 'راننده جدید',
                    onClick: () => setIsAddDriverOpen(true),
                    className: 'bg-utility-brand-600',
                    leftIcon: <CirclePlus size={20} />,
                  }
                : undefined
            }
          />
        </header>

        <div
          className={`flex-1 overflow-y-auto ${
            isDriverDetailPage ? '' : 'p-4 lg:p-7'
          }`}
        >
          <Outlet />
        </div>
      </main>
      <AddDriverModal
        isOpen={isAddDriverOpen}
        onClose={() => setIsAddDriverOpen(false)}
      />
    </div>
  );
}

export default App;