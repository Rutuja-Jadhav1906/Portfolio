import React from "react";
import "./Home.css";
import myImage from "../../assets/me.jfif";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/projects");
  };

  const handleClick2 = () => {
    navigate("/contact");
  };
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Rutuja Deepak Jadhav</span>
            </h1>
            <p>
              I’m a passionate Full-Stack Developer with expertise in MERN stack
              development and a strong foundation in Java programming. With a
              problem-solving mindset, I specialize in crafting efficient web
              applications while leveraging my knowledge of data structures and
              algorithms to solve complex problems. Currently, as a final-year
              Computer Engineering student at Amrutvahini College of
              Engineering, I’m continuously honing my skills to stay ahead in
              the ever-evolving tech landscape.
            </p>
            <div className="cta-buttons">
              <button className="btn primary" onClick={handleClick1}>
                View Portfolio
              </button>
              <button className="btn secondary" onClick={handleClick2}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={myImage} alt="Rutuja Deepak Jadhav" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
