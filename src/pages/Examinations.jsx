import React from "react";
import ExamForm from "../components/Reports/ExamForm";
import ExamTable from "../components/Reports/ExamTable";

const Examinations = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Examinations</h1>
      <ExamForm />
      <ExamTable />
    </div>
  );
};

export default Examinations;
