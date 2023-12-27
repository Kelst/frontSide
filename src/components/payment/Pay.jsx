import React from 'react'
import { lazy } from 'react';

import liqpay from '../../assets/liqpay.png'
import easypay from '../../assets/easypay.png'
import portmone from '../../assets/portmone.png'
import privat24 from '../../assets/privat24.png'

import BuyButton from '../button/buybutton/BuyButton';


export default function () {
  return (
    <div className=' grid grid-cols-3 gap-3' >
   <div className="max-w-sm p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">
 <BuyButton/>
     <img src={liqpay} alt="" className=' object-contain w-[300px] h-[300px] object-center bg-white p-2'   loading='lazy' />
    </div>
    <div className="max-w-sm p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">

    <BuyButton/>

    <img src={easypay} alt="" className=' object-contain w-[300px] h-[300px]   object-center bg-white'  loading='lazy' />
    </div>
    <div className="max-w-sm p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">
    <BuyButton/>

    <img src={portmone} alt="" className=' object-contain  w-[300px] h-[300px]   object-center bg-white'  loading='lazy'  />
    </div>
    <div className="max-w-sm p-[2px] bg-white border border-gray-200 rounded-lg shadow relative">
    <BuyButton/>
    <img src={privat24} alt="" className=' object-contain  w-[300px] h-[300px]   object-center bg-white' loading='lazy'  />
    </div>
    </div>
  )
}
