import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">
          <Link to="/">College Report Management</Link>
        </h1>
        <div className="flex gap-6">
          <Link
            to="/dashboard"
            className="hover:text-gray-300 transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/reports"
            className="hover:text-gray-300 transition duration-300"
          >
            Reports
          </Link>
          <Link
            to="/examinations"
            className="hover:text-gray-300 transition duration-300"
          >
            Examinations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

