import React from 'react'
import rocket from "../../assets/rocket.png"
import clases from "./GlasmorphizmCard.module.css";
export default function GlazmorphizmCard({tarriffList}) {
  return (
    <div className=' flex justify-center items-center min-h-[100%]  bg-red-600 bg-fixed  rounded-md  '>
    <div className={clases.container}>
   

   {
    tarriffList?.map((e,i)=>{
        return    <div className={clases.card} key={i}>
            <div className={clases.imgBx}>
                <img src={rocket} alt="" />
            </div>
            <div className={clases.content}>
                <div>
                    <h3>{e.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis voluptate culpa veritatis sed nobis molest</p>
                    <div className={clases.button}>Перейти</div>
                </div>

            </div>
        </div>
    })
   }
     
      
     
    </div>
    </div>
  )
}
