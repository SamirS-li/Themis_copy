import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 650,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      autoplay:true,
      autoplaySpeed:2000
    };
    return (
      <div className="footer-news">
        <div className="footer-title">Latest news</div>
        <div className="footer-news-main">
          {/* <i className="carousel-prev"></i>
          <i className="carousel-next"></i> */}

          <Slider {...settings} className="news-list Carousel">
             <li>
              <div className="news-list-date">
                01 <span>oct</span>
              </div>
              <div className="news-list-content">
                <h6>Fusce erat massa, euismod id con</h6>
                <p>
                  Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi
                  pellentesque fentum ar.
                </p>
              </div>
            </li>

            <li>
              <div className="news-list-date">
                02<span>DEC</span>
              </div>
              <div className="news-list-content">
                <h6>Mauris rhoncus, diam non soda</h6>
                <p>
                  Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu
                  aliquet lorem tempor.
                </p>
              </div>
            </li>

            <li>
              <div className="news-list-date">
                03<span>DEC</span>
              </div>
              <div className="news-list-content">
                <h6>Sed accumsan lobortis adipiscing</h6>
                <p>
                  Fusce quam leo, ultricies non malesuad quis, hendrerit in
                  nulla. Proin eu lectusle.
                </p>
              </div>
            </li>

            <li>
              <div className="news-list-date">
                04<span>NOV</span>
              </div>
              <div className="news-list-content">
                <h6>Nulla malesuada massa eu arcu</h6>
                <p>
                  Vivamus tincidunt enim eu mauris feugi rutrum id id lectus.
                  Donec nec nulla duil.
                </p>
              </div>
            </li>
            <li>
              <div className="news-list-date">
                05<span>NOV</span>
              </div>
              <div className="news-list-content">
                <h6>Nulla malesuada massa eu arcu</h6>
                <p>
                  Vivamus tincidunt enim eu mauris feugi rutrum id id lectus.
                  Donec nec nulla duil.
                </p>
              </div>
            </li>
          </Slider>
        </div>
      </div>
     
    );
  }
}
