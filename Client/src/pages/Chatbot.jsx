import React from 'react'
import { assets } from '../assets/assets'

const Chatbot = () => {
  return (
    <div>
      <div className=" bg-white w-screen h-screen md:h-screen flex flex-col justify-normal gap-10 pt-14  md:px-40 ">
        

        <div className="py-14 m-5 bg-neutral-300 rounded-3xl relative overflow-hidden hover:scale-105 duration-200">
  <div className="topic text-xl md:text-5xl font-bold text-start px-16 md:px-24">
    CHAT BOT
  </div>

  <div className="body flex flex-col md:flex-row justify-evenly items-center content-center h-fit">
    <div className="content w-[70%] md:w-[40%] text-start text-lg md:text-2xl h-full">
      <div>
        <p>
          Our intelligent chatbot is here to guide you through every step of your journey, whether you’re exploring loan options, need help with the onboarding process, or have any inquiries. Let’s get started and discover how we can assist you today!
        </p>
      </div>

      <button type="button" className="h-16 w-40 text-white bg-blue-700 hover:scale-95 duration-300 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-xl text-2xl px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-7">
        Inquiry Now
      </button>
    </div>
    
            <div className="img md:flex md:justify-center hidden w-[35%] relative hover:scale-125 duration-300">
      <img className="-mt-16" src={assets.bot} alt="" />
    </div>
  </div>
</div>




      </div>
    </div>
  )
}

export default Chatbot
