import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "course", headerName: "Course", width: 150 },
  { field: "attendance", headerName: "Attendance (%)", width: 150 },
];

const rows = [
  { id: 1, name: "John Doe", course: "Course A", attendance: 95 },
  { id: 2, name: "Jane Smith", course: "Course B", attendance: 88 },
  { id: 3, name: "Alice Brown", course: "Course C", attendance: 92 },
  { id: 4, name: "Bob White", course: "Course D", attendance: 89 },
  { id: 5, name: "Charlie Black", course: "Course E", attendance: 94 },
];

const Attendance = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Attendance</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="h-96">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15]}
            checkboxSelection
            className="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Attendance;