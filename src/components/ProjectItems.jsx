import React from "react";

const ProjectItems = ({ pic, title }) => {
  return (
    <div className="flex flex-col gap-5 md:gap-10 bg-no-repeat p-5 md:p-10 rounded-3xl ring-1">
      <div
        style={{
          backgroundImage: `URL(${pic})`,
          height: "300px",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-bold text-2xl text-gray-900 md:text-4xl">
        {title}
      </div>
      <div className="space-x-5 grid grid-cols-2 px-10">
        <button className="hover:bg-gray-800 p-2 md:p-4 rounded-full ring-1 text-xl hover:text-white transition">
          Github
        </button>
        <button className="hover:bg-gray-800 p-2 md:p-4 rounded-full ring-1 text-xl hover:text-white transition">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItems;
