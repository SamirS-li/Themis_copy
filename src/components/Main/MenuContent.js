import React from "react";
import Slider from "react-slick";
import About from "./Menu/About"
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

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
        <div id="MenuContent">
            <div className="menu-content-container">
                <div className="menu-content-main">
                    <div className="menu-item-info">
                    <About/>

                    </div>
                    <div className="menu-content-list">
                     <div className="menu-content-slider">
                        <Slider {...settings} className="menu-list">
                        <li id="about">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>about</h2>
                                            <span>mark antony</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="services">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>services</h2>
                                            <span>Legal Services</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="clients">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Clients</h2>
                                            <span>Testimonials</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="practice">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Practice</h2>
                                            <span>Practice of Law</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="contact">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Contact</h2>
                                            <span>Get In Touch</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="about">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>about</h2>
                                            <span>mark antony</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="services">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>services</h2>
                                            <span>Legal Services</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="clients">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Clients</h2>
                                            <span>Testimonials</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="practice">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Practice</h2>
                                            <span>Practice of Law</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        <li id="contact">
                            <a href="#">
                                <div className="menu-item-content">
                                        <i></i>
                                        <div>
                                            <h2>Contact</h2>
                                            <span>Get In Touch</span>
                                        </div>
                                </div>
                            </a>
                        </li>
                        
                    </Slider>
                        </div>

                    </div>
                </div>

            </div>
            {/* <Menus/> */}
        </div>
      )
    }
}