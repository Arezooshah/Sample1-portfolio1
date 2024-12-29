import React from "react";
import { Link } from "react-router-dom";

import logoWhite from "../assets/images/logoDark.png";

import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiFileText,
} from "../assets/icons/vander";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="border-slate-800 px-0 py-[30px] border-t">
        <div className="relative mx-44 text-center">
          <div className="items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">
            <div className="lg:col-span-3 text-center md:text-start">
              <Link to="#" className="text-[22px] focus:outline-none">
                <img
                  src={logoWhite}
                  className="mx-auto w-24 md:me-auto md:ms-0"
                  alt=""
                />
              </Link>
            </div>

            <div className="lg:col-span-5 mt-6 md:mt-0 text-center">
              <p className="mb-0 text-gray-400">
                Copyright © {new Date().getFullYear()} Marfa 2024 MARFA .All
                Rights Reserved <i className="text-red-600 mdi mdi-heart"></i>{" "}
                by{" "}
                <Link
                  to="http://localhost:5175//"
                  target="_blank"
                  className="text-reset"
                >
                  arezooshahabi
                </Link>
                .
              </p>
            </div>

            <ul className="space-x-1 lg:col-span-4 mt-6 md:mt-0 text-center md:text-end list-none">
              <li className="inline">
                <Link
                  to="http://linkedin.com/in/arezoo-shahabi"
                  target="_blank"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiLinkedin className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  to="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiFacebook className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  to="https://www.instagram.com/marfa.taktik/"
                  target="_blank"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiInstagram className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  to="https://twitter.com/arezooshah"
                  target="_blank"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiTwitter className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  to="mailto:arezooshahabi@gmail.com"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiMail className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
