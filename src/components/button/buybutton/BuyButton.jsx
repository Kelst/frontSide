import React from 'react'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export default function BuyButton() {
  return (
    <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-1">
    <div className="i h-16 w-64 bg-amber-500 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
    </div>
    <a className="text-center text-white font-semibold z-10 pointer-events-none"> Оплатити </a>
    <span className="absolute flex h-6 w-6   top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
      <span className="animate-ping absolute inline-flex  w-[30px] h-[30px] top-1 left-1  rounded-full bg-amber-500 opacity-75"></span>
      <span className=" absolute inline-flex rounded-full h-10 w-10 bg-orange-500"><AccountBalanceWalletOutlinedIcon className='absolute top-2 left-2 text-white '/></span>
    </span>

  </div>
  )
}
