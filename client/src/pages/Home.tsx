import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { productApi, orderApi } from "../api/axios";
import toast from "react-hot-toast";
import type { Product } from "../types/Product.ts";

export default function Home() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [quantities, setQuantities] =
    useState<Record<string, number>>({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response =
      await productApi.get(
        "/api/v1/products"
      );
    setProducts(response.data);
  };

  const placeOrder = async (
    productId: string
  ) => {
    const quantity =
      quantities[productId] || 0;

    if (quantity <= 0) {
      toast.error(
        "Quantity must be greater than 0"
      );
      return;
    }

    try {
      await orderApi.post(
        "/api/v1/orders",
        {
          productId,
          quantity,
        },
        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem(
                "token"
              )}`,
          },
        }
      );

      toast.success(
        "Order placed successfully"
      );
    } catch {
      toast.error(
        "Order failed"
      );
    }
  };

  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <main className="grow max-w-7xl mx-auto p-6 w-full">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            quantity={
              quantities[product._id] || 0
            }
            onQuantityChange={(qty) =>
              setQuantities({
                ...quantities,
                [product._id]: qty,
              })
            }
            onOrder={() =>
              placeOrder(product._id)
            }
          />
        ))}
      </div>

    </main>

    <Footer />
  </div>
  );
}