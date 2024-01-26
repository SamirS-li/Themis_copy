import React from "react";
import { motion } from "framer-motion";
import PageTitle from "./PageTitle";
import img_1 from "../../../image/mainMenu/services-page/services_img1.jpg";
import img2_2 from "../../../image/mainMenu/services-page/services_img2.jpg";
import img3_3 from "../../../image/mainMenu/services-page/services_img3.jpg";

export default function Services() {
    return (
        <motion.div
            id="services-page"
            initial={{ left: "100%", transitionDuration: "0.1s" }}
            animate={{ left: 0 }}
            exit={{ left: "100%", transitionDuration: "0.1s" }}
        >
            <PageTitle pageName="Services" />
            <div className="services-main">
                <div className="services-section">

                    <img alt="bb" className="services-image" src={img_1} />

                    <div className="services-info">
                        <h3 className="servces-info-title">business law</h3>
                        <p className="services-info-content">
                            Cras convallis consequat leo dignissim tristique. Maecenas
                            faucibus, lacus vel semper sollicitudin, nisl dolor lacinia erat,
                            eget tempus velit felis eu turpis. Sed rutrum eleifend convallis.
                            Donec accumsan, mi at bibendum tempus, arcu arcu ultricies ante,
                            pretiquis.
                        </p>
                    </div>
                </div>
                <div className="services-section">

                    <img alt="bb" className="services-image" src={img2_2} />

                    <div className="services-info">
                        <h3 className="servces-info-title">Criminal Law</h3>
                        <p className="services-info-content">
                            Nulla tincidunt pulvinar tortor quis dictum. Nunc aliquet
                            ullamcorper sodales. Morbi pulvinar, libero in scelerisque
                            commodo, purus mi sollicitudin turpis, et feugiat massa lacus in
                            justo. Duis quis lectus lorem, non consequat mauris. Fusce id
                            ipsum vel odio.
                        </p>
                    </div>
                </div>
                <div className="services-section">

                    <img alt="bb" className="services-image" src={img3_3} />

                    <div className="services-info">
                        <h3 className="servces-info-title">Civil Law</h3>
                        <p className="services-info-content">
                            Aenean ut enim sit amet arcu cursus eleifend. Lorem ipsum dolor
                            sit amet, consect adipiscing elit. Praesent pharetra metus
                            interdum arcu blandit auctor. Integer suscipi mi eget mi molestie
                            bibendum. Nullam faucibus arcu sit amet nisi tincidunt volutp co.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
