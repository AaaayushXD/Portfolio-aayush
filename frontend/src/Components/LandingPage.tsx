import Image from "/utils/illustration.png";
import { TypeAnimation } from "react-type-animation";

interface BlobImage {
  imgBlob: string;
}

const LandingPage: React.FC<BlobImage> = (props) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{ zIndex: 0 }}
      >
        <div
          className="w-full max-w-[1700px] px-6 py-100 flex justify-center md:justify-around items-center gap-4 min-h-[80vh] "
          data-aos="fade-right"
        >
          <div className="text-[var(--text-primary)] flex flex-col w-full max-w-[700px] ">
            <p className="text-lg text-[var(--primary-color)] py-2">
              Hi, I am <span>Aayush Lamichhane.</span>
            </p>
            <h1 className="text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer.",
                  2000,
                  "Mern Stack Developer.",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>

            <p
              className="text-sm pt-5 pb-3 text-[var(--grey-text)] max-w-[500px]
          "
            >
              I am a dedicated and passionate full-stack MERN developer with a
              strong foundation in modern web development technologies.My goal
              is to leverage my skills and knowledge to contribute to innovative
              web applications that solve real-world problems.
            </p>
            <div
              className="flex text-[var(--background-color)] gap-6 items-center  py-8"
              style={{ zIndex: 5 }}
            >
              <div className="h-[52px] border-2 border-[var(--primary-color)]  rounded-md hover:bg-[var(--primary-color)] text-[var(--text-primary)] flex items-center gap-2  transition-[1s] cursor-pointer">
                <a
                  href="#project-section"
                  className="w-full h-full px-5 py-3 font-bold tracking-wide"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-center hidden lg:flex max-w-[600px] flex-grow min-w-[500px] !bg-no-repeat !bg-cover !bg-center"
            style={{
              background: `url(${props.imgBlob})`,
              zIndex: 5,
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
    </>
  );
};

export default LandingPage;
