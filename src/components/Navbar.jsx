import React from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import logoWhite from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav
      id="topnav"
      className="flex justify-between items-center px-5 md:px-10"
    >
      {/* <h1 className="font-bold md:text-5xl tex-xl">Arezoo Shahabi</h1> */}
      {/* logo */}
      <div className="lg:col-span-3 text-center md:text-start">
        <Link to="#" className="text-[22px] focus:outline-none">
          <img
            src={logoWhite}
            className="mx-auto h-24 md:me-auto md:ms-0"
            alt=""
          />
        </Link>
      </div>
      {/* end logo */}

      <ul className="md:block md:flex md:gap-24 hidden">
        <a className="font-bold text-2xl hover:text-red-700 transition hover:cursor-pointer">
          HOME
        </a>
        <a className="font-bold text-2xl hover:text-red-700 transition hover:cursor-pointer">
          About
        </a>
        <a className="font-bold text-2xl hover:text-red-700 transition hover:cursor-pointer">
          EXPERIENCES
        </a>
        <a className="font-bold text-2xl hover:text-red-700 transition hover:cursor-pointer">
          PROJECTS
        </a>
        <a className="font-bold text-2xl hover:text-red-700 transition hover:cursor-pointer">
          CONTACT
        </a>
      </ul>
      <button className="block md:hidden hover:bg-gray-100 p-1 rounded-full">
        <FiAlignJustify size={40} />
      </button>
    </nav>
  );
};

export default Navbar;
