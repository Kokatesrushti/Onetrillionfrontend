import React from "react";
import { FaInfoCircle } from "react-icons/fa"

const TrueProfit = () => {
  return (
    <div>
      <div className="flex justify-between border-t-2 border-l-2 border-r-2 px-4 py-4">
        <div className="font-semibold">
          True Profit
        </div> 
        <FaInfoCircle size={20} style={{ color: '#2664eb' }}/>

      </div>

      <div className="px-4 py-4 border-2">


        <div className="flex justify-between bg-[#76bbdd] px-2 py-4 text-white">
          <div className="flex gap-2 items-center font-semibold">
            Gross Revenue <FaInfoCircle size={20} />
          </div>
          <div className="">
            $680,835.91
          </div>
        </div>

        <div className="flex justify-around gap-2 py-4">

          <div>
            <div>
              Total Sales
            </div>
            <div className="font-semibold">
              $644,232.00
            </div>
          </div>


          <div>
            <div>
              PPC Sales
            </div>
            <div className="flex gap-2 items-center font-semibold">
              $89,044.00 <FaInfoCircle size={20} />
            </div>
          </div>

          <div>
            <div>
              True Organic Sales
            </div>
            <div className="flex gap-2 items-center font-semibold">
              $555,188.00 <FaInfoCircle size={20} />
            </div>
          </div>
        </div>

        <table className="w-full">

          <tbody>

            <tr className="w-full bg-[#f1dcef]">
              <td className="w-2/5">Receipts</td>
              <td className="w-1/5 text-right">$49,635.40</td>
              <td className="w-1/5 text-right">7.29%</td>
            </tr>

            <tr>
              <td>Reimbursements</td>
              <td className="text-right">$0.00</td>
              <td className="text-right">0%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td>Refunds</td>
              <td className="text-right">-$13,031.49</td>
              <td className="text-right">1.91%</td>
            </tr>

          </tbody>
        </table>

        <div className="flex justify-between bg-[#76bbdd] px-2 py-4 text-white">
          <div className="flex gap-2 items-center font-semibold">
            Costs <FaInfoCircle size={20} />
          </div>
          <div className="">
            $313,410.56
          </div>
        </div>

        <table className="w-full">
          <tbody>

            <tr className="w-full">
              <td className="w-2/5">FBA Fees</td>
              <td className="w-1/5 text-right">$138,735.16</td>
              <td className="w-1/5 text-right">44.27%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td>Commission</td>
              <td className="text-right">$89,651.03</td>
              <td className="text-right">28.6%</td>
            </tr>

            <tr>
              <td>Promotions</td>
              <td className="text-right">$6,112.98</td>
              <td className="text-right">1.95%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td className="flex items-center gap-2">Tax <FaInfoCircle size={16} /></td>
              <td className="text-right">$36,457.94</td>
              <td className="text-right">11.63%</td>
            </tr>

            <tr>
              <td>Cost of Goods</td>
              <td className="text-right">$33,804.27</td>
              <td className="text-right">10.79%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td>Inbound Shipping</td>
              <td className="text-right">$48.30</td>
              <td className="text-right">0.02%</td>
            </tr>

            <tr>
              <td className="">Outbound Shipping</td>
              <td className="text-right">$41.80</td>
              <td className="text-right">0.01%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td>Unclassified Shipping</td>
              <td className="text-right">$0.00</td>
              <td className="text-right">0%</td>
            </tr>

            <tr>
              <td>PPC Spend</td>
              <td className="text-right">$8,016.47</td>
              <td className="text-right">2.56%</td>
            </tr>

            <tr className="bg-[#f1dcef]">
              <td>Other</td>
              <td className="text-right">$542.61</td>
              <td className="text-right">0.17%</td>
            </tr>

          </tbody>
        </table>

        <div className="flex justify-between bg-[#76bbdd] px-2 py-4 text-white">
          <div className="flex gap-2 items-center font-semibold">
            Profit <FaInfoCircle size={20} />
          </div>
          <div className="">
            $367,425.35
          </div>
        </div>

      </div>

    </div>

  );
};

export default TrueProfit;
