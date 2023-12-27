import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStore from '../../store/store'
import Navigation from '../../components/navigation/Navigation'
import { Box } from '@mui/material'
import Loader from '../../components/loader/Loader'
import NavigationBig from '../../components/navigation/NavigationBig'
import style from  "./Layout.module.css"
import CustomAlert from '../../components/alert/CustomAlert'
import {  useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useLocation } from 'react-router-dom';
import useInfoStore from '../../store/infoStore'

export default function Layout() {
  const [init, setInit] = useState(false);
  let location = useLocation();
  const setActiveItem=useInfoStore(state=>state.setActiveItem)

  React.useEffect(() => {
    switch (location.pathname){
      case "/":
        setActiveItem("Item1")
        break;
        case "/payment":
          setActiveItem("Item2")
          break;
          case "/info":
            setActiveItem("Item3")
            break;
            case "/news":
              setActiveItem("Item4")
              break;

    }
  
  }, [location]);


  const checkUser= useStore(store=>store.checkUser)
  const navigate=useNavigate()
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 70,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 7 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

useEffect(()=>{

  const fetchData = async () => {
    try {
    let flag=  await checkUser();
      if (!flag) {
      navigate("/login");
    }
    } catch (error) {
    console.log("помилка в Layout при перевірці чи користувач авторизований");
    }
  };
  fetchData()

},[])
  return (
    <div className='pt-0 '>
           <Loader/>
           <CustomAlert/>
      { init && <Particles
        id="tsparticleshexagon"
        className="ua-particles"
        url="hexagonPath.json"
        particlesLoaded={particlesLoaded}
        options={options}
      />}
    <div className='flex  gap-x-28 md:gap-x-0   '>
    <div className=' flex-shrink '>
    <Navigation  /> 
    <NavigationBig  />

    </div>
    <div className={`w-[360px] m-auto mt-[150px]   h-screen  mr-auto md:w-[896px]  sm:mr-auto md:mr-auto  xl:w-[1450px] xl:mr-auto  flex flex-col justify-start   items-center ${style.bigBg} `}>
    <Outlet/>
    </div>
    </div>

    </div>
  )
}
