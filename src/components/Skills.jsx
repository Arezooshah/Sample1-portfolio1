import React from "react";
import html from "../assets/skillpic/html1.png";
import css from "../assets/skillpic/css.png";
import react from "../assets/skillpic/react.png";
import js from "../assets/skillpic/js (2).png";
import ts from "../assets/skillpic/ts.png";
import t from "../assets/skillpic/t.png";
import vite from "../assets/skillpic/vite.jpg";
import node from "../assets/skillpic/node.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-white w-full h-screen text-gray-800">
      {/* Container */}
      <div className="flex flex-col justify-center mx-auto p-4 w-full max-w-[1000px] h-full">
        <div>
          <p className="inline border-pink-400 border-b-4 font-bold text-4xl">
            Skills
          </p>
          <p className="py-6">
            // These are the technologies I've worked with{" "}
          </p>
        </div>
        <div className="gap-4 grid grid-cols-3 sm:grid-cols-4 py-8 w-full text-center">
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={html} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20 h-20" src={css} alt="css" />
            <p className="my-4">css</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20 h-20" src={js} alt="js" />
            <p className="my-4">js</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20 h-20" src={ts} alt="Ts" />
            <p className="my-4">Ts</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={vite} alt="vite" />
            <p className="my-4">vite</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20 h-20" src={node} alt="node" />
            <p className="my-4">node</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20" src={react} alt="react" />
            <p className="my-4">react</p>
          </div>
          <div className="shadow shadow-[#040c16] duration-500 hover:scale-110">
            <img className="mx-auto w-20 h-20" src={t} alt="t" />
            <p className="my-4">t</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
