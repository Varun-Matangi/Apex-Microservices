import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-2xl">APEX Order</h1>

        <div className="space-x-5">
          <Link to="/">Home</Link>

          <Link to="/products/add">Add Product</Link>

          <Link to="/orders">Orders</Link>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
