import { Github, Link } from "lucide-react";
import F1Project from "../assets/f1-project.png";
import Html from "../assets/html.png";

export const Projects = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="max-w-[1700px] h-full flex gap-10 w-full px-4 py-10 items-center flex-col">
          <div className="relative flex flex-col w-full">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] ">
              Projects
            </h2>
            <p className="text-sm text-[var(--grey-text)] py-3 px-2">
              Here are some of my recent projects.
            </p>
            <div className="absolute border-b-4 border-[var(--primary-color)] w-[80px] left-[5px] bottom-[40px] "></div>
          </div>

          <div className="grid grid-cols-1 w-full gap-10 text-[var(--grey-text)] pt-6 pb-10">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </>
  );
};

export const Project: React.FC = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-around gap-10 px-6 py-2 overflow-hidden md:flex-row ">
        <div className=" hover:scale-[1.025] flex justify-center items-center basis-1/2 ">
          <div className="relative cursor-pointer">
            <img
              src={F1Project}
              alt="f1 project"
              className="bg-center bg-cover bg-no-repeat max-h-[450px] rounded-md "
            />
            <div className="absolute w-full h-full top-0 left-0 bg-[#3e3e3e54] hover:bg-transparent rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 text-left md:px-8 basis-1/2">
          <div className=" w-full  text-[var(--primary-color)] font-bold pt-4 tracking-wider flex items-center gap-5">
            <h4 className="text-3xl">F1 App</h4>

            <span className="flex gap-3">
              <span className="text-[var(--grey-text)] flex items-center cursor-pointer hover:text-[var(--hover-color)] ">
                <Link size={20} />
              </span>
              <span className="text-[var(--grey-text)] flex items-center  cursor-pointer hover:text-[var(--hover-color)]">
                <Github size={20} />
              </span>
            </span>
          </div>

          <p className="text-sm ">
            It is an ultimate app built for F1 enthusiast. It is one-stop
            destination for all your question regarding F1. It consist of all
            player ranking, team ranking and schedule related to the current
            season.
          </p>
          <p className="flex flex-col flex-wrap w-full gap-3 text-left">
            Technologies used:
            <span>
              <img src={Html} alt="html" className="max-h-[30px]" />
            </span>
          </p>
          <p className="flex flex-col w-full gap-2 text-left">
            Demo:
            <span className="text-[var(--text-primary)]">
              id: demo@gmail.com
            </span>
            <span className="text-[var(--text-primary)]">
              Password: demo123
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
