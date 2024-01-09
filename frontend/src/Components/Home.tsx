import { About } from "./About";
import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import BottomBlob from "../assets/wave-haikei-bottom.png";
// import TopBlob from "../assets/wave-haikei-top.png";
// import TopBlobBg from "../assets/wave-haikei-top-bg.png";
// import BottomBlobBg from "../assets/wave-bottom-bg.png";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="w-full h-full ">
        <Navbar />
      </div>
      <div className="relative w-full h-full">
        <LandingPage />
        <BlobMakerBottom url={BottomBlob} alt="Bottom blob" />
      </div>
      <div className="relative w-full h-full">
        <About />
        <div className="absolute bottom-0 left-0 border-2 border-[var(--secondary-color)] w-full "></div>
      </div>
      <div className="relative w-full h-full">
        <Skills />
        <div className="absolute bottom-0 left-0 border-2 border-[var(--secondary-color)] w-full "></div>
      </div>
      <div className="relative w-full h-full">
        <Projects />
        <div className="absolute bottom-0 left-0 border-2 border-[var(--secondary-color)] w-full "></div>
      </div>
      <div className="w-full h-full">
        <Contact />
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="max-w-[1700px] w-full">
          <Footer />
        </div>
        <div className="absolute top-0 left-0 border-2 border-[var(--navbar-color)] w-full "></div>
      </div>
    </div>
  );
};

export const BlobMakerBottom: React.FC<{ url: string; alt: string }> = (
  props
) => {
  return (
    <div className="absolute bottom-0 left-0 w-full select-none">
      <img
        src={props.url}
        alt={props.alt}
        loading="lazy"
        className="w-full bg-center bg-repeat max-h-[150px]"
      />
    </div>
  );
};

export const BlobMakerTop: React.FC<{ url: string; alt: string }> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full select-none">
      <img
        src={props.url}
        alt={props.alt}
        loading="lazy"
        className="w-full bg-center bg-repeat max-h-[200px]"
      />
    </div>
  );
};
