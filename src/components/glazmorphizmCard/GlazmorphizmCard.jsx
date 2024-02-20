import React from 'react'
import rocket from "../../assets/rocket.png"
import clases from "./GlasmorphizmCard.module.css";
function extractInfo(obj) {
    // Витягаємо необхідні властивості з об'єкта
    const { month_fee, name } = obj;
    
    // Розбиваємо рядок з іменем, щоб отримати потрібні значення
    const [, spead, fee] = name.match(/-(\d+)\((\d+)\)_/);
    
    // Повертаємо новий об'єкт з витягнутими значеннями
    return {
        fee: parseInt(fee),
        spead: parseInt(spead)
    };
}
export default function GlazmorphizmCard({tarriffList,tariff}) {

    const sortedTariffList = [...tarriffList.filter(e => e.name === tariff), ...tarriffList.filter(e => e.name !== tariff)];

  return (
    <div className=' flex justify-center items-center min-h-[100%]  bg-red-600 bg-fixed  rounded-md  '>
    <div className={clases.container}>
   

   {

sortedTariffList?.map((e,i)=>{
        
        return   <div className={e.name === tariff ? `${clases.card} ${clases.actives}` : clases.card} key={i}>

            <div className={clases.imgBx}>
                <img src={rocket} alt="" />
                <div className={clases.output}>
    <span className={clases.data}>{extractInfo(e).spead} мБіт/сек</span> <span className={clases.price}>{extractInfo(e).fee} грн/міс</span>
</div>
            </div>
            <div className={clases.content}>
                <div>
                    <h3>{e.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis voluptate culpa veritatis sed nobis molest</p>
                    {
                        e.name === tariff? <button type="button" className="mt-2 text-white bg-gradient-to-r tracking-widest from-red-400 via-red-500 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ваш тарифний план</button>: <button className=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden hover:text-white text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-yellow-200 group-hover:text-white group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-white focus:ring-4 focus:outline-none focus:color-white focus:ring-red-100 dark:focus:ring-red-400">
                        <span className=" tracking-widest relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Підключити
                        </span>
                        </button>
                    }
                  
                </div>

            </div>
        </div>
    })
   }
     
      
     
    </div>
    </div>
  )
}
