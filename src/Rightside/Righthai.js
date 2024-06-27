import React from 'react'
import Update from './Update'
import Customerreview from './Customerreview'

const Righthai = () => {
  return (
    <div className='flex flex-col justify-evenly '>
        <div>
           <h3 className='text-2xl font-semibold -mt-1'>Update</h3> 
           <Update/>
        </div>
        <div>
           <h3 className='mt-5 text-2xl font-semibold mb-5'>Customer Review</h3>
            <Customerreview/>
        </div>
    </div>
  )
}

export default Righthai