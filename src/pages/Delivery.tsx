import { useStore } from "@/store/useStore";

const Delivery = () => {
  const orders = useStore((state) => state.orders);
  const pendingDeliveries = orders.filter(order => order.status !== 'delivered');

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Delivery</h2>
      <div className="bg-white rounded-lg shadow">
        {pendingDeliveries.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No pending deliveries</div>
        ) : (
          <div className="divide-y">
            {pendingDeliveries.map((order) => (
              <div key={order.id} className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{order.customerName}</h3>
                    <p className="text-sm text-gray-500">{order.deliveryAddress}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Delivery;