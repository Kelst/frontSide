import React from 'react'
import { styled } from '@mui/material/styles';
import style from  "./Paid.module.css"
import { useTheme } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GlasmorphizmButton from '../button/glasmorphizm/GlasmorphizmButton';

const paid={
    count:5,
    sum:4132.0,
     paidData:[
    {
        date:"2023-12-07 11:52:00",
        description:"Internet: М/A Заставнівський-300(274)_Internet+TV (642) (2023-12-01-2023-12-31)",
        sum:243.0,
        deposit:0,
        type:"Абон. плата"
    },
    {
        date:"2023-12-07 11:52:00",
        description:"Internet: М/A Заставнівський-300(274)_Internet+TV (642) (2023-12-01-2023-12-31)",
        sum:243.0,
        deposit:0,
        type:"Абон. плата"
    },
    {
        date:"2023-12-07 11:52:00",
        description:"Internet: М/A Заставнівський-300(274)_Internet+TV (642) (2023-12-01-2023-12-31)",
        sum:243.0,
        deposit:0,
        type:"Абон. плата"
    },
    {
        date:"2023-12-07 11:52:00",
        description:"Internet: М/A Заставнівський-300(274)_Internet+TV (642) (2023-12-01-2023-12-31)",
        sum:243.0,
        deposit:0,
        type:"Абон. плата"
    },
    {
        date:"2023-12-07 11:52:00",
        description:"Internet: М/A Заставнівський-300(274)_Internet+TV (642) (2023-12-01-2023-12-31)",
        sum:243.0,
        deposit:0,
        type:"Абон. плата"
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
    
export default function Withdrawal() {
  return (
    <div className='     shadow-md   bg-white   rounded-md  p-2  ' >
    <TableContainer component={Paper}   sx={{
    width: "auto",
    height: "55vh",
    fontSize: "9px",
   
   
  }}>
      <Table 
       className={style.animationBorderSM}
      aria-label="spanning table">
        <TableHead>
          <StyledTableRow>
            <WhiteTextTableCell>Дата</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Опис</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Сума</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Депозит</WhiteTextTableCell>
            <WhiteTextTableCell align="right">Тип</WhiteTextTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
        {paid.paidData.map((row) => (
            <StyledTableRow key={row.date}>
              <WhiteTextTableCell>{row.date}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{row.description}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{row.sum}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{ccyFormat(row.deposit)}</WhiteTextTableCell>
              <WhiteTextTableCell align="right">{row.type}</WhiteTextTableCell>
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
