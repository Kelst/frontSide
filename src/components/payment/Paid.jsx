import React from 'react'
import { styled } from '@mui/material/styles';
import style from  "./Paid.module.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
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
  const WhiteTextTableCell = styled(TableCell)(({ theme }) => ({
    color: 'white',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      fontSize: 8,
    },
  }));
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
  const theme = useTheme(); 
  return (
    <div className='     shadow-md scroll-auto   bg-white  rounded-md  p-2 m-1   ' >
    <TableContainer component={Paper}   sx={{
    width: "auto",
    height: "55vh",
    fontSize: "9px",
  

   
  }}>
      <Table 
    className={style.animationBorderSM}
      aria-label="spanning table">
        <TableHead >
          <StyledTableRow >
            <WhiteTextTableCell>Дата</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Опис</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Сума</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Депозит</WhiteTextTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody className=' overflow-y-hidden'>
        {paid.paidData.map((row) => (
            <StyledTableRow key={row.date}>
              <WhiteTextTableCell  >{row.date}</WhiteTextTableCell>
              <WhiteTextTableCell className=' p-0' align="right">{row.description}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{row.sum}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{ccyFormat(row.deposit)}</WhiteTextTableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <WhiteTextTableCell rowSpan={2} />
            <WhiteTextTableCell colSpan={2}>Всього</WhiteTextTableCell>
            <WhiteTextTableCell align="right">{paid.count}</WhiteTextTableCell>
          </TableRow>

          <TableRow>
            <WhiteTextTableCell colSpan={2}>Сума</WhiteTextTableCell>
            <WhiteTextTableCell align="right">{paid.sum}</WhiteTextTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
