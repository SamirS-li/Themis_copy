// import React, { useEffect, useRef, useState } from "react";
import FooterNews from "./Footer_news";
import Testimonials from "./Testimonial";

export default function Footer() {


  return (
    <div id="footer">
      <div className="footer-container">
        {/* < <  footer news  > > */}
        <FooterNews />
        {/* < <  footer testimonials  > > */}
        <Testimonials />
        {/* < <  footer legal  > > */}
        <div className="footer-legal">
          <div className="footer-title">Legal topics</div>
          <div className="legal-main">
            <ul className="legal-list">
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
                <a href="aa">Car Accidents</a>
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
      </div>
    </div>
  );
}
