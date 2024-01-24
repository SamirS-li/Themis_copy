import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MainMenu from "./MainMenu";
import MenuContent from "./MenuContent";
import About from "./Menu/About";
import Services from "./Menu/Services";
import Clients from "./Menu/Clients";
import Practice from "./Menu/Practice";
import Contact from "./Menu/Contact";
import { AnimatePresence } from "framer-motion";

export const animationContext = React.createContext("");
let path;

window.addEventListener("DOMContentLoaded", () => {
  path = "/";
  
  
});

export default function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState(false);

  useEffect(() => {
    navigate(path);
    console.log("useEffect Main",path);
  }, [path]);



  return (
    <div id="Main">
      <animationContext.Provider value={{ value, setValue }}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/* <Route index element={<MainMenu />} /> */}
            <Route exact path="/" element={<MainMenu />} />
            <Route path="/menuContent/*" element={<MenuContent />}>
              <Route path="/menuContent/*about" element={<About />} />
              <Route path="/menuContent/*services" element={<Services />} />
              <Route path="/menuContent/*clients" element={<Clients />} />
              <Route path="/menuContent/*practice" element={<Practice />} />
              <Route path="/menuContent/*contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </animationContext.Provider>
    </div>
  );
}
