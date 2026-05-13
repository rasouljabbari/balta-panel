import { useState } from 'react';
import { CirclePlus, Info } from 'lucide-react';
import { Outlet, useMatch } from 'react-router-dom';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import AddDriverModal from './features/drivers/components/add-driver-modal';
import ContractDetailsModal from './features/weekly-plan/components/modal/contract-details-modal';
import { useDisableScroll } from './hooks/use-disable-scroll';

function App() {
  useDisableScroll();

  // ------------------------
  // State
  // ------------------------
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isAddDriverOpen, setIsAddDriverOpen] = useState(false);
  const [isContractsDetailsOpen, setIsContractsDetailsOpen] = useState(false);

  // ------------------------
  // Sidebar handlers
  // ------------------------
  const toggleMobileSidebar = () => setIsMobileSidebarOpen((prev) => !prev);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  // ------------------------
  // Route matches
  // ------------------------
  const driversMatch = useMatch('/drivers/*');

  const driverDetailMatch = useMatch('/drivers/:id');
  const driverEditMatch = useMatch('/drivers/edit/:id');
  const contractEditMatch = useMatch('/contracts/edit/:id');
  const orderMealMatch = useMatch('/orders/:day/:meal');

  const isWeeklyPlanPage = useMatch('/orders/weekly-plan');

  // ------------------------
  // Derived flags
  // ------------------------
  const isDriversPage = !!driversMatch;
  const isDriverDetailPage = !!driverDetailMatch;
  const isDriverEditPage = !!driverEditMatch;
  const isContractEdit = !!contractEditMatch;
  const isOrderMealPage = !!orderMealMatch;

  // ------------------------
  // Driver ID (detail + edit)
  // ------------------------
  const driverId = driverDetailMatch?.params.id || driverEditMatch?.params.id;

  // ------------------------
  // Dynamic padding
  // ------------------------
  const contentPadding =
    isDriverDetailPage || isDriverEditPage || isContractEdit || isOrderMealPage
      ? ''
      : 'p-4 lg:p-7';

  // ------------------------
  // Render
  // ------------------------
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
        {/* Header */}
        {!isOrderMealPage && (
          <header className="sticky top-0 z-10 bg-white">
            <Header
              driverId={driverId ? Number(driverId) : undefined}
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
        )}

        {/* Main Content */}
        <div className={`flex-1 overflow-y-auto ${contentPadding}`}>
          <Outlet />
        </div>
      </main>

      {/* Add Driver Modal */}
      <AddDriverModal
        isOpen={isAddDriverOpen}
        onClose={() => setIsAddDriverOpen(false)}
      />

      <ContractDetailsModal 
        isOpen={isContractsDetailsOpen}
        onClose={()=> setIsContractsDetailsOpen(false)}
      />
    </div>
  );
}

export default App;
