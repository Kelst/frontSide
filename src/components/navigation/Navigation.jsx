import React, { useState } from "react";
import clases from "./Navigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import useStore from "../../store/store";
import KeyboardTabOutlinedIcon from '@mui/icons-material/KeyboardTabOutlined';
import IconMenuGridO from "../icons/IconMenuGrid0";
import Loader from "../loader/Loader";
import ExitDialog from "../dialog/ExitDialog";

export default function Navigation() {

    const [active,setActive]=useState(false)
    const [activeItem, setActiveItem] = useState('Item1');
    const logOut=useStore(state=>state.logOut)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const navigate=useNavigate()
    const handleLogOuth = async ()=>{
        try {
            await logOut()
            navigate("/login")

        }
        catch (e){
              console.log('помилка виходу з акаунта');
        }

    }
    const handleActiveItemSelect=(item)=>{
        setActiveItem(item)
    }
    const handleActiveNavigation=()=>{
        setActive(ac=>!ac)
    }
    const handleActiveNavigationFromActive=()=>{
      setActive(false)
  }
  return (
    <div className="fixed left-0 z-30">
    <div className={`md:-translate-x-72    ${clases.sideBar}  ${active?clases.active:''}`}>
    <nav >
      <ul>
        <li className={`${clases.logo}     `}>
          <div     className={` cursor-pointer mt-5 flex transition-transform  duration-300 ease-in  transform ${
      active ? 'rotate-180 translate-x-36' : ''
    }`}   onClick={handleActiveNavigation}>
          {/* <KeyboardTabOutlinedIcon  className={active?'    ml-auto': `  `} /> */}
          <IconMenuGridO/>
          </div>
        </li>

        <div className={clases.menuList}>
          <li style={{'--bg': '#000'}}
          className={activeItem=='Item1'?clases.active:""}
          onClick={()=>{
            handleActiveNavigationFromActive()
            handleActiveItemSelect('Item1')}}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><PermIdentityIcon/></div>
              <div className={clases.text}>Загальне </div>
            </NavLink>
          </li>
          <li style={{'--bg': '#000'}}
                    className={activeItem=='Item2'?clases.active:""}
                    onClick={()=>{
                      handleActiveNavigationFromActive()
                      handleActiveItemSelect('Item2')}}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><PaidIcon/></div>
              <div className={clases.text}>Оплати</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#000'}}
                    className={activeItem=='Item3'?clases.active:""}
                    onClick={()=>{
                      handleActiveNavigationFromActive()
                      handleActiveItemSelect('Item3')}}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><InfoIcon/></div>
              <div className={clases.text}>Додатково</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#000'}} 
                    className={activeItem=='Item4'?clases.active:""}
                    onClick={()=>{
                      handleActiveNavigationFromActive()
                      handleActiveItemSelect('Item4')}}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><NewspaperIcon/></div>
              <div className={clases.text}>Новини</div>
            </NavLink>
          </li>
          

        </div>
        <div className={clases.bottom}>
            <li style={{'--bg': '#000'}} 
                      className={activeItem=='Item5'?clases.active:""}
                      onClick={()=>handleActiveItemSelect('Item5')}
            >
            <NavLink  onClick={()=>handleClickOpen()}>
              <div className={clases.icon}><LogoutIcon/></div>
              <div className={clases.text}>LogOut</div>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
    <ExitDialog open={open} handleClose={handleClose} handleLogOuth={handleLogOuth}/>
    </div></div>
  );
}
