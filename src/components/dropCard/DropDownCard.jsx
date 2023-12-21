import {  Button, Fab, Icon, Paper, Slide, Snackbar, Typography } from '@mui/material'
import React from 'react'
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import CloseIcon from '@mui/icons-material/Close';
export default function DropDownCard({open,user,handleClose,transition}) {
  return (
    <Snackbar TransitionComponent={transition} open={open} onClose={handleClose} autoHideDuration={10000} key={'top' + 'center'}  anchorOrigin={{vertical:'top',horizontal:'center' }}>

 <Paper  elevation={4} square={false} className='relative p-2 text-center w-[300px] lg:w-[600px] sm:w-[200px] pb-[40px]  '>
 <Typography > Привіт 👋 </Typography>
 <div className='flex  justify-center flex-col items-center gap-3  md:flex-col sm:flex-col '>
    <p className=''>ввійти за логіном <span className='font-bold'>{user.login}</span> ? </p> <Button sx={{color:'black',borderColor:'black',":hover":'borderColor:red'}} variant='outlined'  endIcon={<NavigationOutlinedIcon className=' rotate-90'/>}>Ввійти</Button>
  {/* <NavigationOutlinedIcon className= ' hover:bg-red-500 hover: rounded-md hover:shadow-lg  hover:text-white cursor-pointer hover:w-[30px] hover:h-[30px]  hover:rotate-90'  /> */}
 </div>
<div onClick={()=>handleClose()}>
<CloseIcon className=' absolute top-2 right-2 cursor-pointer'
/>
</div>
 </Paper>

    </Snackbar>

  )
}
