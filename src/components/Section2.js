import React, {useState} from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import video from '../assets/video.png'
import youtubelogo from '../assets/youtubelogo.png'
import tick from '../assets/tick.png'
const Section2 = () => {
    const [activeTab, setActiveTab] = useState('buyer'); // State to track active tab

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    return(
        <>
<div className="flex flex-col lg:flex-row justify-center items-center bg-[#FFFFFF] px-4 lg:px-[165px] py-20 space-y-10 lg:space-y-0 lg:space-x-28">
  {/* Left Side */}
  <div className="max-w-[541px] text-center lg:text-left">
    <p className="font-bold text-3xl leading-10 mb-4">Ready to dive into HABOT?</p>
    <p className="font-light text-base leading-7">
      Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
      Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the
      first step towards realizing your entrepreneurial dreams.
    </p>
    <button className="mt-10 p-3 flex justify-center items-center w-[315px] h-12 bg-green-600 text-white font-bold rounded-md border border-green-600 focus:outline-none hover:bg-white hover:text-green-600 transition duration-300 ease-out">
      Sign up Today! <span className='fill-white pl-16'><HiOutlineArrowLongRight size={'36'} className='fill-white hover:fill-green-600' />
      </span>
    </button>
  </div>

  {/* Right Side */}
  <div className="flex flex-wrap justify-center gap-4 lg:gap-4">
    {/* First Row */}
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Abu Dhabi
    </div>
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Dubai
    </div>
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Sharjah & Ajman
    </div>

    {/* Second Row */}
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Fujairah
    </div>
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Ras Al Khaimah
    </div>
    <div className="w-full lg:w-[260px] h-[65px] font-medium text-lg flex justify-center items-center bg-white border border-solid border-[#E7760D] rounded-md">
      Umm Al Quwain
    </div>
  </div>
</div>

<div>
  <div className="flex justify-center items-center bg-white px-6 lg:px-10 pb-20">
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#072F57] rounded-md w-full max-w-[1316px] h-auto lg:h-[623px] py-10 lg:py-0">
      {/* Left Side (Image and YouTube Logo) */}
      <div className="relative mx-4 lg:mx-12 mb-10 lg:mb-0">
        {/* Image */}
        <img
          src={video} // Replace with your image URL
          alt="Placeholder"
          className="w-full max-w-[540px] lg:max-w-[640px] h-auto rounded-md"
        />
        {/* YouTube Logo */}
        <img
          src={youtubelogo}
          alt="YouTube Logo"
          className="absolute w-[67px] h-[45px] lg:w-[106.29px] lg:h-[75.22px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')} // Replace the URL with your actual YouTube video link
        />
      </div>

      {/* Right Side (Tabs and Content) */}
      <div className="flex flex-col items-center lg:items-start p-4 lg:p-8">
        {/* Tabs */}
        <div className="flex space-x-8 mb-6">
          {/* Buyer Tab */}
          <div className='h-[47px] items-center justify-center flex bg-transparent'>
            <button
              className={`px-6 py-3 items-center justify-center flex font-bold text-[26px] ${
                activeTab === 'buyer' ? 'text-[#EB7150] border-b-[#EB7150] border-b-4' : 'text-[#FFFFFF] border-none'
              }`}
              onClick={() => handleTabChange('buyer')}
            >
              Buyer
            </button>
          </div>
          {/* Supplier Tab */}
          <div className='h-[47px] items-center justify-center flex bg-transparent'>
            <button
              className={`px-6 py-3 items-center justify-center flex font-bold text-[26px] ${
                activeTab === 'supplier' ? 'text-[#EB7150] border-b-[#EB7150] border-b-4' : 'text-[#FFFFFF] border-none'
              }`}
              onClick={() => handleTabChange('supplier')}
            >
              Supplier
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'buyer' && (
          <div className="text-white w-full lg:w-auto h-[156px] lg:h-[156px]">
            <div className="list-disc lg:space-y-4 space-y-2">
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg font-medium lg:leading-10 pl-4'>Post your requirements.</p>
              </div>
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg font-medium lg:leading-10 pl-4'>Sit back for multiple suppliers to contact you.</p>
              </div>
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg font-medium lg:leading-10 pl-4'>Choose among the suppliers based on the ratings and reviews.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'supplier' && (
          <div className="text-white w-full lg:w-auto h-[156px] lg:h-[156px]">
            <div className="list-disc space-y-4">
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg  font-medium lg:leading-10 pl-4'>Complete your profile and get verified.</p>
              </div>
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg font-medium lg:leading-10 pl-4'>Select service tags for relevant opportunities.</p>
              </div>
              <div className='flex items-center'>
                <img src={tick} alt="Tick Icon" className="lg:w-5 lg:h-5" />
                <p className='text-sm lg:text-lg font-medium lg:leading-10 pl-4'>Reach out to buyers and expand your business.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Section2