import { Home } from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};
