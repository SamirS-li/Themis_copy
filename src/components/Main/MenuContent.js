import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { motion } from "framer-motion";
import About from "./Menu/About";
import Services from "./Menu/Services";
import Clients from "./Menu/Clients";
import Contact from "./Menu/Contact";
import Practice from "./Menu/Practice";
import { animationContext } from "../Main/Main";

export default function MenuContent() {
  const { value, setValue } = useContext(animationContext);
  // const [animationValue, setAnimation] = useState(value);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
  };
  const removeAnimation = () => {
    // setAnimation(false);

    document
      .querySelector(".menu-content-main")
      .classList.remove("animation-item");
  };
  useEffect(() => {
    if (value) {
      document
        .querySelector(".menu-content-main")
        .classList.add("animation-item");
      setValue(false);
    }
  });
  

  return (
    <div id="MenuContent">
      <motion.div
        className="menu-content-container"
        exit={{ height: "0", transitionDelay: 3, delay: "3s" }}
      >
        <div className="menu-content-main">
          <div className="menu-item-info">
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/services" element={<Services />}></Route>
              <Route exact path="/clients" element={<Clients />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/practice" element={<Practice />}></Route>
            </Routes>
          </div>
          <div className="menu-content-list">
            <NavLink
              to="/"
              className="content-close-button"
              onClick={removeAnimation}
            ></NavLink>
            <div className="menu-content-slider">
              <Slider {...settings} className="menu-small-list">
                <li onClick={removeAnimation} id="about-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/about"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>about</h2>
                        <span>mark antony</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="services-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/services"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>services</h2>
                        <span>Legal Services</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="clients-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/clients"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Clients</h2>
                        <span>Testimonials</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="practice-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/practice"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Practice</h2>
                        <span>Practice of Law</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="contact-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/contact"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Contact</h2>
                        <span>Get In Touch</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="about-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/about"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>about</h2>
                        <span>mark antony</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="services-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/services"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>services</h2>
                        <span>Legal Services</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="clients-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/clients"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Clients</h2>
                        <span>Testimonials</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="practice-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/practice"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Practice</h2>
                        <span>Practice of Law</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li onClick={removeAnimation} id="contact-list">
                  <NavLink
                    activeclassname="activeList-a"
                    to="/menuContent/contact"
                  >
                    <div className="menu-item-content">
                      <i></i>
                      <div>
                        <h2>Contact</h2>
                        <span>Get In Touch</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </Slider>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
