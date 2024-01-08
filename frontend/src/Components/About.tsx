export const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-4 py-5">
        <div className="max-w-[1700px] grid grid-cols-1 md:grid-cols-2 place-items-center py-8 px-2 gap-8">
          <div className="relative">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center">
              About Me
            </h2>
            <div className="absolute border-b-4 border-[var(--primary-color)] w-[100px] left-0 bottom-[-5px] "></div>
          </div>
          <div className="text-[var(--grey-text)] text-md">
            <p>Hello, my name is Aayush Lamichhane.</p>
            <p>
              I am a Full stack Mern Developer. Through extensive research on
              online resources as well as self-guided learning and hands-on
              projects, I have gained proficiency in the MERN stack,
              encompassing MongoDB, Express.js, React.js, and Node.js. My goal
              is to leverage my skills and knowledge to contribute to innovative
              web applications that solve real-world problems. I am excited to
              embark on a career path that aligns with my passion for coding and
              problem-solving. I am open to internships, freelance projects, or
              entry-level positions that offer the opportunity to learn and
              grow.
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-[var(--navbar-color)] mb-8"></div>
    </>
  );
};
