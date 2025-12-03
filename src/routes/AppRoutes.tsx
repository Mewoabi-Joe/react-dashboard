import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Interface from '@/pages/Interface';
import Components from '@/pages/Components';
import Pages from '@/components/Pages';
import Forms from '@/pages/Forms';
import Gallery from '@/pages/Gallery';
import Documentation from '@/pages/Documentation';
import NotFound from '@/pages/NotFound';
import PrivateRoute from './PrivateRoute';

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  requiresAuth?: boolean;
}

const routes: RouteConfig[] = [
  { path: '/login', component: Login, requiresAuth: false },
  { path: '/', component: Dashboard, requiresAuth: true },
  { path: '/interface', component: Interface, requiresAuth: true },
  { path: '/components', component: Components, requiresAuth: true },
  { path: '/pages', component: Pages, requiresAuth: true },
  { path: '/forms', component: Forms, requiresAuth: true },
  { path: '/gallery', component: Gallery, requiresAuth: true },
  { path: '/documentation', component: Documentation, requiresAuth: true },
];

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component, requiresAuth }) => {
          const element = requiresAuth ? (
            <PrivateRoute>
              <Component />
            </PrivateRoute>
          ) : (
            <Component />
          );

          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
