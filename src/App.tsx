import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';
import { checkAuthStatus } from './redux/slices/authSlice';
import { setNotifications } from './redux/slices/userSlice';
import { mockNotifications } from './utils/mockData';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './context/ThemeContext';
import { RootState } from './types';

const AppContent: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      // Initialize notifications when user is authenticated
      dispatch(setNotifications(mockNotifications));
    }
  }, [dispatch, isAuthenticated]);

  return <AppRoutes />;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          <AppContent />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
