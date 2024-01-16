import React from 'react'
import { styled } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const paid={
    count:10,
    sum:4132.0,
     paidData:[
    {
        date:"2023-12-07 11:52:00",
        description:"24N",
        sum:243.0,
        deposit:-274.0
    },
    {
        date:"2023-12-07 11:52:00",
        description:"24N",
        sum:243.0,
        deposit:-274.0
    },
    {
        date:"2023-12-07 11:52:00",
        description:"24N",
        sum:243.0,
        deposit:-274.0
    },
    {
        date:"2023-12-07 11:52:00",
        description:"24N",
        sum:243.0,
        deposit:-274.0
    },
    {
        date:"2023-12-07 11:52:00",
        description:"24N",
        sum:243.0,
        deposit:-274.0
    },
 
]}
function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
   
  }));
 
export default function Paid() {
  return (
    <div className='     shadow-md   bg-white     ' >
    <TableContainer component={Paper}   sx={{
    width: "280px",
    height: "55vh",
    fontSize: "9px",
   
    '@media (min-width: 500px)': {
      width: '300px',
      '@media (min-width: 640px)': {
        width: '550px',
      },
      '@media (min-width: 768px)': {
        width: '680px',
      },
      '@media (min-width: 1280px)': {
        width: '1180px',
      },
    },
  }}>
      <Table 
       sx={{
       
        width: '400px',
     
        '@media screen and (min-width: 500px)': {
          width: '300px',
        },
        '@media screen and (min-width: 640px)': {
          width: '550px',
        },
        '@media (min-width: 768px)': {
          width: '680px',
        },
        '@media (min-width: 1280px)': {
          width: '1180px',
        },
        // Додайте інші стилі, які вам потрібні
      }}
      aria-label="spanning table">
        <TableHead>
          <StyledTableRow >
            <TableCell>Дата</TableCell>
            <TableCell align="right">Опис</TableCell>
            <TableCell align="right">Сума</TableCell>
            <TableCell align="right">Депозит</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {paid.paidData.map((row) => (
            <StyledTableRow key={row.date}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.sum}</TableCell>
              <TableCell align="right">{ccyFormat(row.deposit)}</TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={2}>Всього</TableCell>
            <TableCell align="right">{paid.count}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>Сума</TableCell>
            <TableCell align="right">{paid.sum}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
