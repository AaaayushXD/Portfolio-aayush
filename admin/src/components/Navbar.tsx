import Logo from "../assets/aayushlogo.png";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="max-w-[17000px] w-full h-[80px] px-5 py-4">
          <a href="https://portfolio-al.web.app/" target="_blank">
            <img src={Logo} alt="Logo" className="max-h-[40px]" />
          </a>
        </div>
      </div>
      <div className="w-full border-2 border-[#1c7c79] mb-8 "></div>
    </>
  );
};
