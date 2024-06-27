import React from 'react'
import Cards from './Cards'
import Tablehai from '../AllTable/Tablehai'


const Maindash = () => {
  return (
    <div className='relative w-full flex flex-col justify-center items-center gap-[2rem] ' >
        <h1 className='text-4xl font-bold mt-[4rem]'>Dashboard</h1>
        <p className='-mt-6 text-red-400'>Click on Card👇</p>
        <Cards/>
        <Tablehai/>  
    </div>
  )
}

export default Maindash