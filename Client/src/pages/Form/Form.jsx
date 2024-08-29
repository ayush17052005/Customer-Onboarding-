import React from 'react'
import { useNavigate } from 'react-router-dom';
import Multipage from './Multipage';

const form = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
  return (
    <div >
      <div className="h-14 items-center flex justify-start border-b-2 px-5 py-3 gap-5">
        <div className=" text-lg font-semibold"> 
          TVS Credit
        </div>
      </div>
      
      <div className=" w-screen h-full  text-black my-5 md:flex justify-start">
        <button onClick={handleButtonClick} className="m-5 ml-10 bg-blue-500 py-2 px-3 md:h-14 md:w-48 rounded-lg text-white">← Back to Home</button>
        <div className="w-screen flex justify-center">
          <div className="h-[82vh] w-[80%] md:w-[100%] md:mx-48 mx-5 rounded-3xl  md:p-5"><Multipage/></div>
        </div>
        
        </div>
    </div>
  )
}

export default form
