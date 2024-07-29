import React from "react";
import "./Home.css";
import my_image from "../../assets/krishna.jpeg";

const Home = () => {
  return (
    <div className="home-body">
      <div className="home">
        <div className="my-image">
          <img
            src={my_image}
            style={{ height: "400px", width: "400px", borderRadius: "50%" }}
          />
        </div>
        <div className="home-info">
          <h1>Hello , I'm Rutuja Deepak Jadhav</h1>
          <h5>
            I am currently a final year student of Computer Engineering at
            Amrutvahini College of Engineering. I specialize in full-stack
            development and have a passion for creating dynamic and efficient
            web applications. With a strong foundation in Java, MySQL, MongoDB,
            React JS, Express JS, and Node JS.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
