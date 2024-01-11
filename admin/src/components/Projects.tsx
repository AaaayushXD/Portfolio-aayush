import { useState } from "react";
import {
  AddProject,
  ImageProp,
  ProjectDetail,
  ProjectProps,
  ShowProject,
} from "../models/models";
import { uploadImage } from "../database/database";
import { Github, ImagePlus, Link, Trash } from "lucide-react";

export const Projects: React.FC<ProjectProps> = (props) => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-5 py-8">
        <div className="max-w-[1500px] w-full flex justify-center items-center gap-8 flex-col">
          <div className="flex w-full">
            <h1 className="text-left text-4xl text-[#39b2ad] font-bold tracking-wider">
              Projects
            </h1>
          </div>
          <AddProjects addProjects={props.addProject} />
          <ShowProjects
            projects={props.projects}
            removeProject={props.removeProject}
          />
        </div>
      </div>
    </>
  );
};

export const AddProjects: React.FC<AddProject> = (props) => {
  const [image, setImage] = useState<ImageProp>();
  const [project, setProject] = useState<ProjectDetail>({
    name: "",
    url: "",
    demoLink: "",
    demoId: "",
    demoPassword: "",
    description: "",
    githubLink: "",
  });
  const submitForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage(
        { folder: "projects" },
        `${project.name}`,
        image as ImageProp
      );
      if (imageUrl && imageUrl.length > 1) {
        setProject((prev) => ({ ...prev, url: imageUrl }));
        props.addProjects(
          { folder: "projects" },
          { ...project, url: imageUrl }
        );
      } else {
        console.error("No image selected or uploaded! Please try again");
      }
    } catch (err) {
      throw new Error("Unable to add new project");
    } finally {
      setProject({
        name: "",
        url: "",
        demoLink: "",
        demoId: "",
        demoPassword: "",
        description: "",
        githubLink: "",
      });
      setImage(undefined);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <form
          className="grid w-full grid-cols-3 grid-rows-3 gap-5"
          onSubmit={submitForm}
        >
          <input
            type="text"
            placeholder="Project Name"
            required
            autoComplete="off"
            className="px-2 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad]"
            value={project.name}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, name: e.target.value }))
            }
          ></input>
          <input
            type="text"
            placeholder="Demo Link"
            required
            autoComplete="off"
            value={project.demoLink}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, demoLink: e.target.value }))
            }
            className="px-2 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad]"
          ></input>
          <input
            type="text"
            placeholder="Github Link"
            required
            autoComplete="off"
            value={project.githubLink}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, githubLink: e.target.value }))
            }
            className="px-2 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad]"
          ></input>
          <div className="relative flex items-center justify-between w-full h-full px-2 border rounded-md hover:border-[#39b2ad] cursor-pointer">
            <label
              htmlFor="projectImage"
              className="w-full text-lg font-bold cursor-pointer"
            >
              Image:
            </label>
            <input
              type="file"
              placeholder=""
              required
              autoComplete="off"
              className="hidden"
              id="projectImage"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImage({ files: e.target.files[0] });
                }
              }}
            ></input>
            <span
              className="absolute left-[90px]  cursor-pointer"
              style={{ zIndex: -1 }}
            >
              {image ? image.files.name : <ImagePlus />}
            </span>
          </div>

          <textarea
            placeholder="Project's Description"
            required
            autoComplete="off"
            value={project.description}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, description: e.target.value }))
            }
            className="px-2 py-1 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad] col-span-2 "
          ></textarea>
          <input
            type="text"
            placeholder="Demo Id: "
            required
            autoComplete="off"
            value={project.demoId}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, demoId: e.target.value }))
            }
            className="px-2 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad]"
          ></input>
          <input
            type="text"
            placeholder="Demo Password"
            required
            autoComplete="off"
            value={project.demoPassword}
            onChange={(e) =>
              setProject((prev) => ({ ...prev, demoPassword: e.target.value }))
            }
            className="px-2 bg-transparent border rounded-md outline-none focus:outline-none focus:border-[#39b2ad]"
          ></input>
          <button
            type="submit"
            className="px-2 bg-transparent border rounded-md border-[#39b2ad] hover:bg-[#39b2ad] text-xl font-bold"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export const ShowProjects: React.FC<ShowProject> = (props) => {
  const removeHandler = (detail: ProjectDetail) => {
    props.removeProject({ folder: "projects" }, detail);
  };
  return (
    <>
      <div className="items-center justify-center w-full h-full px-5 py-8">
        <div className="max-w-[1500px] grid grid-cols-1 place-items-center gap-8">
          {props.projects &&
            props.projects.map((project) => {
              return (
                <div
                  className="flex flex-col-reverse items-center justify-around gap-10 px-6 py-2 overflow-hidden md:flex-row "
                  key={project.name}
                >
                  <div className=" hover:scale-[1.025] flex justify-center items-center basis-1/2 ">
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
                    <div className="flex items-center justify-between w-full gap-5 pt-4 font-bold tracking-wider">
                      <div className="flex items-center gap-5 ">
                        <h4 className="text-3xl text-[#39b2ad]">
                          {project.name}
                        </h4>

                        <span className="flex gap-3">
                          <a
                            href={project.demoLink}
                            target="_blank"
                            className="text-[#5f5f5f] flex items-center cursor-pointer hover:text-[#2e8380] "
                          >
                            <Link size={20} />
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            className="text-[#5f5f5f] flex items-center  cursor-pointer hover:text-[#2e8380]"
                          >
                            <Github size={20} />
                          </a>
                        </span>
                      </div>
                      <div
                        className="text-[#ff4444] hover:bg-[#e06969] cursor-pointer px-2 py-2 rounded-md hover:text-[#fefefe] transition-all ease-in-out  duration-300"
                        onClick={removeHandler.bind(null, project)}
                      >
                        <Trash size={20} />
                      </div>
                    </div>

                    <p className="text-sm ">{project.description}</p>

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
        </div>
      </div>
    </>
  );
};
