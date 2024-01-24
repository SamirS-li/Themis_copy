import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import PageTitle from "./PageTitle";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import img1 from "../../../image/mainMenu/about-page/slider_img1_thumb.jpg";
import img2 from "../../../image/mainMenu/about-page/slider_img2_thumb.jpg";
import img3 from "../../../image/mainMenu/about-page/slider_img3_thumb.jpg";
import img1_2 from "../../../image/mainMenu/about-page/slider_img1.jpg";
import img2_2 from "../../../image/mainMenu/about-page/slider_img2.jpg";
import img3_2 from "../../../image/mainMenu/about-page/slider_img3.jpg";

export default class About extends React.Component {
  componentDidMount() {
    let imgList2 = document.querySelector(".img-list2");
    let imgList1 = document.querySelector(".img-list1");

    imgList1.addEventListener("click", (e) => {
      if (!e.target.type) {
        imgList2.style.display = "block";
        imgList1.style.display = "none";
      }
    });

    imgList2.addEventListener("click", (e) => {
      if (!e.target.type) {
        imgList2.style.display = "none";
        imgList1.style.display = "block";
      }
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };

    return (
      <motion.div
        id="about-page"
        initial={{ left: "103%", transitionDuration: "0.1s" }}
        animate={{ left: 0 }}
        exit={{ left: "100%", transitionDuration: "0.01s" }}
      >
        <PageTitle pageName="About" />

        <div className="about-main">
          <div className="about-personal-info">
            <div className="about-image">
              <Slider {...settings} className="about-img-list img-list1">
                <li>
                  <a href="aa">
                    <img src={img1} alt="aa" />
                  </a>
                </li>
                <li>
                  <a href="aa">
                    <img src={img2} alt="aa" />
                  </a>
                </li>
                <li>
                  <a href="aa">
                    <img src={img3} alt="aa" />
                  </a>
                </li>
              </Slider>

              <Slider
                style={{ display: "none" }}
                {...settings}
                className="about-img-list img-list2"
              >
                <li>
                  <a href="aa">
                    <img src={img1_2} alt="aa" />
                  </a>
                </li>
                <li>
                  <a href="aa">
                    <img src={img2_2} alt="aa" />
                  </a>
                </li>
                <li>
                  <a href="aa">
                    <img src={img3_2} alt="aa" />
                  </a>
                </li>
              </Slider>
            </div>
            <div className="about-info">
              <h3>mark anthony</h3>
              <p>
                Ut nec ante nisl, in vulputate odio. Proin euismod, libero quis
                sceleri elementum, tortor augue ultricies nunc, at pretium purus
                urna in est. Curab dignissim, lectus in laoreet porta, ipsum
                nibh lacinia diam, eget.
              </p>
              <ul class="legal-list">
                <li>
                  <a href="aa">Business Law</a>
                </li>
                <li>
                  <a href="aa">Consumer</a>
                </li>
                <li>
                  <a href="aa">Criminal Law</a>
                </li>
                <li>
                  <a href="aa">Child Custody</a>
                </li>
                <li>
                  <a href="aa">Civil Rights</a>
                </li>
                <li>
                  <a href="aa">Bankrupcty</a>
                </li>
                <li>
                  <a href="aa">Education</a>
                </li>
                <li>
                  <a href="aa">Divorce</a>
                </li>
                <li>
                  <a href="aa">Discrimination</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-solutions">
            <div className="about-peronal-solution">
              <h3>Personal Solutions</h3>
              <p>
                Praesent at quam sem. Donec nec ipsum lacus. Dui mattis sodales
                elit, eu mattis lorem aliquam eu. Cura sollicitudin, d olor sit
                amet eleifend adipi, mi leo condimentum est, vitae tempor massa
                lac.
              </p>
            </div>
            <div className="about-insurance-solution">
              <h3>Insurance Solutions</h3>
              <p>
                Mauris dignissim lorem aliquet tellus tincidunt sed fringilla
                mauris hendrerit. Donec mollis, enim ac ac consequat, sapien
                libero faucibus neque, ne tristio odio ante vitae tortor.
                Phasellus interdum.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
