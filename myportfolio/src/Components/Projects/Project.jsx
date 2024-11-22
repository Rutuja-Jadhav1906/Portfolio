import React from "react";
import "./Project.css";
import bakery from "../../assets/bakery.png";
import airbnb from "../../assets/Airbnb.png";
import portfolio from "../../assets/portfolio.png";

const Project = () => {
  return (
    <div className="container projects">
      {/* Project 1 */}
      <div className="card mb-3">
        <img src={portfolio} alt="Portfolio Website" />
        <div className="card-body">
          <h5 className="card-title">Project Name: Portfolio Website</h5>
          <p>
            <b>Technologies Used:</b>
            <br />
            React Js, HTML, CSS, Web3 Forms, React Router Dom
          </p>
          <p className="project-info">
            <b>Description of project:</b>
            <br />
            This is my personal portfolio website showcasing my skills,
            projects, and achievements as a developer.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="card mb-3">
        <img src={bakery} alt="Bakery Website" />
        <div className="card-body">
          <h5 className="card-title">Project Name: Bakery Website</h5>
          <p>
            <b>Technologies Used:</b>
            <br />
            Node Js, Express Js, MongoDB, Stripe Payment Gateway
          </p>
          <p className="project-info">
            <b>Description of project:</b>
            <br />
            An online bakery website where users can browse and purchase bakery
            items, with secure payment integration.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="card mb-3">
        <img src={airbnb} alt="Airbnb Clone" />
        <div className="card-body">
          <h5 className="card-title">Project Name: Airbnb Website Clone</h5>
          <p>
            <b>Technologies Used:</b>
            <br />
            Node Js, Express Js, MongoDB, Multer, Cloudinary
          </p>
          <p className="project-info">
            <b>Description of project:</b>
            <br />A clone of the Airbnb website, featuring user authentication,
            property listings, and booking functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
