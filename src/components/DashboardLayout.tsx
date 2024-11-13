import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Truck, CreditCard, BarChart } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 min-h-screen p-4 ${isSidebarOpen ? '' : '-ml-64'}`}>
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">RestoDash</h1>
        </div>
        
        <nav className="space-y-2">
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/orders" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <ShoppingBag className="w-5 h-5" />
            <span>Orders</span>
          </Link>
          <Link to="/delivery" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <Truck className="w-5 h-5" />
            <span>Delivery</span>
          </Link>
          <Link to="/payments" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <CreditCard className="w-5 h-5" />
            <span>Payments</span>
          </Link>
          <Link to="/analytics" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <BarChart className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;