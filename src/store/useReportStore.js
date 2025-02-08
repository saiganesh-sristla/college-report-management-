import { create } from "zustand";

const useReportStore = create((set) => ({
  reports: JSON.parse(localStorage.getItem("reports")) || [],

  addReport: (report) => {
    set((state) => {
      const updatedReports = [...state.reports, report];
      localStorage.setItem("reports", JSON.stringify(updatedReports)); // Save to localStorage
      return { reports: updatedReports };
    });
  },

  deleteReport: (id) => {
    set((state) => {
      const updatedReports = state.reports.filter((report) => report.id !== id);
      localStorage.setItem("reports", JSON.stringify(updatedReports)); // Update localStorage
      return { reports: updatedReports };
    });
  },
}));

export default useReportStore;
