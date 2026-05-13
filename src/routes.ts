import App from '@/App';
import Login from '@/pages/auth/login';
import Dashboard from '@/pages/dashboard';
import NotFound from '@/pages/not-found';
import OrderPage from '@/pages/order';
import { getCookie } from '@/utils/cookies';
import { createBrowserRouter, redirect } from 'react-router-dom';
import DayOverview from './features/order/components/day-overview';
import MealsOverview from './features/order/components/meals-overview';
import ContractsPage from './pages/contracts';
import DefinitionPage from './pages/definition';
import DriverDetail from './pages/drivers/driver-detail';
import DeriversPage from './pages/drivers/drivers';
import DriverEditForm from './pages/drivers/update-driver';
import EditContract from './pages/edit-contracts';
import TableFood from './pages/food';
import WeeklyPlan from './pages/weekly-plan';


// import Dashboard from '@/pages/dashboard';
// import NotFoundPage from '@/pages/not-found';
// import Notifications from '@/pages/notifications';
// import Announcements from './pages/announcements.tsx';
// import ForgetPasswordPage from './pages/auth/forget-password.tsx';
// import NewPasswordPage from './pages/auth/new-password.tsx';
// import VerifyCodePage from './pages/auth/verify-code.tsx';
// import NewTicket from './pages/new-ticket.tsx';
// import Order from './pages/order.tsx';
// import OrganizationInformation from './pages/organization-information.tsx';
// import Reports from './pages/reports.tsx';
// import TicketDetailsPage from './pages/ticket-details-page.tsx';
// import Tickets from './pages/tickets.tsx';
// import UserLogsPage from './pages/user-logs.tsx';
// import WeeklyPlan from './pages/weekly-plan.tsx';

const requireAuth = () => {
  const token = getCookie('auth_token');

  if (!token) {
    return redirect('/auth/login');
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    loader: requireAuth,
    children: [
      { index: true, Component: Dashboard },
      { path: 'dashboard', Component: Dashboard },
      { path: '/definition', Component: DefinitionPage },
      { path: '/foods', Component: TableFood },
      { path: 'contracts', Component: ContractsPage },
      { path: 'contracts/edit/:id', Component: EditContract },
      // { path: 'tickets', Component: Tickets },
      // { path: 'tickets/:id', Component: TicketDetailsPage },
      { path: 'drivers', Component: DeriversPage },
      { path: 'drivers/:id', Component: DriverDetail },
      { path: 'drivers/edit/:id', Component: DriverEditForm },
      { path: 'orders', Component: OrderPage },
      { path: 'orders/:day', Component: DayOverview },
      { path: '/orders/:day/:meal', Component: MealsOverview },
      { path: 'orders/weekly-plan', Component: WeeklyPlan },
    ],
  },
  {
    path: '/auth/login',
    Component: Login,
  },
  {
    path: '*',
    Component: NotFound,
  },

  // {
  //   path: '/auth/forgot-password',
  //   Component: ForgotPassword,
  // },
  // {
  //   path: '/auth/verify-code',
  //   Component: VerifyCode,
  // },
  // {
  //   path: '/auth/reset-password',
  //   Component: ResetPassword,
  // },
  // 404
  //   {
  //     path: '*',
  //     Component: NotFoundPage,
  //   },
  //   {
  //     path: '/auth/verify-code',
  //     Component: VerifyCodePage,
  //   },
  //   {
  //     path: '/auth/forgot-password',
  //     Component: ForgetPasswordPage,
  //   },
  //   {
  //     path: '/auth/new-password',
  //     Component: NewPasswordPage,
  //   },
]);