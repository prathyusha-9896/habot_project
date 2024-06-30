import React from 'react'
import logo from '../assets/logo.png';
import LinkedIn from '../assets/LinkedIn.png'
import Twitter from '../assets/Twitter.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
const Footer = () =>{
    return(
        <>
        <div className='hidden lg:block'>
        <div className='bg-[#123557] h-[232px] items-center justify-center flex flex-col'>
        <div className=' h-[155px] border-t-2 border-b-2 border-t-[#FFFFFF33] border-b-[#FFFFFF33] flex pl-12'>
            <div className='pt-16 pr-16'>
            <img src={logo} alt="Logo" className="" />
            <p className='text-[#FFFFFF]'>© R Singhania</p>
            </div>
            <div className='pt-6 lg:pr-20 pr-10 '>
                <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Company</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>About</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>FAQ</p>
            </div>
            <div className='pt-6 lg:pr-20 pr-10'>
                <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Terms</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>Data privacy</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>Terms</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>Accessibility</p>
            </div>
            <div className='pt-6 lg:pr-20 pr-10'>
                <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Related</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>Find Buyer</p>
                <p className='text-[#FFFFFF] font-light text-sm leading-6'>Feedback</p>
            </div>
            <div className='flex items-center justify-center gap-4 xl:ml-60 lg:ml-10 ml-3'>
            <img src={LinkedIn} alt='linkedin'/>
            <img src={Twitter} alt='linkedin'/>
            <img src={Facebook} alt='linkedin'/>
            <img src={Instagram} alt='linkedin'/>
            </div>
        </div>
    </div>
        </div>
        <div className='lg:hidden block'>
            <div className='bg-[#123557] h-[532px] items-center justify-center flex flex-col'>
                <div className=' h-[435px] w-[85%] border-t-2 border-b-2 border-t-[#FFFFFF33] border-b-[#FFFFFF33]'>
                    <div className='flex justify-center items-center'>
                    <div className='pt-16'>
                    <img src={logo} alt="Logo" className="" />
                    <p className='text-[#FFFFFF]'>© R Singhania</p>
                    </div>
                    </div>
                    <div className='flex justify-center items-center'>
                    <div className='pt-10 pr-10 '>
                        <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Company</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>About</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>FAQ</p>
                    </div>
                    <div className='pt-10 pr-10'>
                        <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Terms</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>Data privacy</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>Terms</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>Accessibility</p>
                    </div>
                    <div className='pt-10 '>
                        <p className='text-[#FFFFFF] font-bold text-sm leading-6'>Related</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>Find Buyer</p>
                        <p className='text-[#FFFFFF] font-light text-sm leading-6'>Feedback</p>
                    </div>
                    </div>
                    <div className='mt-12 flex items-center justify-center gap-4'>
                    <img src={LinkedIn} alt='linkedin'/>
                    <img src={Twitter} alt='linkedin'/>
                    <img src={Facebook} alt='linkedin'/>
                    <img src={Instagram} alt='linkedin'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer