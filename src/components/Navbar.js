import React from "react";
import Mauli from '../Images/Mauli.png'
function Navbar() {
  return (
    <nav className="bg-black p-4 w-60 min-h-screen">
      <div className="container mx-auto flex flex-col justify-between">
        <a href="/" className="text-white text-2xl font-semibold mb-5">
          <img src={Mauli} alt="Mauli" width="150px" height="auto" className="ml-5"></img>
        </a>

        <div className="space-x-2 block mb-5">
          <a href="/dashboard" className="text-white hover:underline text-lg">
            Dashboard
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="/login" className="text-white hover:underline text-lg">
            Login
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="/upload" className="text-white hover:underline text-lg">
            Upload
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="/campign" className="text-white hover:underline text-lg">
            Campign
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="/export" className="text-white hover:underline text-lg">
            Export
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Report 
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Tools 
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Connect 
          </a>
        </div>
        {/* <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Ppc manager 
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Autopilot 
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Dsp manager 
          </a>
        </div>
        <div className="space-x-4  mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Activity log 
          </a>
        </div>
        <div className="space-x-4 block mb-5">
          <a href="#" className="text-white hover:underline text-lg">
          Support
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
