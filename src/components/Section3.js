import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
const Section3 =() => {
    return(
        <>
        
    <div className='bg-[#E8FBFF] lg:h-[254px] h-[154px] mb-20 flex items-center justify-center xl:gap-[589px] lg:gap-[189px] gap-9' >
        <p className='lg:text-[38px] text-base font-semibold leading-10 text-[#000000] '>Let Suppliers <span className='w-[159px] border-b-4 border-b-[#EB7150]'>Find You</span></p>
        <button className='lg:w-[216px] lg:h-[54px] w-[86px] h-[34px] rounded-md bg-[#EB7150] text-white font-bold lg:text-lg text-sm lg:leading-6 '>Get Verified</button>
    </div>
    <div className='flex items-center justify-center flex-col mb-20'>
        <p className='font-bold text-[38px] leading-[48px] text-[#222222] pb-10'>How it works?</p>
        <p className='font-normal lg:text-[18px] text-[#000000] text-center'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br /> potential buyers, and build successful business relationships, sharing valuable feedback.</p>
    </div>
        <div className='flex items-center justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mb-56">
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#E8FBFF] rounded-lg mx-auto">
                <img src={one} alt='one' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Select Your Role and <br/>Sign Up</p>
                </div>
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#FFFFFF] rounded-lg mx-auto">
                <img src={two} alt='two' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Buyers Post Your <br/>Requirements</p>
                </div>
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#E8FBFF] rounded-lg mx-auto">
                <img src={three} alt='three' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Review, Select, and <br/>Contact the Best Suppliers</p>
                </div>
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#FFFFFF] rounded-lg mx-auto">
                <img src={four} alt='four' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Suppliers Complete your<br/>profile and get notified for<br/>opportunities</p>
                </div>
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#E8FBFF] rounded-lg mx-auto">
                <img src={five} alt='five' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Contact to Buyers and Share<br/>your Quote for the service</p>
                </div>
                <div className="flex items-center justify-center flex-col w-full max-w-[400px] h-[254px] bg-[#FFFFFF] rounded-lg mx-auto">
                <img src={six} alt='six' />
                <p className='text-xl font-semibold text-[#000000] pt-6 text-center'>Both the Parties can Connect <br/>and Make Business Leave <br/>a Feedback</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Section3