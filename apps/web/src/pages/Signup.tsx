import {Link} from "react-router-dom";
import { api } from "../api/api";
import {useState} from "react";
import userStore from "../store/useUserStore";
import {useNavigate} from "react-router-dom";

export default function Signup() {

  const setUser = userStore((state) => state.setUser);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/signup", { name, email, password });
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-2">
      <div className="max-w-md w-full p-6 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit" className="bg-black text-white p-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="flex justify-center gap-2 mt-4 text-sm text-gray-600">
            Already have an account?
          <Link to="/login" className="text-black hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
