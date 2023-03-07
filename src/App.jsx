import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavbarPg from "./components/NavbarPg";
import Rockets from "./components/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./components/MyProfile";
import NoPage from "./components/NoPage";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarPg />}>
          <Route index element={<Home />} />
          <Route path="/Rockets" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
