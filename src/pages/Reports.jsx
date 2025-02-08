import React from "react";
import ReportForm from "../components/Reports/ReportForm";
import ReportTable from "../components/Reports/ReportTable";

const Reports = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reports Section</h2>
      <ReportForm />
      <ReportTable />
    </div>
  );
};

export default Reports;
