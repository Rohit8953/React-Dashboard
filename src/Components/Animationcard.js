import React from 'react'
import { UilTimes} from '@iconscout/react-unicons'
// import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { motion } from 'framer-motion'

const Animationcard = ({series,setexpand,color,title}) => {

 const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-2T00:00:",
          "2018-09-3T01:30:",
          "2018-09-3T02:30:",
          "2018-09-4T03:30:",
          "2018-09-5T04:30:",
          "2018-09-6T05:30:",
          "2018-09-7T06:30:",
          "2018-09-8T07:30:",
          "2018-09-9T08:30:",
          "2018-09-10T09:30:",
          "2018-09-11T010:30:",
          "2018-09-12T011:30:",
          "2018-09-13T012:30:",
          "2018-09-14T013:30:",
          "2018-09-15T014:30:",
          "2018-09-16T015:30:",
          "2018-09-17T016:30:",
          "2018-09-18T017:30:",
        ],
      },
    },
  };
  
  return (
    <motion.div 
     className='absolute w-[100%] top-0 z-10 left-0 md:left-0 rounded-md flex flex-col items-center justify-between '
     style={{
        background:color.backGround,
        boxShadow:color.boxShadow,
     }}
     layoutId='expandableCard'
    >
        <div className='cursor-pointer text-white flex justify-end w-full'>
            <UilTimes onClick={()=>setexpand(true)} />
        </div>
        <span className='text-[white] text-[26px] font-bold [text-shadow:0px_0px_15px_white]'>{title}</span>
        <div className='w-[90%]'>
            <Chart series={series} type='area' options={data.options}/>
        </div>
        <span className='text-[16px] text-slate-100 mb-3'>Last 24 hours</span>
    </motion.div>
  )
}
export default Animationcard