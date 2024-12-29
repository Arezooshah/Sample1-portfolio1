import React from "react";
import pic2 from "../assets/images/pic/ar1.avif";
import git from "../assets/images/git1.jfif";
import linkedin from "../assets/images/link.png";

const About = () => {
  return (
    <div
      name="about"
      className="items-center md:px-32 py-10 p-20 text-center about"
    >
      <div className="pt-2 text-gray-500 text-lg">Get to now</div>
      <div className="py-5 font-bold text-5xl text-gray-900">About me</div>
      <div className="flex md:flex-row flex-col md:justify-start md:items-center gap-5 md:gap-10 py-10">
        <img
          src={pic2}
          className="mx-auto rounded-xl w-[500px] md:h-[400px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-10 md:px-32 p-5">
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center gap-3 p-10 rounded-lg ring-1">
              <img src={git} size={40} className="h-20" alt="" />
              <div className="font-bold text-3xl text-gray-900">Education</div>
              <div className="font-semibold text-gray-600 text-xl">
                3 Years Diploma
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-10 rounded-lg ring-1">
              <img src={linkedin} className="h-20" alt="" />
              <div className="font-bold text-3xl text-gray-900">Experience</div>
              <div className="font-semibold text-gray-600 text-xl">
                3 Years Diploma
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div>
          </div>

          <div className="text-2xl text-gray-600 text-start text">
            Im arezoo shahabi. I have been working as a programmer for three
            years. I worked in react and typescript, tailwind project. I would
            like to work with a stronger and more professional team. Remote work
            is my first priority. Good luck to everyone Im arezoo shahabi. I
            have been working as a programmer for three years. I worked in react
            and typescript, tailwind project. I would like to work with a
            stronger and more professional team. Remote work is my first
            priority. Good luck to everyone Im arezoo shahabi. I have been
            working as a programmer for three years. I worked in react and
            typescript, tailwind project. I would like to work with a stronger
            and more professional team. Remote work is my first priority. Good
            luck to everyone
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
