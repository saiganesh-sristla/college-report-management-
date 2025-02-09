import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useReportStore from "../../store/useReportStore";

const ReportTable = () => {
  const { reports } = useReportStore();

  const handleDownload = (fileData, fileName) => {
    if (!fileData) {
      alert("No file available!");
      return;
    }
  
    try {
      // Extract Base64 content (after the comma in "data:application/pdf;base64,...")
      const base64Data = fileData.split(",")[1];
  
      // Convert Base64 to raw binary data
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Uint8Array(byteCharacters.length);
  
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
  
      // Create a Blob with the correct MIME type
      const fileType = fileData.split(";")[0].split(":")[1] || "application/octet-stream";
      const blob = new Blob([byteNumbers], { type: fileType });
  
      // Create a download link
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName || "downloaded_file";
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Error processing the file!");
    }
  };
  

  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      reports
        .map((r) => `${r.title},${r.course},${r.date},${r.description},${r.fileName || "No File"}`)
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const a = document.createElement("a");
    a.href = encodedUri;
    a.download = "reports.csv";
    document.body.appendChild(a);
    a.click();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "course", headerName: "Course", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "description", headerName: "Description", width: 250 },
    {
      field: "file",
      headerName: "Report File",
      width: 200,
      renderCell: (params) =>
        params.row.file ? (
          <button
            onClick={() => handleDownload(params.row.file, params.row.fileName)}
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
          >
            Download
          </button>
        ) : (
          "No File"
        ),
    },
  ];

  const rows = reports.map((report, index) => ({ id: index + 1, ...report }));

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6 w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">📊 Reports</h2>

      <div className="h-96 bg-gray-50 p-4 rounded-lg shadow">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          className="bg-white"
          checkboxSelection
        />
      </div>

      <button
        onClick={exportCSV}
        className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Export CSV
      </button>
    </div>
  );
};

export default ReportTable;
