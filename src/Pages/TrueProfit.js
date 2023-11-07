import React from "react";
import {FaInfoCircle} from "react-icons/fa"

const TrueProfit = () => {
  return (
    <div>
    <div className="flex justify-between border-2 px-4 py-4">
        <div className="">
          True Profit
        </div>

          <FaInfoCircle size={20}/>
  
    </div>

    <div className="px-4 py-4 border-2">

      
      <div className="flex justify-between bg-[#185B85] px-2 py-4 text-white">
        <div className="flex gap-2 items-center">
          Gross Revenue <FaInfoCircle size={20}/>
        </div>
        <div className="">
          $680,835.91
        </div>
      </div>
      
      <div className="flex justify-around gap-2 py-4">

        <div>
          <div>
            Total Sales          </div>
          <div>
 className="font-semibold"
            
$644,232.00          </div>
        </div>


        <div>
          <div>
            PPC Sales
          </div>
          <div className="flex gap-2 items-center font-semibold">
            $89,044.00 <FaInfoCircle size={20}/>
          </div>
        </div>

        <div>
          <div>
            True Organic Sales
          </div>
          <div className="flex gap-2 items-center font-semibold">
            $555,188.00 <FaInfoCircle size={20}/>
          </div>
        </div>
          <div></div>
      <table class="table-auto">
        <tbody>
          <tr>
            <td>Receipts</td>
            <td>$49,635.40</td>
            <td>7.29%</td>
          </tr>
          <tr>
            <td>Reimbursements</td>
            <td>$0.00</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Refunds</td>
            <td>-$13,031.49</td>
            <td>1.91%</td>
          </tr>
        </tbody>
      </table>

      
    </div>
    
</div>

</div>

  );
};

export default TrueProfit;
