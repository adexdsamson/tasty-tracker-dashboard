import { create } from 'zustand';

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered';
export type PaymentStatus = 'pending' | 'completed' | 'failed';

interface Order {
  id: string;
  customerName: string;
  items: { name: string; quantity: number; price: number }[];
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  total: number;
  createdAt: Date;
  deliveryAddress?: string;
  deliveryCoordinates?: { lat: number; lng: number };
}

interface StoreState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updatePaymentStatus: (orderId: string, status: PaymentStatus) => void;
}

export const useStore = create<StoreState>((set) => ({
  orders: [],
  addOrder: (order) =>
    set((state) => ({ orders: [...state.orders, order] })),
  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      ),
    })),
  updatePaymentStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId ? { ...order, paymentStatus: status } : order
      ),
    })),
}));