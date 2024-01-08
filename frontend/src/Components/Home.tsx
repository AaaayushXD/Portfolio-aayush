import { About } from "./About";
import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";
import BottomBlob from "../assets/wave-haikei-bottom.png";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-full">
        <LandingPage />
        <BlobMakerBottom url={BottomBlob} alt="Bottom blob" />
      </div>
      <About />
      <Skills />
    </div>
  );
};

export const BlobMakerBottom: React.FC<{ url: string; alt: string }> = (
  props
) => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <img
        src={props.url}
        alt={props.alt}
        loading="lazy"
        className="w-full bg-center bg-repeat max-h-[350px]"
      />
    </div>
  );
};

export const BlobMakerTop: React.FC<{ url: string; alt: string }> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full">
      <img
        src={props.url}
        alt={props.alt}
        loading="lazy"
        className="w-full bg-center bg-repeat max-h-[250px]"
      />
    </div>
  );
};
