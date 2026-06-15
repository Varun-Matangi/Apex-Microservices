import type { Product } from "../types/Product.ts";

interface Props {
  product: Product;
  quantity: number;
  onQuantityChange: (value: number) => void;
  onOrder: () => void;
}

export default function ProductCard({
  product,
  quantity,
  onQuantityChange,
  onOrder,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold">
        {product.name}
      </h2>

      <p className="text-gray-500 mt-2">
        {product.description}
      </p>

      <p className="font-bold text-green-600 mt-2">
        ₹ {product.price}
      </p>

      <input
        type="number"
        min={1}
        value={quantity || ""}
        onChange={(e) =>
          onQuantityChange(Number(e.target.value))
        }
        className="border p-2 rounded w-full mt-4"
      />

      <button
        onClick={onOrder}
        className="bg-indigo-600 text-white w-full mt-4 py-2 rounded"
      >
        Place Order
      </button>

    </div>
  );
}