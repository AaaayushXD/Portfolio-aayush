import { HireMeButton } from "./Navbar";
import Image from "../assets/illustration.png";
import Blob from "../assets/blob-haikei.png";

const LandingPage = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{ zIndex: 0 }}
      >
        <div className="w-full max-w-[1700px] px-6 py-100 flex justify-center md:justify-around items-center min-h-[80vh] gap-4">
          <div className="text-[var(--text-primary)] flex flex-col w-full max-w-[700px] ">
            <p className="text-lg text-[var(--primary-color)] py-2">
              Hi, I am <span>Aayush Lamichhane.</span>
            </p>
            <h1 className="text-6xl font-bold">Full Stack Developer</h1>
            <p
              className="text-sm pt-5 pb-3 text-[var(--grey-text)] max-w-[500px]
          "
            >
              I am a dedicated and passionate full-stack MERN developer with a
              strong foundation in modern web development technologies.My goal
              is to leverage my skills and knowledge to contribute to innovative
              web applications that solve real-world problems.
            </p>
            <div className="flex text-[var(--background-color)] gap-6 items-center  py-8">
              <HireMeButton />
              <div className="h-[52px] border-2 border-[var(--navbar-color)] px-5 py-3 rounded-md hover:bg-[var(--hover-secondary-color)] text-[var(--grey-text)] flex items-center gap-2  transition-[1s] cursor-pointer hover:text-[--text-primary] ">
                <p className="font-bold tracking-wide ">Projects</p>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-center hidden lg:flex max-w-[600px] flex-grow min-w-[500px]"
            style={{
              background: `url(${Blob})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img
              src={Image}
              alt="illustration"
              loading="lazy"
              className="w-full bg-center bg-no-repeat bg-cover"
            />
          </div>
        </div>
      </div>
      <div className="border-2 border-[var(--navbar-color)] mb-8"></div>
    </>
  );
};

export default LandingPage;
