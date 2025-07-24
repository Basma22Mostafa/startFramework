import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'

function App() {
  let router=createBrowserRouter([
    {
      path:"",element:<Layout/> ,children:[
        {path:"",element:<Home/>},
        {path:"about",element:<About/>},
         {path:"portfolio",element:<Portfolio/>},
          {path:"contact",element:<Contact/>},
          {path:"*",element:<NotFound/>}

           

      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
