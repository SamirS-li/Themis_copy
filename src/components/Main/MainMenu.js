import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';



export default class MainMenu extends React.Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 5,
            slidesToScroll: 1,
          };
    
    return(
        <div id="MainMenu">
            <div className="mainMenu-container">
                <div className="menu-main-div">

                    <Slider {...settings} className="menu-list">
                        <li id="about">
                            <Link to="/menuContent/about">
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>about</h2>
                                        <span>mark antony</span>
                                </div>
                            </Link>
                        </li>
                        <li id="services">
                            <Link to="/menuContent/services" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Services</h2>
                                        <span>Legal Services</span>
                                </div>
                            </Link>
                        </li>
                        <li id="clients">
                            <Link to="/menuContent/clients" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Clients</h2>
                                        <span>Testimonials</span>
                                </div>
                            </Link>
                        </li>
                        <li id="practice">
                            <Link to="/menuContent/practice" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Practice</h2>
                                        <span>Practice Of Law</span>
                                </div>
                            </Link>
                        </li>
                        <li id="contact">
                            <Link to="/menuContent/contact" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Contact</h2>
                                        <span>Get in touch</span>
                                </div>
                            </Link>
                        </li>
                        <li id="about">
                            <Link to="/menuContent/about">
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>about</h2>
                                        <span>mark antony</span>
                                </div>
                            </Link>
                        </li>
                        <li id="services">
                            <Link to="/menuContent/services" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Services</h2>
                                        <span>Legal Services</span>
                                </div>
                            </Link>
                        </li>
                        <li id="clients">
                            <Link to="/menuContent/clients" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Clients</h2>
                                        <span>Testimonials</span>
                                </div>
                            </Link>
                        </li>
                        <li id="practice">
                            <Link to="/menuContent/practice" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Practice</h2>
                                        <span>Practice Of Law</span>
                                </div>
                            </Link>
                        </li>
                        <li id="contact">
                            <Link to="/menuContent/contact" >
                                <div className="img-container">
                                    <div className="menu_img_item">
                                    </div>
                                </div>
                                
                                <div className="menu-item-bottom">
                                    <span className="img-span"></span>
                                </div>
                                <div className="menu-item-content">
                                        <i></i>
                                        <h2>Contact</h2>
                                        <span>Get in touch</span>
                                </div>
                            </Link>
                        </li>


                    </Slider>

                </div>
            </div>
        </div>
    )
  }
}