// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Logi from "./components/Logi";
import ProfilUser from "./components/ProfilUser";
import Register from "./components/Register";
// import { userCurrent } from "./JS/userSlice/userSlice";

// import PrivateRouter from "./Routes/PrivateRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Explore from "./components/Explore";
// import { getinternship } from "./JS/internshipSlice";
import About from "./components/About";
import Contact from "./components/Contact";
import InternDeatails from "./components/InternDeatails";
import ModalApply from "./components/ModalApply";
import PrivateRoute from "./Routes/PrivateRouter";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";

import { userCurrent } from "./JS/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { getinternship } from "./JS/internshipSlice";
import { getrequest } from "./JS/RequestSlice";
import ProfilEntity from "./components/ProfilEntity";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(true);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getinternship());
    dispatch(getrequest());
  }, [ping]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register ping={ping} setping={setping} />}
        />
        <Route path="/logi" element={<Logi ping={ping} setping={setping} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<InternDeatails />} />
        <Route path="/apply/:internship" element={<ModalApply />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profilUser"
            element={<ProfilUser ping={ping} setping={setping} />}
          />
          <Route
            path="/profilEntity"
            element={<ProfilEntity ping={ping} setping={setping} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
