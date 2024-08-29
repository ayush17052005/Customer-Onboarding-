// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'



// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
    
//     <App />
    
//   </BrowserRouter>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'


import App from './App.jsx'
import Form from './pages/Form/Form.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "form",
        element: <Form />
      }
      

    ]
  }
])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Home />} />

//     </Route>
//   )
// )





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
