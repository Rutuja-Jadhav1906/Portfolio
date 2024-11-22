import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-text">
          <h2>Hi, I'm Rutuja Deepak Jadhav</h2>
          <p>
            I am a passionate Full-Stack Developer and final-year Computer
            Engineering student at Amrutvahini College of Engineering. My
            journey started with Java, where I honed my problem-solving skills
            and mastered data structures and algorithms. Over time, I expanded
            my expertise to modern web technologies, specializing in the MERN
            stack (MongoDB, Express.js, React.js, and Node.js). These
            technologies enable me to build dynamic, scalable web applications,
            both frontend and backend. I am also proficient in JavaScript,
            MySQL, and MongoDB, and I continually strive to stay updated with
            the latest industry trends. My problem-solving mindset allows me to
            approach complex challenges with efficiency and precision. I am
            passionate about building impactful solutions and eager to
            collaborate on innovative projects.
          </p>
        </div>
      </div>

      <div className="about-info">
        <div className="about-card">
          <h5 className="about-card-title">How I Started My Journey?</h5>
          <p className="about-card-text">
            My programming journey started in the first year of my engineering,
            where I learned the basics of Python. My interest grew as I explored
            languages like C++ and Java. Later, I dived into the MERN stack,
            which laid the foundation for my development work. Today, I build
            innovative projects using the technologies I’ve learned.
          </p>
        </div>

        <div className="about-card">
          <h5 className="about-card-title">My Skills</h5>
          <div className="about-skill">
            <p>Java</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "78%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>Node JS</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>Express JS</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>MySQL</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "82%" }} />
            </div>
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <div className="skill-bar-container">
              <hr className="skill-bar" style={{ width: "87%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
