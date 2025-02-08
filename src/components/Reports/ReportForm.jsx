import React, { useState } from "react";
import useReportStore from "../../store/useReportStore";

const ReportForm = () => {
  const { addReport } = useReportStore();
  const [reportData, setReportData] = useState({
    title: "",
    course: "",
    date: "",
    description: "",
    file: null,
    fileName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to Base64

      reader.onload = () => {
        setReportData({
          ...reportData,
          file: reader.result, // Store Base64 data
          fileName: file.name, // Save original file name
        });
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reportData.file) {
      alert("Please upload a report file.");
      return;
    }

    addReport(reportData);

    // Reset form
    setReportData({ title: "", course: "", date: "", description: "", file: null, fileName: "" });
    alert("Report added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">📄 Add Report</h3>

      <input
        type="text"
        name="title"
        value={reportData.title}
        onChange={handleChange}
        placeholder="Report Title"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="course"
        value={reportData.course}
        onChange={handleChange}
        placeholder="Course"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="date"
        name="date"
        value={reportData.date}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="description"
        value={reportData.description}
        onChange={handleChange}
        placeholder="Description"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
      ></textarea>

      {/* File Upload */}
      <label className="block text-gray-600 font-medium">Upload Report File (PDF, Excel, CSV)</label>
      <input
        type="file"
        accept=".pdf,.xls,.xlsx,.csv"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit Report
      </button>
    </form>
  );
};

export default ReportForm;
