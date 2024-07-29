import React from "react";
import "./Project.css";
import my_image from "../../assets/download.jpeg";
import airbnb from "../../assets/Airbnb.png";

const Project = () => {
  return (
    <div className="container projects">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={my_image}
              class="img-fluid rounded-start rounded-end"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Project Name: Portfolio Website</h5>
              <p class="card-text">
                <p>
                  <b>Technologies Used:</b>
                  <br />
                  React Js, HTML, CSS, Web3 Forms,React Router Dom
                </p>
                <p className="project-info">
                  <b>Description of project:</b>
                  <br />
                  This project is a portfolio website build using React Js,
                  HTML, CSS. It gives information about me and my work. Also,
                  this project is specifically made to give more information
                  about me.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={my_image}
              class="img-fluid rounded-start rounded-end"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Project Name: Bakery Website</h5>
              <p class="card-text">
                <p>
                  <b>Technologies Used:</b>
                  <br /> Node Js,Express Js,MongoDB,Stripe Payment Gateway HTML,
                  CSS
                </p>
                <p className="project-info">
                  <b>Description of project:</b>
                  <br />
                  This project is a portfolio website build using React Js,
                  HTML, CSS. It gives information about me and my work. Also,
                  this project is specifically made to give more information
                  about me.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={airbnb}
              class="img-fluid rounded-start rounded-end"
              alt="..."
              style={{ height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Project Name: Airbnb Website Clone</h5>
              <p class="card-text">
                <p>
                  <b>Technologies Used:</b>
                  <br /> Node Js,Express Js,MongoDB,MongoDB Atlas,Multer,
                  Cloudinary, HTML, CSS
                </p>
                <p className="project-info">
                  <b>Description of project:</b>
                  <br />
                  This project is a portfolio website build using React Js,
                  HTML, CSS. It gives information about me and my work. Also,
                  this project is specifically made to give more information
                  about me.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={my_image}
              class="img-fluid rounded-start rounded-end"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Project Name: Weather App</h5>
              <p class="card-text">
                <p>
                  <b>Technologies Used:</b>
                  <br /> React Js,Material UI, HTML, CSS
                </p>
                <p className="project-info">
                  <b>Description of project:</b>
                  <br />
                  This project is a portfolio website build using React Js,
                  HTML, CSS. It gives information about me and my work. Also,
                  this project is specifically made to give more information
                  about me.
                </p>
                <p className="project-info"></p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={my_image}
              class="img-fluid rounded-start rounded-end"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Project Name: Pinterest Clone</h5>
              <p class="card-text">
                <p>
                  <b>Technologies Used:</b> React Js,Material UI, Node Js,
                  Express Js, MongoDB, MongoDB Atlas, Multer, Cloudinary, HTML,
                  CSS
                </p>
                <p className="project-info">
                  <b>Description of project:</b>
                  <br />
                  This project is a portfolio website build using React Js,
                  HTML, CSS. It gives information about me and my work. Also,
                  this project is specifically made to give more information
                  about me.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
