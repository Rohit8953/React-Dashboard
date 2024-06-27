import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react'
import Animationcard from './Animationcard';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = ({title,barValue,value,png,color,series}) => {
  const Png=png;
  const[expand,setexpand]=useState(true);
   
  return (
    <motion.div className=''>
      { 
         expand?
         (
          <div className=' p-2 flex flex-1 relative h-[8rem] w-[14rem] rounded-md cursor-pointer text-white '
          style={{
            background : color.backGround,
            boxShadow : color.boxShadow
          }}
          onClick={()=>setexpand(false)}
          layoutId='expandableCard'
          >
             <div className='flex flex-col flex-1'>
                <CircularProgressbar 
                className='stroke-[white] stroke-[2px] [filter:drop-shadow(2px_4px_6px_white)]'
                value={barValue}
                text={`${barValue}%`}
                styles={{
                    
                    path: {
                        // Path color
                         stroke: `rgba(${barValue*5}, ${barValue*5}, ${barValue/5}, ${barValue*3})`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        // strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 2s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.05turn)',
                        transformOrigin: ' center',
                      },
                      
                      
                }}
                />
                <p className='font-bold'>{title}</p>
             </div>
             <div className='flex flex-col items-end pr-2 justify-around'>
                <Png/>
               <span className='font-bold'>${value}</span>
               <p className='-mb-1'>Last 24 hours</p>
             </div> 
          </div>
          
         )
         :
         (
          <div className=''>
            <Animationcard series={series} color={color} title={title} setexpand={setexpand}/>
          </div>
         )
      }
    </motion.div>
  )
}

export default Card