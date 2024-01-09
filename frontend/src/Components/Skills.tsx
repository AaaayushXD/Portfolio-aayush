import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import React from "../assets/react.png";
// import { ImageSlider } from "./ImageSlider";
export const Skills = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full px-4 py-8"
      id="skills-section"
    >
      <div
        className="max-w-[1700px] px-2 py-10 flex flex-col gap-10 items-center w-full"
        style={{ zIndex: 2 }}
      >
        <div className="relative flex flex-col w-full">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] ">
            Skills
          </h2>
          <p className="text-sm text-[var(--grey-text)] py-3 px-2">
            These are the technologies I've worked with:
          </p>
          <div className="absolute border-b-4 border-[var(--primary-color)] w-[60px] left-[5px] bottom-[40px] "></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <div className=" flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] skill-section cursor-pointer w-full max-w-[250px]">
            <img
              src={Html}
              alt="Html"
              loading="lazy"
              className="max-h-[120px]"
            />
            <p className="text-xl font-bold tracking-wider">HTML</p>
          </div>
          <div className="flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] cursor-pointer skill-section w-full max-w-[250px]">
            <img
              src={Css}
              alt="Html"
              loading="lazy"
              className="max-h-[120px]"
            />
            <p className="text-xl font-bold tracking-wider">CSS</p>
          </div>
          <div className="flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] cursor-pointer skill-section w-full max-w-[250px]">
            <img src={Js} alt="Html" loading="lazy" className="max-h-[120px]" />
            <p className="text-xl font-bold tracking-wider">JavaScript</p>
          </div>
          <div className="flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] cursor-pointer skill-section w-full max-w-[250px]">
            <img
              src={React}
              alt="Html"
              loading="lazy"
              className="max-h-[120px]"
            />
            <p className="text-xl font-bold tracking-wider">React</p>
          </div>
          <div className="flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] cursor-pointer skill-section w-full max-w-[250px]">
            <img
              src={Css}
              alt="Html"
              loading="lazy"
              className="max-h-[120px]"
            />
            <p className="text-xl font-bold tracking-wider">CSS</p>
          </div>
          <div className="flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-xl hover:scale-[1.1] cursor-pointer skill-section w-full max-w-[250px]">
            <img
              src={Css}
              alt="Html"
              loading="lazy"
              className="max-h-[120px]"
            />
            <p className="text-xl font-bold tracking-wider">CSS</p>
          </div>
        </div>
        {/* <div className="w-full  h-[120px] skill-section px-4 "> */}
        {/* <ImageSlider /> */}
        {/* </div> */}
      </div>
    </div>
  );
};
