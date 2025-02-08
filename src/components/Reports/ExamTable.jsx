import React from "react";
import useExamStore from "../../store/store";

const ExamTable = () => {
  const exams = useExamStore((state) => state.exams);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Examinations</h2>
      {exams.length === 0 ? (
        <p className="text-gray-500">No exams added yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="border p-2">ID</th>
              <th className="border p-2">Exam Name</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Total Students</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} className="text-center">
                <td className="border p-2">{exam.id}</td>
                <td className="border p-2">{exam.name}</td>
                <td className="border p-2">{exam.course}</td>
                <td className="border p-2">{exam.date}</td>
                <td className="border p-2">{exam.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExamTable;
