import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="address">
            <p>
              <b>Address:</b>
              <br />
              <i className="fa-solid fa-location-dot"></i> Sangamner,
              Maharashtra
            </p>
          </div>
          <div className="contact-info">
            <b>Contact Me:</b>
            <br />
            <p>
              <i className="fa-solid fa-phone"></i> 8329204167
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              rutujajadhav1906@gmail.com
            </p>
            <p>
              <i className="fa-brands fa-linkedin"></i> @rutuja_jadhav
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Rutuja Jadhav | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
