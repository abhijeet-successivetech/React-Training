'use client'
import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TableSortLabel
} from '@mui/material';

function createData(name, age, weight, city) {
  return { name, age, weight, city };
}

const rows = [
  createData('Aman', 21, 48, 'Delhi'),
  createData('Rahul', 22, 51, 'Noida'),
  createData('Sumit', 20, 66, 'Delhi'),
  createData('Abhishek', 30, 67, 'Noida'),
  createData('Vikas', 25, 70, 'Gurgaon'),
  createData('Rohit', 28, 68, 'Mumbai'),
  createData('Deepak', 27, 75, 'Chennai'),
];

const descComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const  getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descComparator(a, b, orderBy)
    : (a, b) => -descComparator(a, b, orderBy);
}

export default function TableComponent() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 
  const sortedRows = rows.slice().sort(getComparator(order, orderBy));

  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper sx={{ width: '80%', margin: 'auto', mt: 4 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'age'}
                  direction={orderBy === 'age' ? order : 'asc'}
                  onClick={() => handleRequestSort('age')}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'weight'}
                  direction={orderBy === 'weight' ? order : 'asc'}
                  onClick={() => handleRequestSort('weight')}
                >
                  Weight
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'city'}
                  direction={orderBy === 'city' ? order : 'asc'}
                  onClick={() => handleRequestSort('city')}
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
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
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
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
