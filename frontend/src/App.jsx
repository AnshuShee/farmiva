import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

// Dashboards
import CustomerDashboard from './pages/dashboards/CustomerDashboard';
import FarmerDashboard from './pages/dashboards/FarmerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import AdminOrders from './pages/dashboards/AdminOrders';
import AdminUsers from './pages/dashboards/AdminUsers';
import AdminProducts from './pages/dashboards/AdminProducts';
import AgentDashboard from './pages/dashboards/AgentDashboard';

// Components
import CartSidebar from './components/CartSidebar';
import ProtectedRoute from './components/ProtectedRoute';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <CartSidebar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Customer Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* Farmer Routes */}
        <Route
          path="/farmer/dashboard"
          element={
            <ProtectedRoute requiredRole="farmer">
              <FarmerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes — /admin redirects to /admin/dashboard */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        {/* Agent Routes */}
        <Route path="/agent" element={<Navigate to="/agent/dashboard" replace />} />
        <Route
          path="/agent/dashboard"
          element={
            <ProtectedRoute requiredRole="agent">
              <AgentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Placeholder Routes */}
        {[
          '/admin/zones', '/admin/analytics', '/admin/content',
          '/agent/onboard', '/agent/produce', '/agent/farmers', '/agent/reports'
        ].map(path => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute requiredRole={path.startsWith('/admin') ? 'admin' : 'agent'}>
                <PlaceholderPage />
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
