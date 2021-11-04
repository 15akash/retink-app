import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Retink from "../assets/retink.png";
import mailLogin from "../assets/mainLogin.png";
import Path from "../assets/Path.png";

function NavigationBar() {
  return (
    <nav className="flex bg-white filter drop-shadow-2xl shadow-xl">
      <div className="w-1/3 text-white px-15 mx-12 flex py-5">
        <img src={logo} alt="logo" className="mx-2 pl-1" />
        <img src={Retink} alt="text-logo" className="py-0.5" />
      </div>
      <div className="w-1/3 flex justify-evenly px-15 mx-10  text-center items-center text-comet-500 text-sm">
        <Link to={"/"} className="hover:bg-gray-50 p-5">
          Home
        </Link>
        <Link className="hover:bg-gray-50 p-5">Services</Link>
        <Link className=" hover:bg-gray-50 p-5">About us</Link>
      </div>
      <div className="w-1/3 flex justify-end px-20 my-2 py-2 ">
        <button className="bg-blue-600 hover:bg-blue-700 text-white flex font-bold text-base py-2 px-4 rounded shadow-xl ">
          <img src={mailLogin} alt="" className="pt-2.5" />
          <img src={Path} alt="" className="pr-3 pt-1" />
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
