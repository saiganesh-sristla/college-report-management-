import React, { useState } from "react";
import useExamStore from "../../store/store";

const ExamForm = () => {
  const [examData, setExamData] = useState({
    name: "",
    course: "",
    date: "",
    totalStudents: "",
  });

  const addExam = useExamStore((state) => state.addExam);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !examData.name ||
      !examData.course ||
      !examData.date ||
      !examData.totalStudents
    ) {
      alert("Please fill in all fields.");
      return;
    }

    addExam({ id: Date.now(), ...examData });
    setExamData({ name: "", course: "", date: "", totalStudents: "" }); // Reset form
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-6"
    >
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        📝 Add Examination
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={examData.name}
          onChange={handleChange}
          placeholder="Examination Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          name="course"
          value={examData.course}
          onChange={handleChange}
          placeholder="Course"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="date"
          name="date"
          value={examData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          name="totalStudents"
          value={examData.totalStudents}
          onChange={handleChange}
          placeholder="Total Students"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Submit Examination
      </button>
    </form>
  );
};

export default ExamForm;
