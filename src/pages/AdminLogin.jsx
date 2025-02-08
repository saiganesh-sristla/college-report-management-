import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = login(credentials.email, credentials.password);

    if (isSuccess) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-700 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
