import { Link } from "react-router-dom";
import LOGO from "../assets/aayushlogo.png";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky">
      <div className="flex-col items-center justify-center hidden w-full select-none lg:flex">
        <DesktopNavbar />
      </div>

      <div className="sticky select-none lg:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};

export const DesktopNavbar: React.FC = () => {
  return (
    <>
      <div className="w-full h-[80px] max-w-[1700px] flex justify-around">
        <a href="/" className="px-5 py-2">
          <img
            src={LOGO}
            alt="Logo"
            loading="lazy"
            className="max-h-[60px] p-2 select-none"
          />
        </a>
        <div className="flex items-center h-[80px] gap-8">
          <Link
            to={"#"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Home
          </Link>
          <Link
            to={"#about"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            About
          </Link>
          <Link
            to={"#skills"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Skills
          </Link>
          <Link
            to={"#projects"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Projects
          </Link>
          <Link
            to={"#contact"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center cursor-pointer text-[var(--background-color)] gap-5">
          <p className="px-4 py-3 bg-[var(--primary-color)] sm:text-lg rounded-md hover:bg-[var(--hover-color)] font-bold tracking-wider max-h-[52px] text-md">
            Hire Me
          </p>
          <ModeButton />
        </div>
      </div>

      <div className="border-2 border-[var(--navbar-color)] mb-8 w-full"></div>
    </>
  );
};

export const ModeButton: React.FC = () => {
  const [mode, setMode] = useState<boolean>(false);
  const modeHandler = () => {
    setMode((prev) => !prev);
  };
  return (
    <>
      <div
        className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-[var(--text-primary)] cursor-pointer"
        onClick={modeHandler}
      >
        {mode ? <Moon size={30} /> : <Sun size={30} />}
      </div>
    </>
  );
};

export const MobileMenu: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const menuHandler = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <div className="w-full h-[80px] flex justify-between items-center px-6">
        <img
          src={LOGO}
          alt="Logo"
          loading="lazy"
          className="max-h-[60px] p-2 select-none"
        />
        <div className="flex items-center h-[80px] gap-4 text-[var(--text-primary)]">
          <div onClick={menuHandler}>
            {menu ? (
              <X
                size={40}
                className="cursor-pointer text-[red] hover:text-red-800"
              />
            ) : (
              <Menu
                size={40}
                className="cursor-pointer hover:text-[var(--hover-color)]"
              />
            )}
          </div>
          <ModeButton />
        </div>
      </div>
      <div className="w-full border-2 border-[var(--navbar-color)]"></div>
      {menu && (
        <div
          className="w-full h-full bg-[var(--secondary-color)] flex justify-center items-center flex-col gap-6 py-8 "
          id="bigMenu"
        >
          <Link
            to={"#"}
            className="px-4 text-xl hover:font-bold  hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
          >
            Home
          </Link>
          <Link
            to={"#about"}
            className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
          >
            About
          </Link>
          <Link
            to={"#skills"}
            className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
          >
            Skills
          </Link>
          <Link
            to={"#projects"}
            className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
          >
            Projects
          </Link>
          <Link
            to={"#contact"}
            className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};
