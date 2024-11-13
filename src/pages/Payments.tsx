import { useStore } from "@/store/useStore";

const Payments = () => {
  const orders = useStore((state) => state.orders);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Payments</h2>
      <div className="bg-white rounded-lg shadow">
        {orders.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No payment records</div>
        ) : (
          <div className="divide-y">
            {orders.map((order) => (
              <div key={order.id} className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{order.customerName}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">{order.paymentStatus}</p>
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

export default Payments;