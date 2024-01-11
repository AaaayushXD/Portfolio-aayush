import { useState } from "react";
import {
  Detail,
  ImageProp,
  NewSkillProps,
  ShowSkillsProps,
  SkillProps,
} from "../models/models";
import { uploadImage } from "../database/database";
import { CheckCheck, ImagePlus, Trash } from "lucide-react";

export const Skills: React.FC<SkillProps> = (props) => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full px-5 py-8 ">
        <div className="max-w-[1700px] w-full h-full flex justify-center items-center flex-col">
          <div className="flex flex-col w-full gap-5">
            <h1 className="text-4xl text-[#39b2ad] font-bold tracking-wider">Skills</h1>
            <div className="flex items-center justify-center w-full">
              <AddSkills addNewSkill={props.addNewSkill} />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <ShowSkills
                skills={props.skills}
                removeSkill={props.removeSkill}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const AddSkills: React.FC<NewSkillProps> = (props) => {
  const [skillName, setSkillName] = useState<string>("");
  const [skillImage, setSkillImage] = useState<ImageProp>();

  const submitSkills: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const url = await uploadImage(
      { folder: "skills" },
      skillName,
      skillImage as ImageProp
    );
    if (url) {
      props.addNewSkill({ folder: "skills" }, { name: skillName, url: url });
    } else {
      throw new Error("Couldn't add to database. Somthing went wrong.");
    }
    setSkillImage(undefined);
    setSkillName("");
  };

  return (
    <>
      <form
        className="flex items-center justify-around max-w-[800px] w-full h-full gap-5 px-5 py-8 "
        onSubmit={submitSkills}
      >
        <div className="flex flex-col items-center gap-2 w-[40%] overflow-hidden">
          <input
            type="text"
            id="skillName"
            className="bg-transparent border-b border-[#b6b6b6] focus:border-[#39b2ad] px-2 py-2 rounded-md outline-none focus:outline-none max-w-full  col-span-1 "
            placeholder="Name:"
            autoComplete="off"
            required
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1 md:gap-5 basis-1/3 border-b border-[#b6b6b6] hover:border-[#39b2ad] rounded-md py-2 px-2 w-[40%] overflow-hidden max-h-[45px]">
          <label
            htmlFor="skillImage"
            className="text-[#b6b6b6] text-left overflow-x-hidden  w-[90%]"
          >
            {skillImage?.files && skillImage.files.name
              ? skillImage.files.name
              : "Image:"}
          </label>
          <input
            type="file"
            id="skillImage"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSkillImage({ files: e.target.files[0] });
              }
            }}
          />
          <span className="text-[#b6b6b6]">
            {skillImage && skillImage.files.name.length > 1 ? (
              <CheckCheck color="#39b2ad"></CheckCheck>
            ) : (
              <ImagePlus></ImagePlus>
            )}
          </span>
        </div>
        <button
          type="submit"
          className="w-[20%] px-2 py-3 border rounded-md border-[#39b2ad] hover:bg-[#39b2ad]"
        >
          Add
        </button>
      </form>
    </>
  );
};

export const ShowSkills: React.FC<ShowSkillsProps> = (props) => {
  const removeHandler = (detail: Detail) => {
    props.removeSkill({ folder: "skills" }, detail);
  };
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8">
        <div className="max-w-[1500px] w-full grid-cols-2 grid lg:grid-cols-4 gap-9 sm:grid-cols-3 place-items-center">
          {props.skills?.map((skill) => {
            return (
              <div
                className="flex flex-col gap-5 w-[200px] bg-[#272727] px-5 py-3 items-center rounded-md shadow-md cursor-pointer hover:scale-[1.01] transition-all ease-in-out  duration-300"
                key={skill.name}
              >
                <img
                  src={skill.url}
                  alt={skill.name}
                  loading="lazy"
                  className="h-[80px] bg-cover"
                />
                <div className="flex items-center justify-between w-full h-full px-3">
                  <h1 className="text-xl">{skill.name}</h1>
                  <div
                    className="text-[#ff4444] hover:bg-[#e06969] cursor-pointer px-2 py-2 rounded-md hover:text-[#fefefe] transition-all ease-in-out  duration-300"
                    onClick={removeHandler.bind(null, skill)}
                  >
                    <Trash size={15} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
