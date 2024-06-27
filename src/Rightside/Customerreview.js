import React from 'react'
import Chart from 'react-apexcharts'

const Customerreview = () => {

const data = {
       series: [
        {
          name: "Review",
          data: [10, 50, 30, 90, 40, 120, 100],
        },
        ],
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
              "2018-09-19T00:00:",
              "2018-09-19T01:30:",
              "2018-09-19T02:30:",
              "2018-09-19T03:30:",
              "2018-09-19T04:30:",
              "2018-09-19T05:30:",
              "2018-09-19T06:30:",
              "2018-09-19T07:30:",
              "2018-09-19T08:30:",
              "2018-09-19T09:30:",
              "2018-09-19T010:30:",
              "2018-09-19T011:30:",
              "2018-09-19T012:30:",
              "2018-09-19T013:30:",
              "2018-09-19T014:30:",
              "2018-09-19T015:30:",
              "2018-09-19T016:30:",
              "2018-09-19T017:30:",
            ],
          },
        },
      };

  return (
    <div className=' bg-orange-200 rounded-lg'>
         <Chart series={data.series} type='area' options={data.options}/> 
    </div>
  )
}

export default Customerreview