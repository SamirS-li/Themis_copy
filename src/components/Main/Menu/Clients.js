import React from "react";
import {motion} from "framer-motion"
import PageTitle from "./PageTitle"

export default function Clients(){
    return(
        <motion.div 
        id="clients-page"
        initial={{ left:"100%", transitionDuration:"0.1s"}}
        animate={{ left:0 }}
        exit={{left:"100%" ,transitionDuration:"0.01s"}}
        >
            <PageTitle pageName='Clients'/>
            <div className="clients-main">
                <h4 className="clients-title">Clients testimonials</h4>
                <div className="clients-testimonials">
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                    <div className="testimonials">
                        <h6 className="testimonial-name">John Carter & Ann Smith</h6>
                        <p className="testimonial-info">Etiam eleifend tortor at metus interdum ti. 
                        Suspendisse potenti. Maecenas a odio at lorem elementum molestie mollis a libero.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}