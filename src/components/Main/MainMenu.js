import React from "react";
import { Link } from "react-router-dom";



export default function MainMenu(){
    return(
        <div id="MainMenu">
            <div className="mainMenu-container">
                <div className="menu-main-div">
                    <ul className="menu-list">
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
                                        <h2>about</h2>
                                        <span>mark antony</span>
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
                                        <h2>about</h2>
                                        <span>mark antony</span>
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
                                        <h2>about</h2>
                                        <span>mark antony</span>
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
                                        <h2>about</h2>
                                        <span>mark antony</span>
                                </div>
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}