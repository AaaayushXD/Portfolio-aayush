import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { CheckCheck, ImagePlus } from "lucide-react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/base";
import { doc, getDoc, setDoc } from "firebase/firestore";

type Folders = {
  folder: "skills" | "projects";
};

interface Detail {
  name: string;
  url: string;
}

interface ProjectDetail extends Detail {
  description: string;
  demoLink: string;
  gthubLink: string;
  demoId: string;
  demoPassword: string;
}

const getDataFromDataBase = async (name: Folders) => {
  const ref = doc(db, "portfolio", name.folder);
  const getData = await getDoc(ref);
  if (getData.exists()) {
    return [getData.data()] as Detail[] | ProjectDetail[];
  } else {
    throw new Error("Cant fetch Data from DataBase");
  }
};

const updateDataInDataBase = async (
  folder: Folders,
  content: Detail[] | ProjectDetail[]
) => {
  const ref = doc(db, "portfolio", folder.folder);
  await setDoc(ref, { ...content });
};

export const Home: React.FC = () => {
  // State management
  const [skillInfo, setSkillsInfo] = useState<Detail[]>();
  const [projectInfo, setProjectInfo] = useState<ProjectDetail[]>();

  const fetchData = async (folder: Folders) => {
    try {
      if (folder.folder === "skills") {
        const data = await getDataFromDataBase({ folder: folder.folder });
        if (data) {
          const prevData = data[0];
          console.log({ ...prevData });

          setSkillsInfo((prev) => prev && [...prev, prevData]);
          console.log(skillInfo);
        }
      }
    } catch (err) {
      throw new Error(`Error Fetching data ${err}`);
    }
  };

  const updateData = (folder: Folders, data: Detail | ProjectDetail) => {
    console.log("hi");
  };

  useEffect(() => {
    fetchData({ folder: "skills" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (skillInfo || projectInfo) fetchData();
  // }, [skillInfo, projectInfo]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full px-5 py-8 selection:bg-[#39b2ad]">
        <div className="max-w-[1700px] w-full h-full flex justify-center items-center flex-col">
          <div className="flex flex-col w-full gap-5">
            <h1 className="text-2xl text-[#39b2ad]">Skills</h1>
            <div className="flex items-center justify-center w-full">
              <AddSkills addNewSkill={updateData} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl text-[#39b2ad]">Projects</h1>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

interface ImageProp {
  files: File;
}

interface SkillProps {
  addNewSkill: (folder: Folders, data: Detail) => void;
}

export const AddSkills: React.FC<SkillProps> = (props) => {
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

const uploadImage = async (folder: Folders, name: string, image: ImageProp) => {
  const imageRef = ref(storage, `${folder.folder}/${name}`);
  if (!image?.files) return;
  try {
    await uploadBytes(imageRef, image.files);
    const imageUrl = getDownloadURL(imageRef).then((url) => {
      return url;
    });
    return imageUrl;
  } catch (err) {
    throw new Error(`${err}`);
  }
};
