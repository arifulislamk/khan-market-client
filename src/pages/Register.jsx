import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
const Register = () => {
  const auth = useContext(AuthContext);
  const { createuser } = auth;
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { email, phone, password, confirmPassword } = formData;
    if (!email || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    try {
      setLoading(true);
      const result = await createuser(email, password);
      console.log("User created successfully:", result);
    } catch (error) {
      console.log("Registration error:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f5f5f3] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#ad861b] font-bold">
            Khan Market
          </p>
          <h2 className="text-2xl font-bold text-gray-950 mt-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-400 mt-1">Register your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="block w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 outline-none text-sm focus:border-[#b08a20] focus:ring-1 focus:ring-[#b08a20]/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
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
            {loading ? "CREATING ACCOUNT..." : "REGISTER"}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ad861b] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
