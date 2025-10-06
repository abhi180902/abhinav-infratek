import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar'

let router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar></Navbar>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App