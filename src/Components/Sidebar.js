import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import { SidebarData } from './data'
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {

    const[selected,setselected]=useState(0);

  return (
    <div className='flex flex-col items-center gap-[4rem]' >
        <div className='flex flex-row gap-[1rem] items-center p-2 mt-5'>
            <img src={logo} alt="" className='w-[3rem] h-[3rem]' />
            <span className='font-bold text-2xl'><span className='text-red-400'>S</span>h<span className=' text-red-400'>o</span>p</span>
        </div>
            
            <div className=' flex flex-col gap-8'>
              
                {
                  SidebarData.map((data,index)=>{
                    return (
                        <div  className={selected===index?'mr-5 flex before:content-[""] before:w-3 before:h-full before:bg-pink-400 before:rounded-[0.3rem] items-center  bg-orange-200 w-32 gap-2 h-10 hover:ml-5 relative [transition:all_300ms_ease] rounded-[0.3rem] text-[14px] hover:cursor-pointer'
                        : 
                        'flex flex-row  hover:cursor-pointer' }
                         key={index}                    
                         onClick={()=>setselected(index)}
                         >
                            {<data.icon/>}
                            <div>{data.heading}</div>
                        </div>       
                    )
                  })  
                }

            </div>

        <div className='inline-flex gap-1'>
          Sign Out <UilSignOutAlt/>
        </div>
      
    </div>
  )
}

export default Sidebar