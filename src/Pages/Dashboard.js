import React,{useState} from 'react'
import stock from "../Images/stock.png"
import shipping from "../Images/shipping.png"
import TrueProfit from './TrueProfit'
import Graph from '../components/Graph';
import Badge from "../Images/badge.png"
import Options from '../components/Options';
import CardDisplay from '../components/CardDisplay';


// import LineChart from '../components/LineChart';


function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);
const [cards, setCards] = useState([]);



const optionData = {
  "Inventory Summary": [
    {
      heading: "IN-STOCK INVENTORY",
      paragraph1: "IN-STOCK SKUS",
      paragraph2: "IN-STOCK UNITS.",
      amount1:535,
      amount2:37368,
      imageURL: stock,
    },
    {
      heading: "INVENTORY VALUE",
      paragraph1: "RETAIL VALUE",
      paragraph2: "COST OF GOODS",
      amount1:970907.31,
      amount2:79374.42,
      imageURL: shipping,
    },
    {
      heading: "UNITS SHIPPED",
      paragraph1: "QUANTITY SHIPPED",
      paragraph2: "QUANTITY RETURNED",
      amount1:24651,
      amount2:445,
      imageURL: stock,
    },
    {
      heading: "COST OF GOODS SOLD",
      paragraph1: "UNIT COST",
      paragraph2: "INBOUND SHIPPING",
      amount1:-33804.27,
      amount2:-48.30,
      imageURL: shipping,
    },
  ],
  "Not Promoted": [
    {
      heading: "IN-STOCK INVENTORY",
      paragraph1: "IN-STOCK SKUS",
      paragraph2: "IN-STOCK UNITS.",
      amount1:535,
      amount2:37368,
      imageURL: stock,
    },
    {
      heading: "INVENTORY VALUE",
      paragraph1: "RETAIL VALUE",
      paragraph2: "COST OF GOODS",
      amount1:970907.31,
      amount2:79374.42,
      imageURL: shipping,
    },
    {
      heading: "UNITS SHIPPED",
      paragraph1: "QUANTITY SHIPPED",
      paragraph2: "QUANTITY RETURNED",
      amount1:24651,
      amount2:445,
      imageURL: stock,
    },
    {
      heading: "COST OF GOODS SOLD",
      paragraph1: "UNIT COST",
      paragraph2: "INBOUND SHIPPING",
      amount1:-33804.27,
      amount2:-48.30,
      imageURL: shipping,
    },
  ],
  "Best Performing": [
    {
      heading: "IN-STOCK INVENTORY",
      paragraph1: "IN-STOCK SKUS",
      paragraph2: "IN-STOCK UNITS.",
      amount1:535,
      amount2:37368,
      imageURL: stock,
    },
    {
      heading: "INVENTORY VALUE",
      paragraph1: "RETAIL VALUE",
      paragraph2: "COST OF GOODS",
      amount1:970907.31,
      amount2:79374.42,
      imageURL: shipping,
    },
    {
      heading: "UNITS SHIPPED",
      paragraph1: "QUANTITY SHIPPED",
      paragraph2: "QUANTITY RETURNED",
      amount1:24651,
      amount2:445,
      imageURL: stock,
    },
    {
      heading: "COST OF GOODS SOLD",
      paragraph1: "UNIT COST",
      paragraph2: "INBOUND SHIPPING",
      amount1:-33804.27,
      amount2:-48.30,
      imageURL: shipping,
    },
  ],
  "Worst Performing": [
    {
      heading: "IN-STOCK INVENTORY",
      paragraph1: "IN-STOCK SKUS",
      paragraph2: "IN-STOCK UNITS.",
      amount1:535,
      amount2:37368,
      imageURL: stock,
    },
    {
      heading: "INVENTORY VALUE",
      paragraph1: "RETAIL VALUE",
      paragraph2: "COST OF GOODS",
      amount1:970907.31,
      amount2:79374.42,
      imageURL: shipping,
    },
    {
      heading: "UNITS SHIPPED",
      paragraph1: "QUANTITY SHIPPED",
      paragraph2: "QUANTITY RETURNED",
      amount1:24651,
      amount2:445,
      imageURL: stock,
    },
    {
      heading: "COST OF GOODS SOLD",
      paragraph1: "UNIT COST",
      paragraph2: "INBOUND SHIPPING",
      amount1:-33804.27,
      amount2:-48.30,
      imageURL: shipping,
    },
  ],
}




const handleOptionClick = (option) => {
  setSelectedOption(option);
};


const renderCards = () =>{
const selectedData = optionData[selectedOption];

if (selectedData) {
  return selectedData.map((card, index) => (
    <div key={index} className="bg-white p-4 rounded shadow">
      <div className='flex justify-center'><img src={card.imageURL} alt="Card Image" className="w-10 h-10 mb-2" /></div>
      <h2 className="text-xl font-bold mb-2">{card.heading}</h2>
      <div className='flex items-center gap-2'>
        <div className='rounded-full h-3 w-3 bg-green-500'></div>
        <div className='flex justify-between gap-5'><p>{card.paragraph1}</p><p >{card.amount1}</p></div>
      </div>

      <div className='flex items-center gap-2'>
        <div className='rounded-full h-3 w-3 bg-pink-500'></div>
        <div className='flex justify-between gap-5'><p>{card.paragraph2}</p><p>{card.amount2}</p></div>
      </div>
    </div>
  ));
}
}



  return (
    <div className="flex flex-col">
    <div className="container bg-white mx-auto p-2 flex flex-row">
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

      </div>

  
         <Graph />
       

      
      </div>

      <div className="w-1/3 bg-white rounded-md shadow-md shadow-stone-400 mt-10 mr-20">
      <TrueProfit />
      </div>

    

      </div>


      <p className="text-center text-lg mt-5">AD AUTOMATION HIGHLIGHTS</p>
      <div className="mt-10 flex flex-row ml-20">
        

        <div className="p-3 bg-white shadow-lg shadow-stone-300 flex flex-row justify-center items-center gap-2">
        <img src={Badge} alt=""  className="max-h-10  mr-8"/>
        <div className="flex flex-col justify-center">
          <p>0</p>
          <p>New Campaigns Created</p>
        </div>
        </div>

        <div className="p-3 bg-white shadow-lg shadow-stone-300 flex flex-row justify-center items-center gap-2">
        <img src={Badge} alt=""  className="max-h-10 mr-8"/>
        <div className="flex flex-col justify-center">
          <p>27,621</p>
          <p>Bid Adjustments Made</p>
        </div>
        </div>

        <div className="p-3 bg-white shadow-lg shadow-stone-300 flex flex-row justify-center items-center gap-2">
        <img src={Badge} alt=""  className="max-h-10 mr-8"/>
        <div className="flex flex-col justify-center">
          <p>74</p>
          <p>New Targeting Discovered</p>
        </div>
        </div>

        <div className="p-3 bg-white shadow-lg shadow-stone-300 flex flex-row justify-center items-center gap-2">
        <img src={Badge} alt=""  className="max-h-10 mr-8"/>
        <div className="flex flex-col justify-center">
          <p>29</p>
          <p>Negative Targeting Created</p>
        </div>
        </div>


      </div>

      <div>
      <Options selectedOption={selectedOption} handleOptionClick={handleOptionClick} />
      <div className="flex justify-center mt-4 space-x-4">
        {renderCards()}
      </div>
      </div>



      </div>
  )
}

export default Dashboard