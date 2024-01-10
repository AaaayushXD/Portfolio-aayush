import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./base";
import { ReactNode, createContext, useContext, useState } from "react";

export type User = {
  user: string;
};

export interface UserContext {
  user: User;
  signIn: () => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<Partial<UserContext>>({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProp {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const [user, setUser] = useState<User>({ user: "" });

  const signIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const adminId = import.meta.env.VITE_UID;
      const currentUser = await signInWithPopup(auth, provider);
      console.log(currentUser);
      const uid = currentUser.user.uid;
      if (uid !== adminId.trim()) throw new Error("Not an Admin. try again");
      const credential = GoogleAuthProvider.credentialFromResult(currentUser);
      const token = credential?.accessToken;
      if (token) {
        setUser({ user: token });
      }
    } catch (err) {
      console.error(err);
    }
  };
  const value = { user, signIn };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
