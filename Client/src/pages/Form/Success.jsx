import React from 'react'


const Success = ({ formData }) => {
  return (
    <div class="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 class="text-5xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Success!</h2>
      <p class="text-3xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Thank you for submitting your information. Here’s what you submitted:</p>
      <ul>
        <li className="text-xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Name: {formData.name}</li>
        {/* <li className="text-xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Email: {formData.email}</li>
        <li className="text-xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Phone: {formData.phone}</li> */}
        <li className="text-xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Loan Type: {formData.loanType}</li>
      </ul>
    </div>
  );
};


export default Success
