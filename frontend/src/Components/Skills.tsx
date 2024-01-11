import { useEffect, useState } from "react";
import { getDataFromDataBase } from "../firebase/database";

interface Detail {
  name: string;
  url: string;
}

export const Skills = () => {
  const [skills, setSkills] = useState<Detail[]>();
  const fetchData = async () => {
    const response = await getDataFromDataBase("skills");
    setSkills(response.data as Detail[]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className="flex items-center justify-center w-full h-full px-4 py-8 text-[var(--text-primary)]"
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
          {skills &&
            skills.map((skill, index) => {
              return (
                <div
                  className=" flex justify-center items-center py-5 flex-col gap-6 rounded-lg shadow-md hover:scale-[1.03] skill-section cursor-pointer w-full max-w-[350px] min-h-[210px] transition-all delay-100 duration-700 ease-in-out hover:shadow-[var(--primary-color)] hover:shadow-md"
                  key={index}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    loading="lazy"
                    className="max-h-[120px] px-3"
                  />
                  <p className="text-xl font-bold tracking-wider">
                    {skill.name.toUpperCase()}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
