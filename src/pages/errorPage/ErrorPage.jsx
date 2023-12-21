import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import errorImage from "../../assets/404.png"
import style from  "./ErrorPage.module.css"

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleBackToHome=()=>{
      navigate('/')
    }
    
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      minHeight:"100vh",

     
      backgroundImage: `url(${errorImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      backgroundPosition: "center",
    
    
    }}
  >
    <div className=' border animate-flame  mx-8  w-[400px] h-[350px] md:w-[500px] flex justify-center items-center  rounded-lg shadow-red-800 shadow-lg opacity-80 flex-col'>

      <p className='text-white text-[66px] font-bold block text-center font-["Nosifer"]' > 
      {
       error.status?.toString().slice(0,1) 
      }
      <span className='  mx-2  inline-block  text-[75px] text-[#dd8232] font-["Nosifer"] '>{error?.status?.toString().slice(1,2)}</span>
   
      {
       error?.status?.toString().slice(-1) 
      }  
       </p>  
   <div>
    <p className='text-white font-bold inline-block'> Вибачте, але сторінку не знайдено </p>
    <div onClick={handleBackToHome} className='   flex items-center justify-center m-5 text-white bg-[#dd8232] p-5  cursor-pointer rounded-tl-lg  transform transition-transform hover:scale-110 '>ПОВЕРНУТИСЬ НА ГОЛОВНУ </div>
   </div>
    </div>
  
     
     
    
  
  </Box>
  )
}
