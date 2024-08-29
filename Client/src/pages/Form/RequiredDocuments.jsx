import React from 'react'

const RequiredDocuments = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div class="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 class="text-3xl mt-10 font-bold tracking-tight text-gray-900 leading-tight text-center">Required Documents</h2>
      <form onSubmit={nextStep} className="mx-5 px-10 py-5 md:mx-32 md:my-10 md:px-32 md:py-0  flex flex-col gap-10 ">
        <div>
          <label>Upload Documents</label>
          <input class="mt-2 p-2 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600" type="file" name="documents" onChange={handleChange} multiple required />
        </div>
        <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out" type="button" onClick={prevStep}>Back</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ease-in-out" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequiredDocuments
