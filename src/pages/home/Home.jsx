import React, { useState } from 'react'
import style from  "./Home.module.css"
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import GlasmorphizmButton from '../../components/button/glasmorphizm/GlasmorphizmButton';
import MacCreditDialog from '../../components/dialog/MacCreditDialog';
import useInfoStore from '../../store/infoStore';
import AddService from '../../components/dialog/AddService';
import StopPlayDialog from '../../components/dialog/StopPlayDialog';
import GlasmorphizmButtonMob from '../../components/button/glasmorphizm/GlasmorphizmButtonMob';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { daysAndHoursUntilEndOfMonth, extractInfoFromString } from '../../tools/tools';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import EditPhone from '../../components/dialog/EditPhone';
import TariffDialog from '../../components/dialog/TariffDialog';
import { NavLink } from 'react-router-dom';

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
  tariff:"ЧЕРНІВЦІ-КОМФОРТ-1000(309)_Internet+TV",
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
,
tariffAvaibles:[
    {month_fee:180,name:"ЧЕРНІВЦІ-КОМФОРТ-300(180)_Internet"},
    {month_fee:207,name:"ЧЕРНІВЦІ-КОМФОРТ-300(207)_Internet+TV"},
    {month_fee:190,name:"ЧЕРНІВЦІ-КОМФОРТ-500(190)_Internet"},
    {month_fee:213,name:"ЧЕРНІВЦІ-КОМФОРТ-500(213)_Internet+TV"},
    {month_fee:350,name:"ЧЕРНІВЦІ-КОМФОРТ-1000(350)_Internet"},
    {month_fee:309,name:"ЧЕРНІВЦІ-КОМФОРТ-1000(309)_Internet+TV"},
    ]

 }
export default function Home() {
const [openDialogCredit,setOpenDialogCredit]=useState(false)
const [openDialogService,setOpenDialogService]=useState(false)
const [openDialogStopPlay,setOpenDialogStopPlay]=useState(false)
const [openDialogEditPhone,setOpenDialogEditPhone]=useState(false)
const [openDialogTariff,setOpenDialogTariff]=useState(false)


const setLoader=useInfoStore(state=>state.setLoader) 
const showAllert=useInfoStore(state=>state.showAllert) 


function handleStopPlayLogin(){
 
  setOpenDialogStopPlay(true)

}
function handleEditPhone(){
 
  setOpenDialogEditPhone(true)

}
function handleClearMac(){

   showAllert(2,"Mac очищено")

}
function handleSetCredit(){

  setOpenDialogCredit(true)
   showAllert(2,"Кредит на 5 днів встановлено")
}
function handleAddService(){
setOpenDialogService(true)
}
function handleStaticIp(){

}

function handleDisplayTariff(){
  setOpenDialogTariff(true)
}




//

  return (
      <section >

    <div className=' hidden lg:block relative z-10'>
    <div className=" text-white  flex items-center justify-center rounded-lg">
      <div className="container mx-auto p-8 bg-white   opacity-95 text-black rounded-md shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-red-500">{user.name}</h1>
          <p className="text-gray-600">Логін: {user.login}</p>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
          <div className={"bg-black p-6 rounded-md shadow-md" +" "+ style.animationBorder}>
            <h2 className="text-xl font-bold mb-4 text-red-500">Основна інформація</h2>
           
           <div className='flex  items-center  justify-start  mb-2'> <p className="text-gray-300">Телефон: {user.phone}</p> 
            <IconButton aria-label="edited" className='mb-2' onClick={handleEditPhone} >
        <ModeEditOutlineTwoToneIcon className=' text-gray-300 '  fontSize='small'/>
      </IconButton>
      </div>
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
          <p className="text-gray-300 mb-2">Місячна оплата: {user.monthlyPayment} грн.
          <NavLink to={"/payment"}> 
<div  className={  style.animationBorderSM + ` cursor-pointer relative inline-flex items-center justify-center p-4 px-2 py-1 ml-1 overflow-hidden font-medium   transition duration-300 ease-out border-2 group`}>
<span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full  group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full tracking-widest	  text-white transition-all duration-300 transform group-hover:translate-x-full ease">оплатити</span>
<span className="relative invisible">Button Text</span>
</div>
</NavLink>
          </p>
          
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
           <GlasmorphizmButton handleAction={handleDisplayTariff}  label='Тарифні плани'/>
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
          <NavLink to={"/payment"}> 
<div  className={  style.animationBorderSM + ` mb-2 cursor-pointer relative inline-flex items-center justify-center p-4 px-2 py-1 ml-1 overflow-hidden font-medium   transition duration-300 ease-out border-2 group`}>
<span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full  group-hover:translate-x-0 ease">
<svg className="w-6 h-6  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full tracking-widest	 text-sm text-white transition-all duration-300 transform group-hover:translate-x-full ease">оплатити</span>
<span className="relative invisible">Button Text</span>
</div>
</NavLink>
          <p className="text-md mb-2 text-white ">Наступне зняття через: </p>
          <div className="grid grid-flow-col  gap-x-5 text-center auto-cols-max">
  <div className={"flex flex-col p-1 bg-neutral rounded-box text-neutral-content text-white  text-md"+" "+style.animationBorderSM}>
    <span className="countdown  text-md justify-center items-center">
      <span style={{"--value":daysAndHoursUntilEndOfMonth().days}}>{daysAndHoursUntilEndOfMonth().days}</span>
    </span>
    days
  </div> 
  <div className={"flex flex-col justify-center items-center p-1 bg-neutral rounded-box text-neutral-content text-white text-md"+" "+style.animationBorderSM}>
    <span className="countdown  text-md ">
      <span  style={{"--value":daysAndHoursUntilEndOfMonth().hours}}>{daysAndHoursUntilEndOfMonth().hours}</span>
    </span>
    hours
  </div> 
</div>

        
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

          </div>
<h2 className="text-xl font-bold mb-4 text-red-500">Керування логіном</h2>

   <div className=' grid grid-cols-1 gap-2 gap-y-4 sm:grid-cols-2 justify-center items-center ' >
   <GlasmorphizmButtonMob  handleAction={handleClearMac} label='Очистити MAC'/>
   <GlasmorphizmButtonMob handleAction={handleSetCredit} label='Встановити кредит'  />
   <GlasmorphizmButtonMob label='Додаткові послуги' handleAction={handleAddService} />
   <GlasmorphizmButtonMob label='Статична IP'/>
   <GlasmorphizmButtonMob  handleAction={handleDisplayTariff}   label='Тарифні плани'/>

   
  
</div>
</div>
</div>
    </div>
    </div>

     <MacCreditDialog open={openDialogCredit} handleAction={showAllert} handleClose={()=>{setOpenDialogCredit(false)}}   />
     <AddService open={openDialogService} handleClose={()=>setOpenDialogService(false)}/>
     <StopPlayDialog open={openDialogStopPlay}   handleClose={()=>{setOpenDialogStopPlay(false)}} />
     <EditPhone open={openDialogEditPhone} handleClose={()=>{setOpenDialogEditPhone(false)}}/>
     <TariffDialog open={openDialogTariff} tariff={user.tariff} handleClose={()=>{setOpenDialogTariff(false)}} tarriffList={user.tariffAvaibles}/>
      </section>

  
  )
}
