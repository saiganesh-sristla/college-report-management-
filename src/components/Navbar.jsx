import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu
import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigate("/admin-login"); // Redirect to login page
  };


  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/">📚 College Reports</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg font-medium items-center">
          <Link to="/dashboard" className="hover:text-blue-400 transition">
            Dashboard
          </Link>
          <Link to="/reports" className="hover:text-blue-400 transition">
            Reports
          </Link>
          <Link to="/examinations" className="hover:text-blue-400 transition">
            Examinations
          </Link>
          {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-3">
          <Link
            to="/dashboard"
            className="text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/reports"
            className="text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Reports
          </Link>
          <Link
            to="/examinations"
            className="text-lg hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Examinations
          </Link>
          {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
