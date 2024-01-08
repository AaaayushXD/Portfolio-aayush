import { About } from "./About";
import LandingPage from "./LandingPage";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
};
