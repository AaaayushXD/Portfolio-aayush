import { Github, Link } from "lucide-react";
import F1Project from "../assets/f1-project.png";
import Html from "../assets/html.png";

export const Projects = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-[1700px] h-full flex gap-8 w-full px-4 py-5 items-center flex-col">
          <div className="relative flex flex-col w-full">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] ">
              Projects
            </h2>
            <p className="text-sm text-[var(--grey-text)] py-3 px-2">
              Here are some of my recent projects.
            </p>
            <div className="absolute border-b-4 border-[var(--primary-color)] w-[80px] left-[5px] bottom-[40px] "></div>
          </div>
          <div className="grid grid-cols-1 w-full gap-8 text-[var(--grey-text)]">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center px-6 py-2 overflow-hidden gap-8 gr">
              <div className="shadow-md relative hover:scale-[1.025]">
                <img
                  src={F1Project}
                  alt="f1 project"
                  className="bg-center bg-cover bg-no-repeat max-h-[450px] rounded-md "
                />
                <div className="absolute w-full h-full top-0 left-0 bg-[#3e3e3e54] hover:bg-transparent rounded-md"></div>
              </div>
              <div className=" h-full flex gap-5 flex-col items-center justify-center text-left w-full md:px-8">
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
                  destination for all your question regarding F1. It consist of
                  all player ranking, team ranking and schedule related to the
                  current season.
                </p>
                <p className="w-full text-left flex flex-col gap-3 flex-wrap">
                  Technologies used:
                  <span>
                    <img src={Html} alt="html" className="max-h-[30px]" />
                  </span>
                </p>
                <p className="w-full text-left flex flex-col gap-2">
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

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center px-6 py-2 overflow-hidden gap-8 gr">
              <div className=" h-full flex gap-5 flex-col items-center justify-center text-left w-full md:px-10">
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
                  destination for all your question regarding F1. It consist of
                  all player ranking, team ranking and schedule related to the
                  current season.
                </p>
                <p className="w-full text-left flex flex-col gap-3 flex-wrap">
                  Technologies used:
                  <span>
                    <img src={Html} alt="html" className="max-h-[30px]" />
                  </span>
                </p>
                <p className="w-full text-left flex flex-col gap-2">
                  Demo:
                  <span className="text-[var(--text-primary)]">
                    id: demo@gmail.com
                  </span>
                  <span className="text-[var(--text-primary)]">
                    Password: demo123
                  </span>
                </p>
              </div>
              <div className="shadow-md relative hover:scale-[1.025]">
                <img
                  src={F1Project}
                  alt="f1 project"
                  className="bg-center bg-cover bg-no-repeat max-h-[450px] rounded-md "
                />
                <div className="absolute w-full h-full top-0 left-0 bg-[#3e3e3e54] hover:bg-transparent rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
