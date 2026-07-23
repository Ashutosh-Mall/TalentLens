import {Link} from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 border rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
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
