import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { color } from 'framer-motion';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

//You have to change value inside createData fxn only---->

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

function makeStyles(status){
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function Tablehai(){
  
  return (
<div className=' object-cover mt-10 w-full flex flex-col items-center gap-[1rem]'>
      <h3 className='text-2xl font-bold'>Recent Order</h3>
    <TableContainer className='w-full' component={Paper}  >
      <Table  aria-label="simple table" className='w-full'  style={{boxShadow:" 0px 30px 90px rgba(0, 0, 0, 0.4)" }}>
        <TableHead className=''>
          <TableRow style={{background:"#00b5ff"}}>
            <TableCell>Product</TableCell>
            <TableCell align="left">TrackingId</TableCell>
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" style={{color:"blue"}}>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

