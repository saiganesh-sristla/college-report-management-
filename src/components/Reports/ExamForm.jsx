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
      className="bg-white p-6 rounded-lg shadow-md mb-4 space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Add Examination</h3>
      <input
        type="text"
        name="name"
        value={examData.name}
        onChange={handleChange}
        placeholder="Examination Name"
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        name="course"
        value={examData.course}
        onChange={handleChange}
        placeholder="Course"
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="date"
        name="date"
        value={examData.date}
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="number"
        name="totalStudents"
        value={examData.totalStudents}
        onChange={handleChange}
        placeholder="Total Students"
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ExamForm;
