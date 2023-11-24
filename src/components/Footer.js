import React from "react";

export default function Footer(){
    return(
        <div id="footer">
            <div className="footer-container">
                <div className="footer-news">
                    <div className="footer-title">Latest news</div>
                    <div className="footer-news-main">
                        <ul className="news-list">
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-testimonials"></div>
                <div className="footer-legal">
                    <div className="footer-title">Legal topics</div>
                    <div className="legal-main">
                      <ul className="legal-list">
                            <li>
                                <a href="#">Business Law</a>
                            </li>
                            <li>
                                <a href="#">Consumer</a>
                            </li>
                            <li>
                                <a href="#">Criminal Law</a>
                            </li>
                            <li>
                                <a href="#">Child Custody</a>
                            </li>
                            <li>
                                <a href="#">Civil Rights</a>
                            </li>
                            <li>
                                <a href="#">Bankrupcty</a>
                            </li>
                            <li>
                                <a href="#">Education</a>
                            </li>
                            <li>
                                <a href="#">Car Accidents</a>
                            </li>
                            <li>
                                <a href="#">Divorce</a>
                            </li>
                            <li>
                                <a href="#">Discrimination</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}