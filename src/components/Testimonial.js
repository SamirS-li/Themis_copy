import React from "react";
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';


export default class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 650,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical:true
      };
      return (
        
        <div className="footer-testimonials">
          <div className="footer-title">Testimonials</div>
          <div className="footer-testimonials-main">
            <a className="carousel-prev" href="#"></a>
            <a className="carousel-next" href="#"></a>
            <Slider {...settings} className="testimonials-list Carousel">
                 <li>
                    <div className="testimonials-list-content">
                        <h6>Joe Doe, Director, DeCompany</h6>
                        <p>Sed semper, risus eget laoreet dictum, neques velit gravida nunc, id eleifend er.</p>
                    </div>
                </li>

                <li className="pager">
                    <div className="testimonials-list-content">
                        <h6>Gemma Britt, Smooth Comm</h6>
                        <p>Nulla lacinia volutpat dignissim. Curabit cursus lobortis consectetur. Maurisase.</p>
                    </div>
                </li>

                <li className="pager">
                    <div className="testimonials-list-content">
                        <h6>Alex Cruise, Suites Ltd</h6>
                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                    </div>
                </li>

                <li className="pager">
                    <div className="testimonials-list-content">
                        <h6>Ann Green, Deloitte Greece</h6>
                        <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
                    </div>
                </li>

                <li className="pager">
                    <div className="testimonials-list-content">
                        <h6>Alex Cruise, Suites Ltd</h6>
                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                    </div>
                </li>

                <li>
                    <div className="testimonials-list-content">
                        <h6>Ann Green, Deloitte Greece</h6>
                        <p>Suspendisse sit amet nisi est. Ut id eros tortorad blandit tincidunt. Vel su.</p>
                    </div>
                </li><li>
                    <div className="testimonials-list-content">
                        <h6>Alex Cruise, Suites Ltd</h6>
                        <p>Quisque semper congue elit eu aliquam. Aenean dolor mi, gravida eget fermente.</p>
                    </div>
                </li>
            </Slider>
        </div>
    </div>

      );
    }
  }