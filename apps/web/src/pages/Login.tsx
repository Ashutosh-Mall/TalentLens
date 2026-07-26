import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../api/api";
import userStore from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = userStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-2">
      <div className="max-w-md w-full p-6 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-black text-white p-2 rounded hover:bg-gray-800 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="flex justify-center gap-2 mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-black hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}