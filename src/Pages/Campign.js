import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../Images/badge.png"

function Campign() {
  return (
    <div className="container bg-white mx-auto p-2">
      <div className="flex flex-col max-w-7xl p-6 bg-white rounded-lg shadow-lg shadow-stone-400 m-10 mr-20">
        <div className="flex flex-row gap-2">
          <button className="p-4 bg-green-400 rounded-lg mr-4 font-semibold">
            Create Campign
          </button>
          <Link to="/autopilot">
            <button className="p-4 bg-green-400 rounded-lg mr-4 font-semibold">
              Autopilot
            </button>
          </Link>
        </div>

        <table className="w-full border-collapse border self-center mt-10 text-center">
          <thead>
            <tr>
              <th className="border border-slate-700 p-2">Campaign Name</th>
              <th className="border border-slate-700 p-2">Actions</th>
              <th className="border border-slate-700 p-2">Autopilot</th>
              <th className="border border-slate-700 p-2">Intelli Score</th>
              <th className="border border-slate-700 p-2">Targeting</th>
              <th className="border border-slate-700 p-2">Daily Budget</th>
              <th className="border border-slate-700 p-2">Spend</th>
              <th className="border border-slate-700 p-2">Units</th>
              <th className="border border-slate-700 p-2">Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700">hvrkjrekmybvehrntk</td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Manual</td>
              <td className="border border-slate-700">$50.00</td>
              <td className="border border-slate-700">$410.00</td>
              <td className="border border-slate-700">$430.00</td>
              <td className="border border-slate-700">$500.00</td>
            </tr>
            <tr>
              <td className="border border-slate-700">bjrjktkymymmu</td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Automatic</td>
              <td className="border border-slate-700">$50.00</td>
              <td className="border border-slate-700">$510.00</td>
              <td className="border border-slate-700">$430.00</td>
              <td className="border border-slate-700">$700.00</td>
            </tr>
            <tr>
              <td className="border border-slate-700">hvrbbthynm</td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Manual</td>
              <td className="border border-slate-700">$50.00</td>
              <td className="border border-slate-700">$490.00</td>
              <td className="border border-slate-700">$530.00</td>
              <td className="border border-slate-700">$500.00</td>
            </tr>
            <tr>
              <td className="border border-slate-700">nnnrhtjkykk</td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Manual</td>
              <td className="border border-slate-700">$50.00</td>
              <td className="border border-slate-700">$500.00</td>
              <td className="border border-slate-700">$630.00</td>
              <td className="border border-slate-700">$500.00</td>
            </tr>
            <tr>
              <td className="border border-slate-700">vdnrnmtky </td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Automatic</td>
              <td className="border border-slate-700">$100.00</td>
              <td className="border border-slate-700">$410.00</td>
              <td className="border border-slate-700">$700.00</td>
              <td className="border border-slate-700">$400.00</td>
            </tr>
            <tr>
              <td className="border border-slate-700">pklbegry</td>
              <td className="border border-slate-700">
                <input type="checkbox"></input>
              </td>
              <td className="border border-slate-700 tetx-center">
                <img src={Badge} alt=""  className="max-h-10 ml-6"/>
              </td>
              <td className="border border-slate-700">
                <div class="w-48 h-3 relative rounded-md overflow-hidden ml-5">
                  <div class="h-full w-full absolute z-0 bg-gradient-to-r from-red-500 via-orange-500 to-violet-500"></div>
                </div>
              </td>
              <td className="border border-slate-700">Manual</td>
              <td className="border border-slate-700">$80.00</td>
              <td className="border border-slate-700">$710.00</td>
              <td className="border border-slate-700">$500.00</td>
              <td className="border border-slate-700">$600.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Campign;