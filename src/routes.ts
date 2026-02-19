import App from '@/App';
import Login from '@/pages/auth/login';
import { createBrowserRouter } from 'react-router-dom';
import ContractsPage from './pages/contracts';
import DefinitionPage from './pages/definition';
import TableFood from './pages/food';
import EditContract from './pages/edit-contracts';


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

// const requireAuth = () => {
//   const token = getCookie('auth_token');

//   if (!token) {
//     return redirect('/auth/login');
//   }
//   return null;
// };

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   Component: App,
  //   loader: requireAuth,
  //   children: [
  //     { index: true, Component: Dashboard },
  //     { path: 'dashboard', Component: Dashboard },
  //   ],
  // },
  {
    path: '/',
    Component: App,
    // children: [
    children: [
      // { index: true, Component: Dashboard },
      // { path: 'dashboard', Component: Dashboard },
      { path: '/definition', Component: DefinitionPage },
      { path: '/foods', Component: TableFood },
      { path: '/contracts', Component: ContractsPage },
      { path: '/contracts/edit/:id', Component: EditContract },
      // { path: 'tickets', Component: Tickets },
      // { path: 'tickets/:id', Component: TicketDetailsPage },
    ],
    //   { path: 'new-ticket', Component: NewTicket },
    //   { path: 'weekly-plan', Component: WeeklyPlan },
    //   { path: 'notifications', Component: Notifications },
    //   { path: 'announcements', Component: Announcements },
    //   { path: 'order', Component: Order },
    //   { path: 'ticket/new', Component: NewTicket },
    // ],
  },
  {
    path: '/auth/login',
    Component: Login,
  },

  // TODO: remove this after testing

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