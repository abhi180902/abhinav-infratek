import React from 'react'
import { Link,  Outlet } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul>
                <Link to="/" className='cursor-pointer hover:text-gray-400'>Home</Link>
                <Link to="/" className='cursor-pointer hover:text-gray-400'>About</Link>
                <Link to="/" className='cursor-pointer hover:text-gray-400'>Projects</Link>
                <Link to="/" className='cursor-pointer hover:text-gray-400'>Testimonials</Link>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Navbar