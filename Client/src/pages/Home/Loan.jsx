import React from 'react';
import { useState} from 'react'
import {loans} from '../../assets/loans.js'
import LoanCard from '../../components/LoanCard.jsx';
import { assets } from '../../assets/assets.js';
const Loan = () => {

  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center  text-start h-full mt-32 ">
        
          <p className=" text-3xl md:text-4xl font-semibold text-gray-600 md:w-[70%] text-center">Discover a World of Financial Solutions Tailored Just for You</p>
        
        <div className="flex flex-col md:flex-row items-center content-center w-screen ">
        {/* <div className=" hidden md:block ">
          <img  src={assets.loan_img} alt="loan_img" />
        </div> */}
          <div className=" h-full p-3 flex w-full justify-center bg-"> 
            <LoanCard items={loans}/>
          </div>

        </div>
        
      </div>
    </>
  );
}


export default Loan
