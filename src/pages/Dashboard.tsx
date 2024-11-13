import { Card } from "@/components/ui/card";
import { useStore } from "@/store/useStore";
import { BarChart, DollarSign, ShoppingBag, Truck } from "lucide-react";

const Dashboard = () => {
  const orders = useStore((state) => state.orders);

  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((acc, order) => acc + order.total, 0),
    pendingDeliveries: orders.filter((order) => order.status !== 'delivered').length,
    averageOrderValue: orders.length > 0 
      ? orders.reduce((acc, order) => acc + order.total, 0) / orders.length 
      : 0,
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <h3 className="text-2xl font-bold">{stats.totalOrders}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-accent/10 rounded-full">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-secondary/10 rounded-full">
              <Truck className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Deliveries</p>
              <h3 className="text-2xl font-bold">{stats.pendingDeliveries}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BarChart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average Order Value</p>
              <h3 className="text-2xl font-bold">${stats.averageOrderValue.toFixed(2)}</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;