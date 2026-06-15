import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { orderApi } from "../api/axios";
import type { Order } from "../types/Order";
import toast from "react-hot-toast";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await orderApi.get("/api/v1/orders");

      setOrders(response.data);
    } catch {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center mt-20">Loading...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold">No Orders Yet</h2>

            <p className="text-gray-500 mt-2">
              Start shopping and place your first order.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow max-w-7xl mx-auto p-6 w-full">
        <h1 className="text-4xl font-bold mb-8">My Orders</h1>
        <p className="text-gray-500 mb-8">View all your placed orders.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between mb-4">
                <h2 className="font-bold text-lg">Order</h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Order ID:</span>{" "}
                  {order.orderId.slice(0, 8)}
                </p>

                <p>
                  <span className="font-semibold">Customer:</span> {order.name}
                </p>

                <p>
                  <span className="font-semibold">Email:</span> {order.email}
                </p>

                <p>
                  <span className="font-semibold">Product:</span>{" "}
                  {order.productName ?? "Unknown Product"}
                </p>

                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {order.productDescription ?? "No Description"}
                </p>

                <p>
                  <span className="font-semibold">Quantity:</span>{" "}
                  {order.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
