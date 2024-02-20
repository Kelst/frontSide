import React,{ useState }   from 'react'

import liqpay from '../../assets/liqpay.png'
import easypay from '../../assets/easypay.png'
import portmone from '../../assets/portmone.png'
import privat24 from '../../assets/privat24.png'

import BuyButton from '../button/buybutton/BuyButton';
import PaymentDialog from '../dialog/PaymentDialog'


export default function Pay ({handlePayDialogShow}) {


  return (
<div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-3 gap-y-4 justify-center mt-1'>

   <div onClick={()=>{handlePayDialogShow('liqpay')}} className=" p-[2px]    bg-white border border-gray-200 rounded-lg shadow relative ">
    <BuyButton />
     <img src={liqpay} alt="" className=' object-contain w-[300px] h-[300px] object-center bg-white m-auto'   loading='lazy' />
    </div>
    <div  onClick={()=>{handlePayDialogShow('easypay')}} className=" p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">

    <BuyButton/>
    <img src={easypay} alt="" className=' object-contain w-[300px] h-[300px]   object-center bg-white  m-auto'  loading='lazy' />
    </div>
    <div  onClick={()=>{handlePayDialogShow('portmone')}} className=" p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">
    <BuyButton/>
    <img src={portmone} alt="" className=' object-contain  w-[300px] h-[300px]   object-center bg-white  m-auto'  loading='lazy'  />
    </div>
    <div  onClick={()=>{handlePayDialogShow('privat24')}} className="p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">
    <BuyButton/>
    <img src={privat24} alt="" className=' object-contain  w-[300px] h-[300px]   object-center bg-white  m-auto' loading='lazy'  />
    </div>
  

    </div>
  )
}
