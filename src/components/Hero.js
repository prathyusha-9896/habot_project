import React from 'react';
import hero from '../assets/hero.png'; // Adjust the path as necessary
import suitcase from '../assets/suitcase.png';
import location from '../assets/location.png';
export default function Hero() {
  return (
    <>
<div className="relative h-screen overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center top-10"
    style={{
      backgroundImage: `url(${hero})`, // Use template string to set the background image URL
      // Adjust the top position to move the image down
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(7,47,87,0.75)] via-transparent to-[rgba(7,47,87,0.75)]"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,47,87,0.45)] via-[rgba(7,47,87,0.45)] to-[rgba(7,47,87,0.45)]"></div>
  </div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 lg:px-0">
    <h1 className="text-white text-[35px] lg:text-[55px] font-bold text-center leading-tight mb-6 mt-20">Are You a Supplier?</h1>
    <p className="text-white text-[20px] lg:text-[55px] font-normal text-center mb-16">Explore Matching Opportunities.</p>
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Email Input Box */}
      <div className="relative flex items-center">
        <img src={suitcase} alt="Suitcase Icon" className="h-6 w-6 absolute left-4" />
        <input
          type="email"
          className="w-full lg:w-96 h-16 px-4 py-2 pl-12 border border-gray-300 rounded-md focus:outline-none  "
          placeholder="Search your required service here"
        />
      </div>

      {/* Location Input Box */}
      <div className="relative flex items-center">
        <img src={location} alt="Location Icon" className="h-6 w-6 absolute left-4" />
        <input
          type="text"
          className="w-full lg:w-96 h-16 px-4 py-2 pl-12 border rounded-md border-gray-300 focus:outline-none "
          placeholder="Search your desired location here"
        />
      </div>

      {/* Search Button */}
      <button className="w-full lg:w-32 h-16 bg-green-600 text-white font-bold rounded-md focus:outline-none">
        Search
      </button>
    </div>
    <h1 className="text-white text-[18px] font-bold text-center leading-[27px] pt-6">
      Are you a buyer? <span className="text-white text-[18px] font-normal text-center underline underline-offset-2">Click here if you are looking to post a requirement</span>
    </h1>
  </div>
</div>

    </>
    
  );
}
