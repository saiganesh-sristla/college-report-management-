import React from "react";
import useExamStore from "../../store/store";

const ExamTable = () => {
  const exams = useExamStore((state) => state.exams);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        📚 Examinations
      </h2>

      {exams.length === 0 ? (
        <p className="text-gray-500 text-center">No exams added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white text-center">
                <th className="border p-3">ID</th>
                <th className="border p-3">Exam Name</th>
                <th className="border p-3">Course</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Total Students</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr
                  key={exam.id}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="border p-3">{exam.id}</td>
                  <td className="border p-3">{exam.name}</td>
                  <td className="border p-3">{exam.course}</td>
                  <td className="border p-3">{exam.date}</td>
                  <td className="border p-3">{exam.totalStudents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExamTable;
