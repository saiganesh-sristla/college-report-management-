import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  // Sample Data for Charts
  const examData = {
    labels: ["Exam 1", "Exam 2", "Exam 3", "Exam 4"],
    datasets: [
      {
        label: "Students Appeared",
        data: [120, 200, 150, 180],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4caf50"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">📊 Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">📄 Total Reports</h2>
          <p className="text-3xl font-bold text-blue-600">35</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">📚 Total Examinations</h2>
          <p className="text-3xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">📅 Upcoming Exams</h2>
          <p className="text-3xl font-bold text-red-600">4</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📌 Exam Participation Overview</h2>
        <Bar data={examData} />
      </div>

      {/* Recent Reports Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📝 Recent Reports</h2>
        <ul className="space-y-2">
          <li className="p-3 bg-gray-50 rounded-lg shadow-sm">📌 Attendance Report - BSc IT</li>
          <li className="p-3 bg-gray-50 rounded-lg shadow-sm">📌 Mid-Term Analysis - BBA</li>
          <li className="p-3 bg-gray-50 rounded-lg shadow-sm">📌 Semester Performance - MCA</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
