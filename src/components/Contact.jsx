import React from "react";
import PicLinkedin from "../assets/images/in.png";
import PicEmail from "../assets/images/email.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div name="contact" className="p-5 md:p-32 pb-0 text-center contact">
      <div className="text-gray-500 text-lg">to</div>
      <div className="font-bold text-5xl text-gray-900">Contact</div>
      <div className="justify-center items-center md:px-28 p-5 flax">
        {/* box */}
        <div className="flex md:flex-row flex-col md:justify-around gap-10 m-5 p-10 rounded-3xl">
          <div
            name="contact"
            className="flex justify-center items-center bg-orange-200 mx-auto p-4 rounded-3xl w-full h-full md:h-[50%] text-gray-800"
          >
            <form action="" className="flex flex-col w-full max-w-[600px]">
              <div className="pb-8">
                <p className="inline border-pink-700 border-b-4 font-bold text-4xl text-gray-700">
                  Contact
                </p>
                <p className="py-4 text-gray-700">
                  submit the form below or shoot me an email ...
                </p>
              </div>
              <input
                className="bg-orange-400 p-2 rounded-xl placeholder-gray-700"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="bg-orange-400 my-4 p-2 rounded-xl placeholder-gray-700"
                type="email"
                placeholder="Email"
                color="fff!important"
                name="email"
              />
              <textarea
                className="bg-orange-400 p-2 rounded-xl placeholder-gray-700"
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>
              <button className="flex items-center border-2 hover:border-pink-300 bg-orange-100 hover:bg-orange-300 mx-auto my-8 px-4 py-3 rounded-xl font-bold text-gray-700">
                Let's collaborate
              </button>
            </form>
          </div>

          {/* email & ... */}
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex justify-center items-center gap-3 bg-orange-200 p-14 rounded-3xl">
              <img src={PicEmail} className="h-5 md:h-10" />
              <Link
                to="mailto:arezooshahabi@gmail.com"
                className="text-semi-bold text-xl md:text-3xl hover:text-orange-700 transition hover:cursor-pointer"
              >
                arezooshahabi@gmail.com
              </Link>
            </div>
            <div className="flex justify-center items-center gap-3 bg-orange-200 p-14 rounded-3xl">
              <img src={PicLinkedin} sizes={60} className="h-5 md:h-10" />
              <Link
                to="http://linkedin.com/in/arezoo-shahabi"
                className="text-semi-bold text-xl md:text-2xl hover:text-orange-700 transition hover:cursor-pointer"
              >
                www.linkedin.com/in/arezoo-shahabi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
