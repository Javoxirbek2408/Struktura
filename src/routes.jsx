import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import DashboardPage from './pages/dashboard/DashboardPage';
import AuthLayout from './layouts/AuthLayout';
import { LoginForm } from './pages/auth/SigninPage';
import CartPage from './pages/dashboard/CartPage';
import FollovPage from './pages/dashboard/FollovPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/follow',
        element: <FollovPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LoginForm />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

export default router;
