import React from "react";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import About from "./Menu/About";
import Services from "./Menu/Services";

import Clients from "./Menu/Clients";
import Contact from "./Menu/Contact";
import Practice from "./Menu/Practice";



export default class MenuContent extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 600,
          slidesToShow: 5,
          slidesToScroll: 1,
          vertical:true,
        };
    return(
        <Router>
             <div id="MenuContent">
                 <div className="menu-content-container">
                     <div className="menu-content-main">
                         <div className="menu-item-info">
                         {/* <About/> */}
                         {/* <Services/> */}
                         {/* <Clients/> */}
                         <Routes>
                            <Route
                                exact
                                path="/about"
                                element={<About />}>
                            </Route>
                            <Route
                                exact
                                path="/services"
                                element={<Services />}>
                            </Route>
                            <Route
                                exact
                                path="/clients"
                                element={<Clients />}> 
                            </Route>
                            <Route
                                exact
                                path="/contact"
                                element={<Contact />}>
                            </Route>
                            <Route
                                exact
                                path="/practice"
                                element={<Practice />}> 
                            </Route>
                        </Routes>

                         </div>
                         <div className="menu-content-list">
                          <div className="menu-content-slider">
                             <Slider {...settings} className="menu-list">
                             <li id="about">
                                 <Link to="/about">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>about</h2>
                                                 <span>mark antony</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="services">
                                 <Link to="/services">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>

                                                 <h2>services</h2>
                                                 <span>Legal Services</span>


                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="clients">
                                 <Link to="/clients">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Clients</h2>
                                                 <span>Testimonials</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="practice">
                                 <Link to="/practice">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Practice</h2>
                                                 <span>Practice of Law</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="contact">
                                 <Link to="/contact">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Contact</h2>
                                                 <span>Get In Touch</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="about">
                                 <Link to="/about">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>about</h2>
                                                 <span>mark antony</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="services">
                                 <Link to="/services">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>

                                                 <h2>services</h2>
                                                 <span>Legal Services</span>


                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="clients">
                                 <Link to="/clients">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Clients</h2>
                                                 <span>Testimonials</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="practice">
                                 <Link to="/practice">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Practice</h2>
                                                 <span>Practice of Law</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                             <li id="contact">
                                 <Link to="/contact">
                                     <div className="menu-item-content">
                                             <i></i>
                                             <div>
                                                 <h2>Contact</h2>
                                                 <span>Get In Touch</span>
                                             </div>
                                     </div>
                                 </Link>
                             </li>
                            
                         </Slider>
                             </div>
                             
                         </div>
                     </div>

                 </div>
                 {/* <Menus/> */}
             </div>
        </Router>
      )
    }
}