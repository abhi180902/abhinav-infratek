import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Home";

const Header = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('/header_img.png')" }}
        id="Header"
      >
        <Home></Home>
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Explore homes that fit our dreams
          </h2>
          <div>
            <Link to="">Projects</Link>
            <Link to="">Contact Us</Link>
          </div>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Header;
