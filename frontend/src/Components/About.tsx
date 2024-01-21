import { Github, Linkedin } from "lucide-react";
import { HireMeButton } from "./Navbar";
import { useEffect, useState } from "react";
import { getCV } from "../firebase/database";

export const About: React.FC = () => {
  const [cv, setCV] = useState<string>();
  const getData = async () => {
    const data = await getCV();
    setCV(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-full px-4 py-5 bg-[var(--about-section-bg)] text-[var(--text-primary)]"
        id="about-section"
      >
        <div className="max-w-[1700px] grid grid-cols-1 md:grid-cols-2 place-items-center py-8 px-2 gap-8 min-h-[500px]">
          <div className="flex flex-col w-full h-full gap-8 px-3 py-4 ">
            <div className="relative w-full py-3 ">
              <h1 className="text-3xl font-bold text-[var(--text-primary)]">
                About Me
              </h1>
              <div className="border-2 border-[var(--primary-color)] w-[100px] mx-2"></div>
            </div>
            <div className="text-[var(--grey-text)] text-sm flex  flex-col gap-4">
              <p className="flex flex-col items-center gap-1 sm:gap-2 sm:flex-row">
                Hello, I am{" "}
                <span className="text-[var(--primary-color)] font-bold tracking-wide text-lg">
                  Aayush Lamichhane
                </span>
              </p>
              <p className="text-[var(--text-primary)] text-lg">
                {" "}
                I am a Full stack Mern Developer.{" "}
              </p>
              <p className="">
                Through extensive research on online resources as well as
                self-guided learning and hands-on projects, I have gained
                proficiency in the MERN stack, encompassing MongoDB, Express.js,
                React.js, and Node.js. My goal is to leverage my skills and
                knowledge to contribute to innovative web applications that
                solve real-world problems. I am excited to embark on a career
                path that aligns with my passion for coding and problem-solving.
                I am open to internships, freelance projects, or entry-level
                positions that offer the opportunity to learn and grow.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start w-full h-full px-5 py-4 ">
            <div className="flex flex-col gap-3">
              <p className="px-1 text-lg font-bold">Contact</p>
              <p className="px-1">
                Do you have any questions for me? You can connect with me
                through aayushlamichhane2911@gmail.com or social media.
              </p>

              <div className="flex w-full gap-6 px-1 py-2">
                <a
                  target="_blank"
                  href="https://github.com/AaaayushXD"
                  className=" text-[var(--text-primary)]  hover:text-[var(--hover-color)]  "
                  rel="noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/aayush15l/"
                  target="_blank"
                  className=" text-[var(--text-primary)]  hover:text-[var(--hover-color)]  "
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
              <div className="flex items-center gap-5 px-1 py-5">
                <div className="text-[var(--text-secondary)]">
                  <HireMeButton />
                </div>
                <div className=" border-2 border-[var(--navbar-color)] flex items-center rounded-md hover:bg-[var(--secondary-color)] cursor-pointer ">
                  <a href={cv} target="_blank" className="px-3 py-2">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
