import { About } from "./About";
import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
};
