import React from 'react'
import { Link } from 'react-router-dom'
import TrueProfit from './TrueProfit'

// import LineChart from '../components/LineChart';




function Dashboard() {

  const chartData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Users Gained',
        data: [100, 200, 300, 250, 400],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1, // Adjust the curve tension as needed
      },
    ],
  };
  
  
 
  
  
  return (
    <div className="container bg-white mx-auto p-2">
      <div className="flex flex-row">
      <div className="flex flex-col max-w-7xl p-6 bg-white rounded-md shadow-md shadow-stone-400 m-10 mr-20">
 

      <div className="flex flex-row gap-2">
      <div className="bg-[#157B7F] text-white shadow-md p-3 m-2">
        <p className="text-lg">$44,289.94</p>
        <p className="text-md">Total sales</p>
      </div>
      <div className="bg-[#185B85] text-white shadow-md p-3 m-2">
      <p className="text-lg">$44,289.94</p>
      <p className="text-md">Organic sales</p>
      </div> 
      <div className="bg-[#30840B] text-white shadow-md p-3 m-2">
      <p className="text-lg">$44,289.94</p>
      <p className="text-md"> Total Profits</p>
      </div>
      <div className="bg-[#7A4418] text-white shadow-md p-3 m-2">
      <p className="text-lg">$44,289.94</p>
      <p className="text-md"> Overall Margin </p>
      </div>
      <div className="bg-[#CDAD62] text-white shadow-md p-3 m-2">
      <p className="text-lg">$44,289.94</p>
      <p className="text-md"> Total ACoS </p>
      </div>
      </div>

      <div className="p-3 bg-white shadow-sm">
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-semibold mr-5">Profit Trends</p>
          <div className="flex flex-row mr-5">
          <div className="bg-[#185B85] text-white shadow-md p-2">
            Trend
          </div>
          <div className="bg-gray-300 shadow-md p-2">
            Compare
          </div>
          </div>

          <div className="flex flex-row mr-5">
          <div className="bg-white text-gray-400 shadow-md p-2 hover:bg-[#185B85] hover:text-white">
            Daily
          </div>
          <div className="bg-white text-gray-400 shadow-md p-2 hover:bg-[#185B85] hover:text-white">
            Weekly
          </div>
          <div className="bg-white text-gray-400 shadow-md p-2 hover:bg-[#185B85] hover:text-white">
           Monthly
          </div>
          </div>

          <div className="flex flex-row mr-2">
          <div className="bg-[#185B85] text-white shadow-md p-2">
            Options
          </div>
          <div className="bg-green-400 text-white shadow-md p-2">
            Download
          </div>
          </div>

         
        </div>

        {/* <div>
        <LineChart chartData={chartData} />
        </div> */}

      </div>

      
      </div>

      <div className="w-1/3 bg-white rounded-md shadow-md shadow-stone-400 mt-10 mr-20">
      <TrueProfit />
      </div>

      </div>

    </div>
  )
}

export default Dashboard