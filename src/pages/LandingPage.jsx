import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 px-6 pt-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          Manage College Reports <span className="text-blue-600">Effortlessly</span> 📊
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          A smart solution for handling examinations, tracking reports, and generating insights – all in one place.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started 🚀
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
          >
            Admin Login 🔐
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">✨ Key Features</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">📁 Report Management</h3>
            <p className="text-gray-600 mt-2">Upload, download, and manage all reports with ease.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">📅 Exam Tracking</h3>
            <p className="text-gray-600 mt-2">Monitor student exams, results, and performance.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">📊 Data Insights</h3>
            <p className="text-gray-600 mt-2">Generate insightful charts and analytics.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-center">
        <p>© {new Date().getFullYear()} College Report Management | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
