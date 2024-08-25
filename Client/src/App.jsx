import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
// import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Loan from './pages/Loan.jsx'
import Footer from './components/Footer.jsx'
import { Element } from 'react-scroll';
import Chatbot from './pages/Chatbot.jsx';
import ContactUs from './pages/ContactUs.jsx'
import Btn from './components/Btn.jsx'

function App() {
 
  return (
    <>
      <div className='app font-medium  overflow-hidden '>
        <div className="nav "> <Navbar/></div>
      
      <Element id="home" style={{ height: '100vh'}}>
        <Home/>
      </Element>
      <Element id="loans" style={{ height: '100vh'}}>
        <Loan/>
      </Element>
      <Element id="chatbot" style={{ height: '100vh' }}>
        <Chatbot/>
      </Element>
      <Element id="contact" style={{ height: '100vh' }}>
       <ContactUs/>
        </Element>
        
      </div>
      <Btn/>
      <Footer />
      
    </>
  )
}

export default App
