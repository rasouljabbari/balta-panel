import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import { useDisableScroll } from './hooks/use-disable-scroll';

function App() {
  useDisableScroll();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onClose={closeMobileSidebar}
        isMobile
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-modern-50">
        <header className="sticky top-0 z-10 bg-white">
          <Header onMenuClick={toggleMobileSidebar} />
        </header>
        <div className="flex-1 overflow-y-auto p-4 lg:p-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
