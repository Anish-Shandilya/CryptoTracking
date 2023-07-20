import React from "react";
import "./Footer.css";

const Footer = () =>{

    return(
        <div className="footer-section">
            <div className="address-section">
                <h3 className="heading">Address</h3>
                <div className="address-details">
                    <i className="fas fa-map-marker-alt"></i>
                    <address>206 ,2nd floor ,Tower B ,Millenium Plaza , Sector 27 , Gurgaon , Haryana - 122009</address>
                </div>
            </div>
            <div className="social-link-section">
                <h3 className="heading">Social Link</h3>
                <div>
                    <a className="social-link" target="_blank" href="https://www.linkedin.com/company/finmapp/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-link" target="_blank" href="https://twitter.com/FinMapp">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-link" target="_blank" href="https://www.facebook.com/finmappofficial/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
            <div className="quick-link-section">
                <h3 className="heading">Quick Links</h3>
                <div>
                    <ul className="quick-link-list">
                        <li>
                            <a className="quick-links" target="_blank" href="https://www.w3schools.com/html/">Html</a>
                        </li>
                        <li>
                            <a className="quick-links" target="_blank" href="https://www.w3schools.com/css/default.asp">CSS</a>
                        </li>
                        <li>
                            <a className="quick-links" target="_blank" href="https://fontawesome.com/">Icon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer; 