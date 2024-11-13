import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const orders = useStore((state) => state.orders);

  const dailyOrders = orders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(dailyOrders).map(([date, count]) => ({
    date,
    orders: count,
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Analytics</h2>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Daily Orders</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;