import React, { useState } from 'react'
import style from  "./Home.module.css"
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import GlasmorphizmButton from '../../components/button/glasmorphizm/GlasmorphizmButton';
import MacCreditDialog from '../../components/dialog/MacCreditDialog';
import useStore from '../../store/store';
import useInfoStore from '../../store/infoStore';
import AddService from '../../components/dialog/AddService';
import StopPlayDialog from '../../components/dialog/StopPlayDialog';
import GlasmorphizmButtonMob from '../../components/button/glasmorphizm/GlasmorphizmButtonMob';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
function daysAndHoursUntilEndOfMonth() {
  let currentDate = new Date();

  let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  let timeDifference = lastDayOfMonth - currentDate;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return {
    days: days,
    hours: hours
  };
}
function extractInfoFromString(inputString) {
  const matchSpread = inputString.match(/(\d+)\(/);
  const spead = matchSpread ? matchSpread[1] : null;
  const matchPrice = inputString.match(/\(([^)]+)\)/);
  const price = matchPrice ? matchPrice[1] : null;

  return { spead, price };
}

const user={
  name:"Безкоровайний Владислав Андрійович",
  uid:"140278",
  status:"active",
  telegramId:"",
  phone:'380951470082',
  login:'vlad_b_1',
  adress:"Чернівці, Проспект Незалежності 116б кв 60",
  statusInternet:true,
  balance:"-5450",
  deposit:"0",
  monthlyPayment:"274",
  dateOfEndCredits:"2023-12-15",
  tariff:"Чернівці-ПС-300(274)_Internet+TV",
  lastPay:"2023-01-15  225 грн",
  ip:"192.5.4.7",
  duration:"+4 01:11:03",
  sendData:"767.85 GB",
  getData:"43.34 GB",
  subLogin:[
    {
      uid:"189209",
      login:"dorosh_ukr50",
    }
  ]

 }
export default function Home() {
const [openDialogMac,setOpenDialogMac]=useState(false)
const [openDialogCredit,setOpenDialogCredit]=useState(false)
const [openDialogService,setOpenDialogService]=useState(false)
const [openDialogStopPlay,setOpenDialogStopPlay]=useState(false)


const setLoader=useInfoStore(state=>state.setLoader) 
const showAllert=useInfoStore(state=>state.showAllert) 
//controller

function handleStopPlayLogin(){
 
  setOpenDialogStopPlay(true)

}
function handleClearMac(){
  // setLoader()
  // setTimeout(()=>{
  //   setLoader()
  // },2000)
   showAllert(2,"Mac очищено")

}
function handleSetCredit(){
  // setLoader()
  // setTimeout(()=>{
  //   setLoader()
  // },2000)
  setOpenDialogCredit(true)
   showAllert(2,"Кредит на 5 днів встановлено")
}
function handleAddService(){
setOpenDialogService(true)
}
function handleStaticIp(){

}




//

  return (
      <section >

    <div className=' hidden lg:block relative z-10'>
    <div className=" text-white  flex items-center justify-center rounded-lg">
      <div className="container mx-auto p-8 bg-white text-black rounded-md shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-red-500">{user.name}</h1>
          <p className="text-gray-600">Логін: {user.login}</p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          <div className={"bg-black p-6 rounded-md shadow-md" +" "+ style.animationBorder}>
            <h2 className="text-xl font-bold mb-4 text-red-500">Основна інформація</h2>
            <p className="text-gray-300 mb-2">Телефон: {user.phone}</p>
            <p className="text-gray-300 mb-2">Адреса: {user.adress}</p>
            <p className="text-gray-300">Стан інтернет зєднання: {user.statusInternet ? 'Active' : 'Inactive'}</p>
            <p className="text-gray-300">Стан  логіну: {user.statusInternet ? 'Active' : 'Inactive'}</p>

            <GlasmorphizmButton label='Призупинити логін' handleAction={handleStopPlayLogin}/>

          </div>

          <div className={"bg-black p-6 rounded-md shadow-md" +" "+ style.animationBorder}>
            <h2 className="text-xl font-bold mb-4 text-red-500">Інформація про оплату</h2>
            <p className="text-gray-300 mb-2 ">Стан рахунку: {user.balance} грн.</p>
           <div className=' flex gap-x-3'><p className="text-gray-300 mb-2">Кредит: {user.deposit} грн.</p><p className="text-gray-300 mb-2">Кредит до: {user.dateOfEndCredits}</p></div> 
          <div className="text-gray-300 mb-2">  
          <p className="text-gray-300 mb-2">Місячна оплата: {user.monthlyPayment} грн.</p>
          <p className="text-gray-300 mb-2">Останній платіж: {user.lastPay} </p>
         <div className=' flex items-center gap-x-2 mt-1'> <p className="text-gray-300">Зняття через: </p>
        
          <div className="grid grid-flow-col  gap-5 text-center auto-cols-max">
  <div className={"flex flex-col p-1 bg-neutral rounded-box text-neutral-content  text-md"+" "+style.animationBorderSM}>
    <span className="countdown  text-md justify-center items-center">
      <span style={{"--value":daysAndHoursUntilEndOfMonth().days}}>{daysAndHoursUntilEndOfMonth().days}</span>
    </span>
    days
  </div> 
  <div className={"flex flex-col justify-center items-center p-1 bg-neutral rounded-box text-neutral-content  text-md"+" "+style.animationBorderSM}>
    <span className="countdown  text-md">
      <span  style={{"--value":daysAndHoursUntilEndOfMonth().hours}}>{daysAndHoursUntilEndOfMonth().hours}</span>
    </span>
    hours
  </div> 
</div>
</div>

          
          </div>
          </div>

          <div className={"bg-black p-6 rounded-md shadow-md" +" "+ style.animationBorder}>
            <h2 className="text-xl font-bold mb-4 text-red-500">Інтернет</h2>
            <p className="text-gray-300 mb-2">Тарифний план: {user.tariff}</p>
            <p className="text-gray-300 mb-2">Швидкість: {extractInfoFromString(user.tariff).spead}Mбіт</p>
            <p className="text-gray-300 mb-2">Ціна: {extractInfoFromString(user.tariff).price} грн.</p>
             
            <p className="text-gray-300 mb-2">IP: {user.ip}</p>
            <p className="text-gray-300 mb-2">Тривалість : {user.duration}</p>
            <p className="text-gray-300 mb-2">Відправлено: {user.sendData}</p>
            <p className="text-gray-300 mb-2">Отримано: {user.getData}</p>
          </div>
        </div>
        <div className={"mt-8 bg-black p-6 rounded-md shadow-md" +" "+ style.animationBorder}>
          <h2 className="text-xl font-bold mb-4 text-red-500">Керування логіном</h2>
           <div className=' flex  justify-center' >
           <GlasmorphizmButton handleAction={handleClearMac} label='Очистити MAC'/>
           <GlasmorphizmButton handleAction={handleSetCredit} label='Встановити кредит'  />
           <GlasmorphizmButton label='Додаткові послуги' handleAction={handleAddService} />
           <GlasmorphizmButton label='Статична IP'/>

           </div>
          
        </div>
      </div>
    </div>
     

    </div>
        
      <div className=' lg:hidden'>
    <div className="flex flex-col lg:bg-slate-100 gap-y-6 items-center justify-center sm:flex-row sm:gap-y-4 flex-wrap sm:items-center sm:shadow-white-sm sm:shadow-red-sm sm:shadow-red-md sm:shadow-red-sm sm:inset-shadow-red-lg sm:border-white sm:p-8 sm:shadow-inner xl:gap-6">   
      <div className=" w-[220px] sm:w-[420px]   mx-auto  shadow-zinc-900 shadow-lg  z-0 mt-2">
        <div className={ style.animationBorder}>
          <div className="text-lg font-semibold mb-2  text-gray-200 relative  p-[5px] rounded-md sm:uppercase">Інформація про логін <PermIdentityIcon className='absolute top-[-25px] z-[100] border-t-2 rounded-2xl left-[0px]'/></div>
          <p className="text-md mb-2 text-gray-200">Логін:  <span className=' font-bold  text-h text-[12px]'>{user.login}</span></p>
          <p className="text-md mb-2 text-white ">Адреса: <span className='font-bold text-[12px]'>{user.adress}</span> </p>
          <p className="text-md mb-2 text-white  flex justify-start items-center gap-x-2">Стан з'єднання: <span className='font-bold text-[12px]'>{user.statusInternet?<div className='relative'><OnlinePredictionIcon fontSize='large' className='text-grean-500 text-white  '></OnlinePredictionIcon><span className=' absolute text-[10px] top-[1px] '>Online</span></div>:<div className=' relative'><OnlinePredictionIcon fontSize='large' className=' text-orange-500 animate-pulse'/> <span className=' absolute text-[10px] top-[1px] '>Offline</span></div>} </span> </p>
          <p className="text-md mb-2 text-white ">Стан рахунку: <span className='font-bold text-[12px]'>{user.balance} грн.</span> </p>
          <GlasmorphizmButtonMob label='Призупинити логін' handleAction={handleStopPlayLogin}/>

        </div>
      </div>
      <div className=" w-[220px] sm:w-[420px]  mx-auto   shadow-zinc-900  shadow-lg  z-0 mt-2 sm:uppercase">
        <div className={ style.animationBorder}>
          <div className="text-lg font-semibold mb-2  text-gray-200 relative  p-[5px] rounded-md">Інформація про тариф <PaidOutlinedIcon className='absolute top-[-25px] z-[100] border-t-2 rounded-2xl left-[0%]'/></div>
          <p className="text-md mb-2 text-gray-200">Тариф:  <span className=' font-bold  text-h text-[12px]'>{user.tariff}</span></p>
          <p className="text-md mb-2 text-white ">Абонплата: <span className='font-bold text-[12px]'>{user.monthlyPayment} грн/міс</span> </p>
          <p className="text-md mb-2 text-white ">Наступне зняття через: <span className='font-bold text-[12px]'>{`${daysAndHoursUntilEndOfMonth().days} днів ${daysAndHoursUntilEndOfMonth().days} годин` } </span> </p>

        
        </div>
      </div>
      <div className=" w-[220px]  sm:w-[420px] mx-auto   shadow-zinc-900  shadow-lg  z-0 mt-2">
        <div className={ style.animationBorder}>
          
          <div className=" text-lg font-semibold mb-2   text-gray-200 relative  p-[5px] rounded-md  sm:uppercase">Інформація про сесію 
          <CompassCalibrationOutlinedIcon className='absolute top-[-25px] z-[100]  left-[0%] w-[300px]  border-t-2 rounded-2xl  mb-6'/>
          {/* <RotateLeftOutlinedIcon className=' cursor-pointer absolute top-[-16px] z-[100]  right-[0px] w-[300px]  border-t-2 rounded-2xl border-b-2   mb-6'/> */}

          </div>
          
        <div className=' sm:grid sm:grid-cols-2'>
          <p className="text-md mb-2 text-gray-200">Ip:  <span className=' font-bold  text-h text-[12px]'>{user.ip}</span></p>
          <p className="text-md mb-2 text-gray-200">Тривалість:  <span className=' font-bold  text-h text-[12px]'>{user.duration}</span></p>
          <p className="text-md mb-2 text-white ">Відправлено: <span className='font-bold text-[12px]'>{user.sendData} </span> </p>
          <p className="text-md mb-2 text-white ">Отримано: <span className='font-bold text-[12px]'>{user.sendData}</span> </p>
     </div>
        
        
        </div>
       
      </div>
      <div className=" w-[220px]  sm:w-[420px] mx-auto   shadow-zinc-900  shadow-lg  z-0 mt-2">

<div className={style.animationBorder}>
<div className=" text-lg font-semibold mb-2   text-gray-200 relative  p-[5px] rounded-md  sm:uppercase">
          <SettingsOutlinedIcon className='absolute top-[-25px] z-[100]  left-[0%] w-[300px]  border-t-2 rounded-2xl  mb-6'/>
          {/* <RotateLeftOutlinedIcon className=' cursor-pointer absolute top-[-16px] z-[100]  right-[0px] w-[300px]  border-t-2 rounded-2xl border-b-2   mb-6'/> */}

          </div>
<h2 className="text-xl font-bold mb-4 text-red-500">Керування логіном</h2>

   <div className=' grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 justify-center items-center ' >
   <GlasmorphizmButtonMob  handleAction={handleClearMac} label='Очистити MAC'/>
   <GlasmorphizmButtonMob handleAction={handleSetCredit} label='Встановити кредит'  />
   <GlasmorphizmButtonMob label='Додаткові послуги' handleAction={handleAddService} />
   <GlasmorphizmButtonMob label='Статична IP'/>

   
  
</div>
</div>
</div>
    </div>
    </div>

    <MacCreditDialog open={openDialogCredit} handleAction={showAllert} handleClose={()=>{setOpenDialogCredit(false)}}   />
     <AddService open={openDialogService} handleClose={()=>setOpenDialogService(false)}/>
     <StopPlayDialog open={openDialogStopPlay}   handleClose={()=>{setOpenDialogStopPlay(false)}} />
      </section>

  
  )
}
