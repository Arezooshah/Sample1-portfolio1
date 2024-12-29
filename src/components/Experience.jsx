import React from "react";
import ExprerienceItems from "./ExprerienceItems";
import PicTik from "../assets/images/tik.png";

// data
const Data = [
  { id: 1, pic: PicTik, title: "Html" },
  { id: 2, pic: PicTik, title: "Css" },
  { id: 3, pic: PicTik, title: "Tailwind" },
  { id: 4, pic: PicTik, title: "Javascript" },
  { id: 5, pic: PicTik, title: "Typescript" },
  { id: 6, pic: PicTik, title: "ReactJs" },
];

// dataBack

const dataBack = [
  { id: 1, pic: PicTik, title: "Nod.jd" },
  { id: 2, pic: PicTik, title: "Next" },
  { id: 3, pic: PicTik, title: "Nod.js" },
];
const Experience = () => {
  return (
    <div
      name="experience"
      className="gap-5 md:gap-10 p-5 md:p-32 text-center experience"
      // id="experience"
    >
      <div className="pt-2 text-gray-500 text-lg"> Explore my </div>
      <div className="py-5 font-bold text-5xl text-gray-900">Experience</div>
      <div className="gap-10 md:space-x-10 space-y-10 grid grid-cols-1 md:grid-cols-2 py-10">
        {/* part front */}
        <div className="py-20 p-10 rounded-3xl ring-1">
          <div className="py-5 font-bold text-3xl text-gray-900">
            Frontend Development
          </div>
          <div className="gap-2 grid grid-cols-2 md:grid-cols-3 py-10">
            {/* map */}
            {Data.map((item, index) => (
              <ExprerienceItems
                pic={item.pic}
                skill={item.title}
                key={index.id}
              />
            ))}
            {/*  before map !!!! */}
            {/* <div className="flex">
              <img src={PicTik} className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Html</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experiance
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Css</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Tailwind</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">
                  Javascript
                </div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">
                  Typescript
                </div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">ReactJs</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* part back */}

        <div className="m-0 py-20 p-10 rounded-3xl ring-1">
          <div className="py-5 font-bold text-3xl text-gray-900">
            Backend Development
          </div>
          <div className="gap-2 grid grid-cols-2 md:grid-cols-3 py-10">
            {/* map */}
            {dataBack.map((item, index) => (
              <ExprerienceItems
                pic={item.pic}
                skill={item.title}
                key={index.id}
              />
            ))}

            {/*end map */}

            {/* <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Nod.js</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Css</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">Tailwind</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">
                  Javascript
                </div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">
                  Typescript
                </div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div>
            <div className="flex">
              <img src="public\tik.png" className="h-8" />
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-2xl text-gray-900">ReactJs</div>
                <div className="font-semibold text-gray-600 text-xs">
                  Experience
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
