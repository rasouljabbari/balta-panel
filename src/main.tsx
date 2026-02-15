import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './assets/fonts/yekan-bakh-fonts/fontiran.css';
import './lib/yup-locale';
import { router } from './routes';
import './styles/index.css';

// ساخت QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // تعداد retry در صورت خطا
      refetchOnWindowFocus: false, // رفرش نشه با فوکوس
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </QueryClientProvider>
  </StrictMode>,
);
