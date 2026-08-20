import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { signinuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    try {
      setLoading(true);
      const result = await signinuser(email, password);
      console.log("Login successful:", result);
      navigate("/");
    } catch (error) {
      console.error(error);
      if (error?.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error?.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error?.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (error?.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError(
          error?.response?.data?.message ||
            error?.message ||
            "Login failed. Please check your information.",
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f5f5f3] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#ad861b] font-bold">
            Khan Market
          </p>
          <h2 className="text-2xl font-bold text-gray-950 mt-2">Login</h2>
          <p className="text-sm text-gray-400 mt-1">Login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg bg-gray-950 text-white font-bold hover:bg-[#c49a24] hover:text-black transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#ad861b] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
