import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { AuthProvider } from "./firebase/Auth";
import { PrivateRoutes } from "./routes/PrivateRoute";
import { Home } from "./components/Home";

export const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/login"} element={<Login />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path={"/"} element={<Home />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
