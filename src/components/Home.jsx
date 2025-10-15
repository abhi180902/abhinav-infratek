import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='auto'
        };
    },[showMobileMenu])
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo} alt="" />
          <ul className="hidden md:flex gap-7 text-white">
            <Link to="/" className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
            <Link to="/About" className="cursor-pointer hover:text-gray-400">
              About
            </Link>
            <Link to="/" className="cursor-pointer hover:text-gray-400">
              Projects
            </Link>
            <Link to="/" className="cursor-pointer hover:text-gray-400">
              Testimonials
            </Link>
          </ul>
          <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
            Sign up
          </button>
          <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
        </div>
        {/* -----------for mobile view-------- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className="flex justify-end p-6">
                <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className="w-6 cursor-pointer" alt="" />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                <Link onClick={()=>setShowMobileMenu(false)} to="/" className="px-4 py-2 rounded-full inline-block">Home</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="/" className="px-4 py-2 rounded-full inline-block">About</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="/" className="px-4 py-2 rounded-full inline-block">Projects</Link>
                <Link onClick={()=>setShowMobileMenu(false)} to="/" className="px-4 py-2 rounded-full inline-block">Testimonials</Link>
            </ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
