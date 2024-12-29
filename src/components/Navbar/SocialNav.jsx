import React from "react";
import { FiDribbble, FiLinkedin, FiGithub } from "../../assets/icons/vander";
import { Link } from "react-router-dom";

const SocialNav = () => {
  return (
    <div>
      <ul className="space-x-1 mb-0 list-none buy-button">
        <li className="inline mb-0">
          <Link
            to=""
            className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
          >
            <FiDribbble className="w-[14px] h-[14px] align-middle" />
          </Link>
        </li>
        <li className="inline mb-0">
          <Link
            to=""
            className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
          >
            <FiLinkedin className="w-[14px] h-[14px] align-middle" />
          </Link>
        </li>
        <li className="inline mb-0">
          <Link
            to=""
            className="inline-flex justify-center items-center border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 border rounded-xl w-8 h-8 text-[15px] text-center text-white tracking-wide duration-500 align-middle"
          >
            <FiGithub className="w-[14px] h-[14px] align-middle" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialNav;
