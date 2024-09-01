import React from 'react'



const LoanCard = ({ items }) => {
  return (
     <div className="w-[70%] overflow-hidden relative ">
      <div className="flex space-x-5 overflow-x-auto no-scrollbar p-4 ">
        {items.map((item, index) => (
          <div key={index} className={`w-[80%] md:w-[32%] h-auto bg-gray-200 shadow-lg rounded-lg  flex-shrink-0 hover:scale-95 duration-300  ${item.secondaryBgColor}`}>
            <img className="h-72 w-full object-cover rounded-md mb-auto" src={item.imageUrl} alt={item.type} />
            <div className="md:p-8">
              <h3 className="text-lg font-semibold md:mb-2">{item.type}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
            </div>
            
        ))}
      </div>
    </div>
  );
};

export default LoanCard

  // < div ref = { horizontalRef } className = "h-full p-3 flex w-full overflow-x-auto overflow-y-hidden whitespace-nowrap" >
  //   <div className="flex space-x-4">
  //     {items.map((item, index) => (
  //       <div key={index} className="min-w-72 bg-gray-200 shadow-lg shadow-gray-300 rounded-lg p-4 my-5 inline-block">
  //         <img className="h-48" src={item.imageUrl} alt={item.type} />
  //         <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
  //         <p className="text-gray-600">{item.description}</p>
  //       </div>
  //     ))}
  //   </div>
  //       </ >
