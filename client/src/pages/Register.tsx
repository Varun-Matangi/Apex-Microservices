import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userApi } from "../api/axios";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await userApi.post(
        "/api/v1/auth/register",
        form
      );

      toast.success(
        "Registration successful"
      );

      navigate("/login");
    } catch {
      toast.error(
        "Registration failed"
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form
        onSubmit={register}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-5">
          Register
        </h1>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          className="bg-indigo-600 text-white w-full py-2 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already registered?
          <Link
            className="text-blue-600 ml-2"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}