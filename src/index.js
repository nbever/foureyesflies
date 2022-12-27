import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Login';
import CustomerPage from './pages/CustomerPage';
import CustomersPage from './pages/CustomersPage';
import AuthErrorBoundary from './AuthErrorBoundary';
import {theme, ThemeProvider} from '@mineral/core';

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthErrorBoundary>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="customers" element={<CustomersPage />}/>
              <Route path="customers/:subId" element={<CustomerPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </AuthErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
