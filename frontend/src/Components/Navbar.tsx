import LOGO from "../assets/aayushlogo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SwitchButton } from "./SwitchButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="">
      <div className="flex-col items-center justify-center hidden w-full select-none lg:flex">
        <DesktopNavbar />
      </div>

      <div className="select-none lg:hidden">
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
          <a
            href={"#"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Home
          </a>
          <a
            href={"#about-section"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            About
          </a>
          <a
            href={"#skills-section"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Skills
          </a>
          <a
            href={"#project-section"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Projects
          </a>
          <a
            href={"#contact-section"}
            className="px-4 text-xl hover:bg-[var(--primary-color)] h-full flex items-center"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center cursor-pointer text-[var(--background-color)] gap-5">
          <HireMeButton />
          <ModeButton />
        </div>
      </div>

      <div className="border-2 border-[var(--navbar-color)] mb-8 w-full"></div>
    </>
  );
};

export const HireMeButton: React.FC = () => {
  return (
    <a
      href="#contact-section"
      className="px-4 py-3 bg-[var(--primary-color)] sm:text-lg rounded-md hover:bg-[var(--hover-color)] font-bold tracking-wider h-[52px] text-md cursor-pointer"
    >
      Hire Me
    </a>
  );
};

export const ModeButton: React.FC = () => {
  return (
    <>
      <div className="rounded-full flex justify-center items-center text-[var(--text-primary)] cursor-pointer ">
        <SwitchButton />
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
                className="cursor-pointer text-[red] hover:text-red-800 "
              />
            ) : (
              <Menu
                size={40}
                className="cursor-pointer hover:text-[var(--hover-color)] "
              />
            )}
          </div>
          <ModeButton />
        </div>
      </div>
      <div className="w-full border-2 border-[var(--navbar-color)]"></div>
      <div
        className="relative z-50 w-full h-full"
        style={{ zIndex: 3 }}
        onClick={menuHandler}
      >
        {menu && (
          <div
            className="w-full h-[300px] bg-[var(--secondary-color)] flex justify-center items-center flex-col gap-6 py-8 absolute top-0 left-0"
            id="bigMenu"
          >
            <a
              href={"#"}
              className="px-4 text-xl hover:font-bold  hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
            >
              Home
            </a>
            <a
              href={"#about-section"}
              className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
            >
              About
            </a>
            <a
              href={"#skills-section"}
              className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
            >
              Skills
            </a>
            <a
              href={"#project-section"}
              className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
            >
              Projects
            </a>
            <a
              href={"#contact-section"}
              className="px-4 text-xl hover:font-bold hover:border-[var(--primary-color)] h-full flex items-center border-b-2 border-b-transparent"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </>
  );
};
