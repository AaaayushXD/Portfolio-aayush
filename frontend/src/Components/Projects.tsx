import { Github, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { getDataFromDataBase } from "../firebase/database";

export const Projects = () => {
  return (
    <>
      <div
        className="flex items-center justify-center w-full h-full"
        id="project-section"
      >
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
          </div>
        </div>
      </div>
    </>
  );
};

interface ProjectDetail {
  name: string;
  url: string;
  description: string;
  demoLink: string;
  githubLink: string;
  demoId: string;
  demoPassword: string;
}
export const Project: React.FC = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>();

  const fetchData = async () => {
    const response = await getDataFromDataBase("projects");
    setProjects(response.data as ProjectDetail[]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {projects &&
        projects.map((project, index) => {
          return (
            <div
              className={
                index % 2 !== 0
                  ? "flex flex-col-reverse items-center justify-around gap-10 px-6 py-2 overflow-hidden md:flex-row-reverse "
                  : "flex flex-col-reverse items-center justify-around gap-10 px-6 py-2 overflow-hidden md:flex-row"
              }
              key={index}
            >
              <div className=" hover:scale-[1.025] flex justify-center items-center basis-1/2 transition-all delay-100 duration-500 ease-in-out">
                <div className="relative cursor-pointer">
                  <img
                    src={project.url}
                    alt={project.name}
                    className="bg-center bg-cover bg-no-repeat max-h-[450px] rounded-md "
                  />
                  <div className="absolute w-full h-full top-0 left-0 bg-[#3e3e3e54] hover:bg-transparent rounded-md"></div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full gap-5 text-left md:px-8 basis-1/2">
                <div className=" w-full  text-[var(--primary-color)] font-bold pt-4 tracking-wider flex items-center gap-5">
                  <h4 className="text-3xl">{project.name}</h4>

                  <span className="flex gap-3">
                    <a
                      href={project.demoLink}
                      className="text-[var(--grey-text)] flex items-center cursor-pointer hover:text-[var(--hover-color)] "
                    >
                      <Link size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="text-[var(--grey-text)] flex items-center  cursor-pointer hover:text-[var(--hover-color)]"
                    >
                      <Github size={20} />
                    </a>
                  </span>
                </div>

                <p className="pb-6 text-sm">{project.description}</p>

                <p className="flex flex-col w-full gap-2 text-left">
                  Demo:
                  <span className="text-[var(--text-primary)]">
                    id: {project.demoId}
                  </span>
                  <span className="text-[var(--text-primary)]">
                    Password: {project.demoPassword}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};
