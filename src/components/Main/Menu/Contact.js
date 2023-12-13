import React from "react";
import PageTitle from "./PageTitle";
import ContactForm from "./contactForm";

export default function Contact(){
    return(
        <div id="Contact">
            <PageTitle pageName="contact-page"/>
            <div className="contact-main">
                <div className="contact-info">
                    <h2 className="contact-div-title">General inquiries</h2>
                    <div className="contact-info-item">
                        <h5 className="contact-info-title">Phone</h5>
                        <div className="contact-info-content">
                            <p>Local 1.800.353.252</p>
                            <p>International 1.900.353.252</p>
                            <p>Monday - Friday 8.30 a.m. - 6.00 p.m. CET</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <h5 className="contact-info-title">Fax</h5>
                        <div className="contact-info-content">
                            <p>Local 1.800.353.253</p>
                            <p>IInternational 1.900.353.253</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <h5 className="contact-info-title">Postal address</h5>
                        <div className="contact-info-content">
                            <p><b>The Warehouse Office Suites</b></p>
                            <p>17a Ravensbury Terrace</p>
                            <p>London SW24 AB-5</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className="contact-div-title">Contact form</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}