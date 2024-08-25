import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="text-[#d9d9d9] bg-[#323232] overflow-hidden flex flex-col items-center gap-8 py-5 px-[8vw] pt-[80px]">
      <div className="w-[100%] flex flex-col md:flex-row justify-between gap-[80px]">
        <div className="left w-[95%] md:w-[35%] flex flex-col items-start gap-5">
          <p className='text-4xl'>TVS Credit</p>
          <p>TVS Credit is a financial services company dedicated to meeting the diverse financial requirements of rural India. Offering a comprehensive range of loan products, the company is committed to overcoming the unique challenges faced by customers in smaller towns, especially those with limited or no credit history.</p>
          <div className="flex justify-between gap-5 ">
            <img className='hover:scale-105' src={assets.facebook_icon} alt="" />
            <img className='hover:scale-105' src={assets.twitter_icon} alt="" />
            <img className='hover:scale-105' src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center flex flex-col items-start gap-5 cursor-pointer">
          <h2 className='text-2xl font-semibold'>COMPANY</h2>
          <ul>
              <li>Home</li>
              <li>Services</li>
            <li>About Us</li>
            
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right flex flex-col items-start gap-5 cursor-pointer">
            <h2 className='text-2xl font-semibold' >GET IN TOUCH</h2>
          <ul>
            <li>+91 9657-348-232</li>
            <li>contact@tvsCredit.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-[100%] h-[2px] bg-gray-400 border-none'/>
        <p className="">Copyright 2024 © tvscredit.com - All Right Reserved</p>
      </div>
    </div>
  )
}


export default Footer
