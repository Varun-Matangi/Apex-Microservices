import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userApi } from "../api/axios";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await userApi.post(
        "/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      toast.success("Login successful");

      navigate("/");
    } catch {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form
        onSubmit={login}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-5">
          Login
        </h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-indigo-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          No account?
          <Link
            className="text-blue-600 ml-2"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}