'use client'
import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TableSortLabel
} from '@mui/material';

function createData(name, gender, degree, city) {
  return { name, gender, degree, city };
}

const rows = [
  createData('Aman', 'M', 'B.tech', 'Delhi'),
  createData('Satakshi', 'F', 'B.tech', 'Noida'),
  createData('Sumit', 'M', 'MCA', 'Delhi'),
  createData('Abhishek', 'M', 'BCA', 'Noida'),
  createData('Vikas', 'M', 'MCA', 'Gurgaon'),
  createData('Rohit', 'M', 'M.tech', 'Mumbai'),
  createData('Deepak', 'M', 'M.tech', 'Chennai'),
  createData('Jeeva', 'M', 'M.tech', 'Pune'),
  createData('Raj', 'M', 'B.tech', 'Pune'),
];

const descComparator = (a, b, orderBy) => {
  const aValue = a[orderBy].toLowerCase();
  const bValue = b[orderBy].toLowerCase();

  if (bValue < aValue) {
    return -1;
  }
  if (bValue > aValue) {
    return 1;
  }
  return 0;
}

const  getComparator = (order, orderBy) => {
  return order === 'desc' ? (a, b) => descComparator(a, b, orderBy): (a, b) => -descComparator(a, b, orderBy);
}

export default function TableComponent() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleChangePage= (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRows = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 
  const sortedRows = rows.slice().sort(getComparator(order, orderBy));

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '80%', margin: 'auto', mt: 4 }}>
      <TableContainer>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'gender'}
                  direction={orderBy === 'gender' ? order : 'asc'}
                  onClick={() => handleSort('gender')}
                  aria-label="Sort by gender"
                >
                  Gender
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'degree'}
                  direction={orderBy === 'degree' ? order : 'asc'}
                  onClick={() => handleSort('degree')}
                >
                  Degree
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'city'}
                  direction={orderBy === 'city' ? order : 'asc'}
                  onClick={() => handleSort('city')}
                >
                  City
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.degree}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[2, 3, 5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRows}
      />
    </Paper>
  );
}
