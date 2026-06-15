import { useState } from "react";
import { productApi } from "../api/axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function AddProduct() {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const submit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await productApi.post(
        "/api/v1/products",
        {
          name: form.name,
          description: form.description,
          price: Number(form.price),
        }
      );

      toast.success(
        "Product added successfully"
      );

      setForm({
        name: "",
        description: "",
        price: "",
      });

    } catch {

      toast.error(
        "Failed to add product"
      );

    }
  };

  return(

     <div className="min-h-screen flex flex-col">

    <Navbar />

    <main className="grow">

      <div className="max-w-lg mx-auto mt-10">

        <form
          onSubmit={submit}
          className="bg-white p-6 rounded shadow"
        >

          <h1 className="text-2xl font-bold mb-4">
            Add Product
          </h1>

          <input
            placeholder="Name"
            className="border p-2 w-full mb-3"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            className="border p-2 w-full mb-3"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-2 w-full mb-3"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
          />

          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>

        </form>

      </div>

    </main>

    <Footer />

  </div>
  );
}