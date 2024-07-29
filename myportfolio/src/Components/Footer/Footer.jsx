import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="address">
        <p>
          <b>Address:</b>
          <br />
          <i class="fa-solid fa-location-dot"></i>Sangamner, Maharashtra
        </p>
      </div>
      <div className="contact-info">
        <b>Contact Me:</b>
        <br />
        <p>
          <i class="fa-solid fa-phone"></i>8329204167
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i>rutujajadhav1906@gmail.com
        </p>
        <p>
          <i class="fa-brands fa-linkedin"></i>@rutuja_jadhav
        </p>
      </div>
    </div>
  );
};

export default Footer;
