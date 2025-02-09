import React from "react";
import ReportForm from "../components/Reports/ReportForm";
import ReportTable from "../components/Reports/ReportTable";

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">📝 Reports</h1>
      <ReportForm />
      <ReportTable />
    </div>
  );
};

export default Reports;
