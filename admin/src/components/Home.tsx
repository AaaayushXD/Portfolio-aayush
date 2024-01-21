import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import { Detail, Folders, ProjectDetail } from "../models/models";
import {
  getCVData,
  getDataFromDataBase,
  removeDataFromDataBase,
  updateDataInDataBase,
} from "../database/database";
import { Projects } from "./Projects";

export const Home: React.FC = () => {
  // State management
  const [skillInfo, setSkillsInfo] = useState<Detail[]>();
  const [projectInfo, setProjectInfo] = useState<ProjectDetail[]>();
  // const [cv, setCV] = useState<string>();

  const updateData = async (folder: Folders, data: Detail | ProjectDetail) => {
    await updateDataInDataBase({ folder: folder.folder }, data);
    getData({ folder: folder.folder });
  };

  const getData = async (folder: Folders) => {
    const dataObject = await getDataFromDataBase({ folder: folder.folder });
    if (folder.folder === "skills") {
      const data = dataObject?.data as Detail[];
      setSkillsInfo(data);
    } else if (folder.folder === "projects") {
      const data = dataObject?.data as ProjectDetail[];
      setProjectInfo(data);
    }
  };

  const removeData = async (folder: Folders, detail: Detail) => {
    await removeDataFromDataBase({ folder: folder.folder }, detail);
    getData({ folder: folder.folder });
  };

  const getCV = async () => {
    const url = await getCVData();
    if (!url) return;
    // setCV(url);
  };

  useEffect(() => {
    getData({ folder: "skills" });
    getData({ folder: "projects" });
    getCV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full px-5 py-8 selection:bg-[#39b2ad] selection:text-[#fefefe]">
        <div className="max-w-[1700px] w-full h-full flex justify-center items-center flex-col gap-10">
          <Skills
            addNewSkill={updateData}
            skills={skillInfo as Detail[]}
            removeSkill={removeData}
          />
          <Projects
            addProject={updateData}
            projects={projectInfo as ProjectDetail[]}
            removeProject={removeData}
          />
        </div>
      </div>
    </>
  );
};
