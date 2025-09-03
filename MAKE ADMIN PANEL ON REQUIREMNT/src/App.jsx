import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { LoginForm } from './components/Auth/LoginForm.jsx';
import { Sidebar } from './components/Layout/Sidebar.jsx';
import { Header } from './components/Layout/Header.jsx';
import { Dashboard } from './components/Dashboard/Dashboard.jsx';
import { UserManagement } from './components/Users/UserManagement.jsx';
import { ProductManagement } from './components/Products/ProductManagement.jsx';
import { OrderManagement } from './components/Orders/OrderManagement.jsx';
import { Settings } from './components/Settings/Settings.jsx';

function AdminPanel() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'products':
        return <ProductManagement />;
      case 'orders':
        return <OrderManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={currentPage} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AdminPanel />
    </AuthProvider>
  );
}

export default App;
