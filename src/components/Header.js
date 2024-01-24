import React from "react";
import logo from "../image/header_logo.png";

export default function Header() {
  return (
    <div id="Header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <img src={logo} alt="Logo" />
            <a href="#">
              <span className="header-title">mark anthony</span>
              <span className="header-subtitle">private lawyer</span>
            </a>
          </div>
          <div className="header-quote">
            <h5>Realize your constitutional right</h5>
            <h5>
              <span>with qualified help</span>
            </h5>
          </div>
        </div>
        <div className="header-right">
          <div className="header-phone">
            <h5>Phone</h5>
            <h5>
              <span>1.800.353.252</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
