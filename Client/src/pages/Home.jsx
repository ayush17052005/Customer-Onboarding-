import React from 'react'
import Chatbot from './Chatbot'
import { assets } from '../assets/assets'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div className='bg-white flex w-screen h-screen flex-row justify-center '>

      <div className="flex w-fit h-screen flex-col justify-center items-center content-center  overflow-y-visible ">
        <div className="flex h-full w-full md:w-full mt-24 md:mt-56 justify-center items-center content-center tracking-tighter" >
      
        <div className="flex flex-col justify-center items-center text-center  ">
          
            <h1 className='md:text-7xl text-4xl md:w-[60%] mr-4 hover:scale-105 duration-300 transition-transform font-bold'>Empower Your Journey with <span className='text-green-600 md:text-7xl text-3xl font-semibold'>TVS <span className='text-black'>Credit </span></span> </h1>
          <p className=' w-[70%] md:max-w-[50%] text-md tracking-wide mt-5 '>From cities to villages,<span className="font-semibold text-xl"> TVS Credit </span>
            fuels your ambitions with tailored financial solutions.</p>
          <div className=" flex gap-10 ">
            <button type="button"  className="h-14 w-32 text-white bg-blue-700 hover:scale-95 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"><Link spy={true} smooth={true} offset={-65} duration={400} to="chatbot">Get Started</Link></button>
            <button type="button"  className="h-14 w-32 text-blue-700 border-2 border-blue-700 hover:scale-95 hover:border-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:border-blue-600 dark:hover:border-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"><Link spy={true} smooth={true} offset={-65} duration={400} to="chatbot">Inquiry Now</Link></button>
          </div>
            
        </div>
      
       
      </div>
        <div className="flex justify-center  item-center content-center  h-full  md:ml-7 ">
          <img className="hidden md:block  w-[40%] h-[40%] pt-10" src={assets.h3} alt="" />
          <img className="hover:scale-105 duration-300 w-[90%] h-[90%]" src={assets.Home_img} alt="img" />
          <img className='hidden md:block w-[40%] h-[40%] pt-10' src={assets.h1} alt="" />
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
