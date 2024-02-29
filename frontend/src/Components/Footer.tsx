import { Github, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  const date = new Date();
  return (
    <>
      <div className="w-full h-full bg-[var(--background-color)] pt-6 text-[var(--text-primary)]">
        {/* links */}
        <div className="grid grid-cols-2 gap-8 max-w-screen sm:grid-cols-3 sm:gap-6">
          <div className="flex flex-col px-3 py-2">
            <h1 className="mb-6">RESOURCES</h1>

            <a
              href="#about-section"
              className="text-[var(--text-primary)] mb-4 hover:underline px-1"
            >
              About Me
            </a>

            <a
              href="#skills-section"
              className="text-[var(--text-primary)] mb-4 hover:underline px-1"
            >
              Skills
            </a>

            <a
              href="#project-section"
              className="text-[var(--text-primary)] mb-4 hover:underline px-1"
            >
              Projects
            </a>

            <a
              href="#contact-section"
              className="text-[var(--text-primary)] mb-4 hover:underline px-1"
            >
              Contacts
            </a>
          </div>
          <div className="px-3 py-2">
            <h1 className="mb-6">FOLLOW ME</h1>

            <a
              href="https://www.linkedin.com/in/aayush15l/"
              target="_blank"
              className="flex gap-2 text-[var(--text-primary)] mb-4 hover:underline px-1 ]"
              rel="noreferrer"
            >
              <Linkedin />
              <p>LinkdeIn</p>
            </a>
            <a
              href="https://github.com/AaaayushXD"
              target="_blank"
              className="flex gap-2 text-[var(--text-primary)] mb-4 hover:underline px-1 ]"
              rel="noreferrer"
            >
              <Github />
              <p>Github</p>
            </a>
          </div>
          <div className="px-3 py-2">
            <h1 className="mb-6">LEGAL</h1>
            <p className="flex gap-2 text-[var(--text-primary)] mb-4 hover:underline px-1">
              Privacy Policy
            </p>

            <p className="flex gap-2 text-[var(--text-primary)] mb-4 hover:underline px-1">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="border border-[var(--navbar-color)] m-2"></div>

        {/* copyright */}
        <div className="flex flex-col justify-between gap-3 px-4 pb-[80px] md:pb-5 sm:flex-row">
          <div className="px-3 py-2">
            <p className="flex gap-1 text-[var(--text-primary)]">
              Copyright © {date.getFullYear()}{" "}
              <a
                href="https://portfoliosite-aayush.netlify.app/"
                target="_blank"
                className="hover:text-[var(--primary-color)] hover:underline"
                rel="noreferrer"
              >
                Aayush.
              </a>
              All Rights Reserved
            </p>
          </div>
          <div className="flex gap-5 px-3 py-2 text-[var(--text-primary)] items-center  mb-2">
            <a
              href="https://www.linkedin.com/in/aayush15l/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--hover-color)]"
            >
              <Linkedin />
            </a>

            <a
              href="https://github.com/AaaayushXD"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--hover-color)]"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
