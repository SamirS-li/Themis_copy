import React from "react";
import Slider from "react-slick";
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import img1 from '../../../image/mainMenu/about-page/slider_img1_thumb.jpg';
import img2 from '../../../image/mainMenu/about-page/slider_img2_thumb.jpg';
import img3 from '../../../image/mainMenu/about-page/slider_img3_thumb.jpg';
import img1_2 from '../../../image/mainMenu/about-page/slider_img1.jpg';
import img2_2 from '../../../image/mainMenu/about-page/slider_img2.jpg';
import img3_2 from '../../../image/mainMenu/about-page/slider_img3.jpg';



export default class About extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade:true,
        };
        
    

        return(
        <div id="about-page">
            <h2>About</h2>
            <div className="about-main">
                <div className="about-personal-info">
                    <div className="about-image">
                        <Slider {...settings} className="about-img-list img-list1" >
                            <li><a href=""><img src={img1} alt="" /></a></li>
                            <li><a href=""><img src={img2} alt="" /></a></li>
                            <li><a href=""><img src={img3} alt="" /></a></li>
                        </Slider>
                        {/* <Slider {...settings} className="about-img-list img-list2">
                            <li><a href=""><img src={img1_2} alt="" /></a></li>
                            <li><a href=""><img src={img2_2} alt="" /></a></li>
                            <li><a href=""><img src={img3_2} alt="" /></a></li>
                        </Slider> */}
                    </div>
                    <div className="about-info">
                        <h3>mark anthony</h3>
                        <p>Ut nec ante nisl, in vulputate odio. Proin euismod, libero quis sceleri elementum, tortor 
                            augue ultricies nunc, at pretium purus urna in est. 
                            Curab dignissim, lectus in laoreet porta, ipsum nibh lacinia diam, eget.</p>
                        <ul class="legal-list">
                            <li><a href="#">Business Law</a></li>
                            <li><a href="#">Consumer</a></li>
                            <li><a href="#">Criminal Law</a></li>
                            <li><a href="#">Child Custody</a></li>
                            <li><a href="#">Civil Rights</a></li>
                            <li><a href="#">Bankrupcty</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Divorce</a></li>
                            <li><a href="#">Discrimination</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="about-solutions">
                    <div className="about-peronal-solution">
                        <h3>Personal Solutions</h3>
                        <p>Praesent at quam sem. Donec nec ipsum lacus. Dui mattis sodales elit, eu mattis lorem aliquam eu. Cura sollicitudin, d
                            olor sit amet eleifend adipi, mi leo condimentum est, vitae tempor massa lac.
                        </p>
                    </div>
                    <div className="about-insurance-solution">
                        <h3>Insurance Solutions</h3>
                        <p>Mauris dignissim lorem aliquet tellus tincidunt sed fringilla mauris hendrerit. 
                            Donec mollis, enim ac ac consequat, sapien libero faucibus neque, ne tristio odio ante vitae tortor. 
                            Phasellus interdum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}