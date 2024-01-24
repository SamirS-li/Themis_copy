import React from "react";
import { Link } from "react-router-dom";

export default function Footer_Bottom() {
  return (
    <div id="footer-bottom">
      <div className="container">
        <div className="footer-bottom-main">
          <div className="footer-copyright">
            <a href="aa">copyright 2012 mark anthony</a>
          </div>
          <div className="footer-bottom-menu">
            <ul>
              <li>
                <Link to="/menuContent/about">about</Link>
              </li>
              <li>
                <Link to="/menuContent/services">Services</Link>
              </li>
              <li>
                <Link to="/menuContent/clients">clients</Link>
              </li>
              <li>
                <Link to="/menuContent/practice">Practice</Link>
              </li>
              <li>
                <Link to="/menuContent/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
