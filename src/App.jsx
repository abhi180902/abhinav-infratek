import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'

let router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Header></Header>
      }
    ]
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