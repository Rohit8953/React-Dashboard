import React from 'react'
import { cardsData } from './data'
import Card from './Card'

const Cards = () => {
  return (
    <div className='relative flex gap-5 sm:gap-12 flex-wrap justify-center'>
       {
        cardsData.map((carddata,index)=>{
            return(
               <div className=' ' key={index}>
                    <Card
                     id={index}
                     title={carddata.title}
                     color={carddata.color}
                     barValue={carddata.barValue}
                     value={carddata.value}
                     png={carddata.png}
                     series={carddata.series}
                    />
               </div>
            )
        })
       }
    </div>
  )
}

export default Cards