"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 160,
  },
  {
    field: "gender",
    
    headerName: "Gender",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
];

const rows = [
  { id: 1, name: "Emraan", age: 20, gender: "Male" },
  { id: 2, name: "Kush", age: 22, gender: "Male" },
  { id: 3, name: "Bhagat", age: 25, gender: "Male" },
  { id: 4, name: "Ruhi", age: 16, gender: "Female" },
  { id: 5, name: "Abhijeet", age: 21, gender: "Male" },
  { id: 6, name: "Yash", age: 20, gender: "Male" },
  { id: 7, name: "Gaurav", age: 21, gender: "Male" },
  { id: 8, name: "Singh", age: 22, gender: "Male" },
];

const paginationModel = { page: 0, pageSize: 5 };

const TableComponent = () => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};
export default TableComponent;