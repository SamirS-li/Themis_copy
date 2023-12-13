import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';



export default class MainMenu extends React.Component{

    // componentDidMount(){
    //     const mainListAddClass = document.querySelector('.menu-list')

    //     mainListAddClass.addEventListener('click',(e)=>{
    //             mainListAddClass.classList.add('List-animation');
    //             console.log(e.target)
    //             console.log('==== click ====')
    //         })
            
    // }
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 5,
            slidesToScroll: 1,
          };

          

          const mainListAddClass = ()=>{
            const mainList = document.querySelector('.menu-list')
            console.log('mainlist : ',mainList)
            mainList.classList.add('List-animation')
          }

          
    
    return(
        <motion.div 
        id="MainMenu"
        initial={{}}
        animate={{}}
        exit={{transitionDuration:"0.3s"}}
        transition={{delay:0,duration:1.3}}
        >
            <div className="mainMenu-container">
                <div className="menu-main-div">

                    <Slider {...settings} className="menu-list" >
                        <motion.li id="about"
                        initial={{height:"450px",left:"792px",zIndex:1,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0}}
                        exit={{height:0,transitionDuration:"0.8s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/about" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="services"
                        initial={{height:"450px",left:"594px",zIndex:2,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0 }}
                        exit={{height:0,transitionDuration:"0.5s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/services" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="clients"
                        initial={{height:"450px",left:"396px",zIndex:3,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0}}
                        exit={{height:0,transitionDuration:"0.3s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/clients" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="practice"
                        initial={{height:"450px",left:"198px",zIndex:4,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0 }}
                        exit={{height:0,transitionDuration:"0.4s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/practice" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="contact"
                        initial={{zIndex:5}}
                        animate={{}}
                        exit={{height:0,transitionDuration:"0.5s"}}
                        >
                            <Link to="/menuContent/contact" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="about"
                        initial={{height:"450px",left:"792px",zIndex:1,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0}}
                        exit={{height:0,transitionDuration:"0.8s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/about" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="services"
                        initial={{height:"450px",left:"594px",zIndex:2,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0 }}
                        exit={{height:0,transitionDuration:"0.5s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/services" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="clients"
                        initial={{height:"450px",left:"396px",zIndex:3,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0}}
                        exit={{height:0,transitionDuration:"0.3s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/clients" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="practice"
                        initial={{height:"450px",left:"198px",zIndex:4,transitionDuration:"0.7s",transitionDelay:"0.8s"}}
                        animate={{ left:0 }}
                        exit={{height:0,transitionDuration:"0.4s",transitionDelay:0}}
                        >
                            <Link to="/menuContent/practice" onClick={mainListAddClass}>
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
                        </motion.li>
                        <motion.li id="contact"
                        initial={{zIndex:5}}
                        animate={{}}
                        exit={{height:0,transitionDuration:"0.5s"}}
                        >
                            <Link to="/menuContent/contact" onClick={mainListAddClass}>
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
                        </motion.li>
                       


                    </Slider>

                </div>
            </div>
        </motion.div>
    )
  }
}