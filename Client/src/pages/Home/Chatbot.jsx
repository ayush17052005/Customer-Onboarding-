import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import Bot from '../../components/Bot'

const Chatbot = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
  <div>
    <div className=" bg-white w-screen h-screen md:h-screen flex flex-col justify-normal gap-10 pt-14  md:px-40 ">
        

        <div className="py-14 m-5 bg-neutral-300 rounded-3xl  overflow-auto no-scrollbar">
          <div className="">
            <div className="topic text-xl md:text-5xl font-bold text-start px-16 md:px-24">
              CHAT BOT
            </div>
          </div>
          

          <div className="body flex flex-col md:flex-row justify-evenly items-center content-center h-fit">
            <div className="content w-[70%] md:w-[40%] text-start text-lg md:text-auto h-auto gap-10 flex flex-col">
              <div>
                <p>
                  Our intelligent chatbot is here to guide you through every step of your journey, whether you’re exploring loan options, need help with the onboarding process, or have any inquiries. Let’s get started and discover how we can assist you today!
                </p>
              </div>
              <div className={`h-1  `}>
                <button
                  onClick={toggleWebchat}
                  className=" bg-blue-600 text-white py-2 px-4 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Open Chatbot
                </button>
                <Bot isWebchatOpen={isWebchatOpen} toggleWebchat={toggleWebchat} />
              </div> 
            </div>
            
            <div className="img md:flex md:justify-center hidden w-[35%]  ">
              <img className="" src={assets.bot} alt="" />
            </div>
          </div>
      </div>




    </div>
  </div>
  )
}

export default Chatbot
