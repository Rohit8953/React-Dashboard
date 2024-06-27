import React from 'react'
import { UpdatesData } from '../Components/data'

const Update = () => {
  return (
    <div className='mt-2 rounded-lg bg-white p-[1rem]  gap-[1rem] flex flex-col '>
        {
            UpdatesData.map((update,index)=>{
                return(
                    <div className='flex flex-row items-center  gap-2'>
                        <img src={update.img} className=' w-14 h-14' alt="" />
                        <div className='flex flex-col leading-[18px]'>
                           
                                <span className='font-semibold '>{update.name}</span>
                                <span>{update.noti}</span>
                                <span className='mt-3'>{update.time}</span>
                            
                        </div>
                    </div>
                )
            })
        } 
    </div>
  )
}

export default Update