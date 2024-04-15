import React from 'react'
import CableIcon from '@mui/icons-material/Cable';
import BuildIcon from '@mui/icons-material/Build';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
const tasks=[
    {id:"1",type:"Підключення",avaible:true,startDate:"2024.01.30",endDate:"2024.02.30"},
    {id:"2",type:"Ремонт",avaible:false,startDate:"2024.01.30",endDate:"2024.02.30"},
    {id:"3",type:"Додаткові послуги",avaible:true,startDate:"2024.01.30",endDate:"2024.02.30"}
]
export default function MyTaskViewer() {
  return (
    <div>
        {tasks.map((e)=>{
            return <div key={e.id} className='flex flex-col items-center shadow-sm  border-b-2  '>
                <div className='relative top-1 right-[100px] font-bold text-xl'>{e.id}</div>
              {e.type==='Підключення'?<div><CableIcon/></div>:e.type==='Ремонт'?<div><BuildIcon/></div>:<div><BroadcastOnPersonalIcon/></div>}
                <div className=' uppercase text-gray-400'>{e.type}</div>
                <div>{e.avaible==true?'Виконано':"Не виконано"}</div>
                <div>Дата створення: {e.startDate}</div>
                {e.avaible==true? <div>Дата закриття: {e.startDate}</div>:""} 
            </div>
        })}
    </div>
  )
}
