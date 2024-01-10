import { useNavigate } from "react-router-dom";
import Google from "../assets/google.png";
import { useAuth } from "../firebase/Auth";
import { Navbar } from "./Navbar";

export const Login: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const signInHandler = async () => {
    if (signIn) {
      await signIn();
      navigate("/");
    } else {
      console.error("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-full h-full px-5 py-10 selection:bg-[#39b2ad] selection:text-[#fefefe] ">
        <div className="max-w-[1500px] w-full flex justify-center items-center flex-col gap-10 px-5 py-10">
          <h1 className="text-5xl text-[#39b2ad] mb-8">Login as Admin</h1>
          <div
            className="flex items-center justify-center gap-3 border border-[#39b2ad] px-5 py-4 rounded-md cursor-pointer hover:bg-[#268682] hover:border-[#268682]"
            onClick={signInHandler}
          >
            <img src={Google} alt="google" className="max-h-[40px]" />
            <p className="text-xl font-bold tracking-wide">
              Sign in with Google
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
