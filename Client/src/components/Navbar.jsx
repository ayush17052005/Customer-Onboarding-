import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink,Link } from 'react-scroll';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [menu, setMenu] = useState('home');
  return (
    <nav className="bg-white bg-opacity-95 fixed w-full z-10 top-0 py-1 text-black">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">

        <div className=" text-lg font-semibold">
          TVS Credit
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div> 
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <li>
              <Link spy={true} smooth={true}  offset={-65} duration={400} to="home"  className=" block py-2 px-4">Home</Link>
            </li>
            <li>
              <Link spy={true} smooth={true} offset={-65} duration={400} to="loans" className=" block py-2 px-4 ">Products</Link>
            </li>
            <li>
              <Link spy={true} smooth={true} offset={-65} duration={400} to="chatbot" className=" block py-2 px-4">Chat bot</Link>
            </li>
            <li>
              <Link spy={true} smooth={true} offset={-65} duration={400} to="contact" className=" block py-2 px-4">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar




//  <div className="flex justify-between pt-3 pb-5 px-10 bg-gradient-to-b from-slate-200 to-slate-100">
//         <div className="logo h-10 w-20">
//           <img src={assets.logo} alt="logo" />
//         </div>
//         <nav className=''>
//           <ul className="nav flex justify-evenly gap-24 mt-4 text-xl ">
//             <li>
//           <Link activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-80}
//               duration={500}
//               onClick={() => setMenu("home")} className={menu == "home" ? 'border-b-2 border-black cursor-pointer py-2 px-3  ' : " cursor-pointer py-2 px-3 rounded-md hover:bg-slate-200"}
//           >
//               Home
            
//               </Link>
//             </li>
//             <li>
//           <Link activeClass="active"
//               to="loans"
//               spy={true}
//               smooth={true}
//               offset={-80}
//               duration={500}
//               onClick={() => setMenu("loan")} className={menu == "loan" ? 'border-b-2 border-black cursor-pointer py-2 px-3  ' : " cursor-pointer py-2 px-3 rounded-md hover:bg-slate-200"}
//           >
//                 Loans
//               </Link>
//             </li>
//             <li>
//             <Link
//               activeClass="active"
//               to="chatbot"
//               spy={true}
//               smooth={true}
//               offset={-80}
//               duration={500}
//               onClick={() => setMenu("chat-bot")} className={menu == "chat-bot" ? 'border-b-2 border-black cursor-pointer py-2 px-3  ' : " cursor-pointer py-2 px-3 rounded-md hover:bg-slate-200"}
//           >
//               Chatbot
//               </Link>
//               </li>
//             <li>
//             <Link
//                activeClass="active"
//                to="contact"
//                spy={true}
//                smooth={true}
//                offset={-80}
//                duration={500}
//               onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? 'border-b-2 border-black cursor-pointer  py-2 px-3 ' : " cursor-pointer py-2 px-3 rounded-md hover:bg-slate-200"}
//           >
//               Contact Us
//               </Link>
//               </li>
//         </ul>
//         </nav>
//         <div className="auth mt-2 text-lg">
//           <ul className='flex gap-5'>
//             <li className="px-3 py-1 bg-neutral-600 rounded-lg text-white hover:bg-gray-500 "><Link>Login</Link></li>
//             <li className="px-3 py-1 border-neutral-600 border-2 rounded-lg text-neutral-600 hover:bg-neutral-100"> <Link>Sign Up</Link></li>
//           </ul>
//           </div>
//           </div>
      