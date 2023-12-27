import React, { useEffect, useState } from 'react'
import clases from "./NavigationBig.module.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/intelekt.png"
import { useLocation } from 'react-router-dom';

import minLogo from "../../assets/min-logo.png"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import useInfoStore from '../../store/infoStore';
 const user={
  name:"Безкоровайний Владислав Андрійович",
  uid:"140278",
  telegramId:"",
  phone:'380951470082',
  login:'vlad_b_1',
  adress:"Чернівці, Проспект Незалежності 116б кв 60",
  statusInternet:true,
  balance:"0",
  deposit:"0",
  dateOfEndCredits:"2023-12-15",
  tariff:"Заставнівський-300(274)_Internet+TV",

  subLogin:[
    {
      uid:"189209",
      login:"dorosh_ukr50",
    }
  ]

 }
export default function NavigationBig() {
  // const [activeItem,setActiveItem]=useState("Item1")
  const activeItem=useInfoStore(state=>state.activeItem)
  const setActiveItem=useInfoStore(state=>state.setActiveItem)




  const handleSwitchLogin=()=>{
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetActive=(item)=>{

setActiveItem(item)
  }
  return (
    <div  className=' ' >
     <div className={clases.bgImgM}></div>

      <div className={` shadow-md  shadow-zinc-800 transition-all translate-y-[0px] p-2 md:-translate-y-80 max-w-[360px]  max-h-[120px] bg-white   fixed z-[100]   left-[calc(100%/2-52px)]  sm:left-[calc(100%/2-58px)]   top-2  rounded-md `}>
        <img src={minLogo} width={'100px'} height={'100px'} className={`absolute  left-[26%] top-[-2px] z-50 `}  alt="" />
            <div className={` flex flex-col justify-center items-center  relative z-10   `}>
            <div className='p-2  z-50 text-center font-bold  cursor-pointer  uppercase hover:shadow-red-900  mx-2 shadow-none mt-10 text-xs'>Особистий  кабінет</div>
              <span className={'text-[11px] text-red-700 shadow-sm'}>
                {user.name}
              </span>
              <span className=' cursor-pointer font-bold text-gray-700 shadow-sm '>{user.login} </span>
              </div>
           
      </div>
      <div className={` ${clases.bgImg}`}>

</div>
    <div className={ '  transition-all duration-500 bg-slate-100 -translate-y-80 md:translate-y-[0px] relative -z-10 ' +' '+clases.navigation }>
      <img src={logo} width={210} height={200} className='  object-cover absolute left-[-23px] mt-8 -z-10  '/>
   

        <div className=' absolute font-bold  hidden 2xl:block  top-[90px] transition-all duration-500  left-0 uppercase text-white text-[10px]  2xl:top-[21px] 2xl:left-60 2xl:text-black '> 
        <span className={clases.spanText}> Особистий кабінет   </span>  </div>
      <ul>
        <li className={clases.list +' '+ `${activeItem=='Item1'? clases.active:''}`}
        onClick={()=>handleSetActive('Item1')}
        >
        <NavLink to={"/"}>
            <span className={clases.icon}><PermIdentityIcon fontSize='medium' /></span>
            <span className={clases.text}>Загальне</span>
        </NavLink>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item2'? clases.active:''}`}
         onClick={()=>handleSetActive('Item2')}
        >
            <NavLink to={"/payment"}>
            <span className={clases.icon}><PaidIcon fontSize='medium' /></span>
            <span className={clases.text}>Оплати</span>
            </NavLink>

        </li>
        <li className={clases.list +' '+ `${activeItem=='Item3'? clases.active:''}`}
         onClick={()=>handleSetActive('Item3')}
        >
             <NavLink to={"/info"}>
            <span className={clases.icon}><InfoIcon fontSize='medium' /></span>
            <span className={clases.text}>Додатково</span>
            </NavLink>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item4'? clases.active:''}`}
         onClick={()=>handleSetActive('Item4')}
        >
          
         <NavLink to={"/news"}>
            <span className={clases.icon}><NewspaperIcon fontSize='medium'  /></span>
            <span className={clases.text}>Новини </span>
          </NavLink>
        </li>
        <li className={clases.list +' '+ clases.logout }
        //  onClick={()=>handleSetActive('Item4')}
        >
            
          <a href="#">
            <span className={clases.icon}><LogoutIcon className=' hover:text-white' fontSize='medium' /></span>
            <span className={clases.text}>Вийти</span>
          </a>
        </li>
        {
          activeItem!='Item1'? <div className=' font-mono absolute font-bold top-[95px] right-[0px]  text-center transition-all duration-500 sm:hidden md:block  uppercase text-white 2xl:n 2xl:top-4  2xl:right-[60px] 2xl:text-black'>
        <div className={` flex flex-col items-center text-sm ${clases.spanTextB}`}>
          <span className=' text-[10px]  text-gray-800 text-inherit'>{user.name} </span>
          <div className=' '>
          <span className=' text-[10px] text-gray-800 font-bold text-inherit cursor-pointer' 
     id="basic-button"
     aria-controls={open ? 'basic-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}
    
    >{user.login}</span>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Якщо декілька логінів</MenuItem>
        <MenuItem onClick={handleClose}>Якщо декілька логінів</MenuItem>
        <MenuItem onClick={handleClose}>Якщо декілька логінів</MenuItem>
      </Menu>
      </div>
          </div>
          </div>
          :""
        }
       
        <div className={clases.indicator}></div>
      </ul>
        
    </div>
    </div>
  )
}
