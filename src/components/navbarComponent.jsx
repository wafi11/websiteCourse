import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavbarComponent = () => {
  const [nav, setNav] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeBackgroundColor);
  return (
    <div
      className={
        navbarColor
          ? "w-full flex justify-between items-center p-4 top-0 left-0 bg-white sticky z-99"
          : "w-full flex justify-between items-center p-4 top-0 left-0 fixed z-[99px]"
      }>
      <h1 className="text-3xl sm:text-4xl lg:text-3xl px-10 mx-1 py-2 font-bold text-purple-700">
        NgodingKuy.
      </h1>
      <div onClick={() => setNav(!nav)} className="flex items-center md:hidden">
        <div className="cursor-pointer border border-3 border-[#000] mr-4">
          <AiOutlineMenu size={30} className="p-1 " />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-screen bg-black z-10 duration-300 text-white hover:text-[#c6ffdd]"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-transparent z-10 duration-300"
        }>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h1 className="p-7 font-bold text-3xl sm:text:3xl lg:4xl text-purple-700 hover:text-[#c6ffdd] cursor-pointer">
          NgodingKuy.
        </h1>
        {navLinks.map((item) => {
          return (
            <div key={item.id} className="w-[100%] flex px-3 py-2">
              <NavLink
                to={item.path}
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "bold",
                    backgroundColor: isActive ? "#dc3545" : "#fbd786",
                    color: isActive ? "white" : "black",
                    paddingLeft: isActive ? "15px" : "10px",
                    paddingTop: isActive ? "10px" : "5px",
                    paddingBottom: isActive ? "10px" : "5px",
                    width: isActive ? "100vh" : "100%",
                    borderRadius: isActive ? "5px" : "5px",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                end>
                {item.text}
              </NavLink>
            </div>
          );
        })}
        <div className="pt-3 w-full font-bold justify-center text-center">
          <button className="bg-[#dc3545] rounded-xl w-[50%] py-2 ">
            Join With Us
          </button>
        </div>
      </div>

      <ul className="hidden md:flex ">
        {navLinks.map((item) => {
          return (
            <div className="flex px-4" key={item.id}>
              <NavLink
                to={item.path}
                style={({ isActive, isPending, IsTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "bold",
                    color: isActive ? "white" : "black",
                    viewTransitionName: IsTransitioning ? "slide" : "",
                    backgroundColor: isActive ? "#dc3545" : "",
                    padding: isActive ? "10px" : "10px",
                    textAlign: isActive ? "center" : "center",
                    alignItems: isPending ? "center" : "center",
                    borderRadius: isActive ? "5px" : "",
                  };
                }}
                end>
                {item.text}
              </NavLink>
            </div>
          );
        })}
      </ul>
      <div className="hidden md:flex border border-3 mr-10 text-[#dc3545]  border-[#dc3545] hover:bg-[#dc3545] hover:text-[#fff]">
        <button className="px-5 py-2 ">Join With Us</button>
      </div>
    </div>
  );
};

export default NavbarComponent;
