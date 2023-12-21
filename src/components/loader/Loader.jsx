import React from 'react'
import clases from "./Loader.module.css";
import Backdrop from '@mui/material/Backdrop';
import bigW from "../../assets/round-bigw.png"
import useStore from '../../store/store';
import useInfoStore from '../../store/infoStore';

export default function Loader() {
    const openLoader=useInfoStore(state=>state.openLoader)
    
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer +1 }}
    open={openLoader}
   
  >

    
   
    <div className={clases.container}>
        <div className={clases.cloud}>
        <img  className=' absolute top-[-120px] z-[1000000000000000] left-[60px] w-[60px] h-[60px] mb-1  animate-my-spin' src={bigW} />
        <img  className=' absolute top-[-80px] z-[1000000000000000] left-[115px] w-[40px] h-[40px] mb-1  animate-reverse-spin' src={bigW} />

        <h2 className=' text-white'>Loading ...  </h2>
        </div>
        
    </div>
    
    </Backdrop>
  )
}
