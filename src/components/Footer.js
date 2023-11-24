import React from "react";

export default function Footer(){
    return(
        <div id="footer">
            <div className="footer-container">
                {/* < <  footer news  > > */}
                <div className="footer-news">
                    <div className="footer-title">Latest news</div>
                    <div className="footer-news-main">
                        <a className="carousel-prev" href="#"></a>
                        <a className="carousel-next" href="#"></a>
                        <ul className="news-list">
                             <li>
                                <div className="news-list-date">
                                    17<span>oct</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Fusce erat massa, euismod id con</h6>
                                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                                </div>
                            </li>

                            <li className="pager">
                                <div className="news-list-date">
                                    27<span>DEC</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Mauris rhoncus, diam non soda</h6>
                                    <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                                </div>
                            </li>

                            <li className="pager">
                                <div className="news-list-date">
                                    01<span>DEC</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Sed accumsan lobortis adipiscing</h6>
                                    <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                                </div>
                            </li>

                            <li className="pager">
                                <div className="news-list-date">
                                    11<span>NOV</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Nulla malesuada massa eu arcu</h6>
                                    <p>Vivamus tincidunt enim eu mauris feugi rutrum id id lectus. Donec nec nulla duil.</p>
                                </div>
                            </li>

                            <li className="pager">
                                <div className="news-list-date">
                                    17<span>OCT</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Fusce erat massa, euismod id con</h6>
                                    <p>Fusce velit mi, aliquam id volutpat in, ulc nec urna. Morbi pellentesque fentum ar.</p>
                                </div>
                            </li>

                            <li>
                                <div className="news-list-date">
                                    27<span>DEC</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Mauris rhoncus, diam non soda</h6>
                                    <p>Sed eget aliquet ipsum. Nunc cursus lig ut nisl egestas eu aliquet lorem tempor.</p>
                                </div>
                            </li><li>
                                <div className="news-list-date">
                                    01<span>DEC</span>
                                </div>
                                <div className="news-list-content">
                                    <h6>Sed accumsan lobortis adipiscing</h6>
                                    <p>Fusce quam leo, ultricies non malesuad quis, hendrerit in nulla. Proin eu lectusle.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* < <  footer testimonials  > > */}
                <div className="footer-testimonials">
                <div className="footer-title">Testimonials</div>
                    <div className="footer-testimonials-main">
                        <a className="carousel-prev" href="#"></a>
                        <a className="carousel-next" href="#"></a>
                        <ul className="testimonials-list">
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
                        </ul>
                    </div>
                </div>
                {/* < <  footer legal  > > */}
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