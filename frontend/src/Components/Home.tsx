import { About } from "./About";
import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import BottomBlob from "/utils/wave-haikei-bottom.png";
import BottomBlobBlack from "/utils/wave-haikei-black-bottom.png";
import Blob from "/utils/blob-haikei.png";
import BlobDark from "/utils/blob-haikei-dark.png";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.setAttribute("data-theme", mode);
    } else {
      document.documentElement.setAttribute("data-theme", mode);
    }
  }, [mode]);

  const modeHandler = () => {
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <div className="w-full h-full ">
        <Navbar switchMode={modeHandler} />
      </div>
      <div className="relative w-full h-full transition-all duration-500 ease-in delay-150 bg-center !bg-no-repeat !bg-cover">
        <LandingPage imgBlob={mode === "light" ? Blob : BlobDark} />
        <BlobMakerBottom
          url={mode === "light" ? BottomBlob : BottomBlobBlack}
          alt="Bottom blob"
        />
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
        className="w-full bg-center bg-repeat max-h-[200px]"
      />
    </div>
  );
};
