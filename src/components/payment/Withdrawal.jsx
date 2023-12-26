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
    <div className={style.animationBorder}>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1000 }} aria-label="spanning table">
        <TableHead>
          <StyledTableRow>
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
