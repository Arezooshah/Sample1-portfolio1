import React from "react";
import ProjectItems from "./ProjectItems";
import WorkImg from "../assets/images/freepik/16.avif";
import WorkImg2 from "../assets/images/freepik/9.avif";
import WorkImg3 from "../assets/images/freepik/14.avif";
import WorkImg4 from "../assets/images/freepik/12.avif";
import WorkImg5 from "../assets/images/freepik/8.avif";
import WorkImg6 from "../assets/images/freepik/36.avif";

// data
const data = [
  { id: 1, pic: WorkImg, title: "Project 1" },
  { id: 2, pic: WorkImg2, title: "Project 2" },
  { id: 3, pic: WorkImg3, title: "Project 3" },
  { id: 4, pic: WorkImg4, title: "Project 4" },
  { id: 5, pic: WorkImg5, title: "Project 5" },
  { id: 6, pic: WorkImg6, title: "Project 6" },
];

export default function Project() {
  return (
    <div name="project" className="p-5 md:p-32 text-center project">
      <div className="pt-2 text-gray-500 text-lg">Browse my recent</div>
      <div className="py-5 font-bold text-5xl text-gray-900">projects</div>
      <div className="gap-3 md:gap-5 grid grid-cols-1 md:grid-cols-3 md:py-10 p-10">
        {/* map */}
        {data.map((item, index) => (
          <div>
            {<ProjectItems pic={item.pic} title={item.title} key={index.id} />}
          </div>
        ))}
        {/* map end */}

        {/* <ProjectItems pic={WorkImg} title="Project 1" />
        <ProjectItems pic={WorkImg2} title="Project 2" />
        <ProjectItems pic={WorkImg3} title="Project 3" />
        <ProjectItems pic={WorkImg4} title="Project 4" />
        <ProjectItems pic={WorkImg5} title="Project 5" />
        <ProjectItems pic={WorkImg6} title="Project 6" /> */}
      </div>
    </div>
  );
}
