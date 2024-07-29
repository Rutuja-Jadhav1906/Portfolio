import React from "react";
import "./About.css";
import my_image from "../../assets/krishna.jpeg";

const About = () => {
  return (
    <div className="container about">
      <div className="my-info">
        <div className="about-me">
          <div class="card about-me-card">
            <div class="card-body">
              <h5 class="card-title">About Me</h5>
              <p class="card-text">
                {/* Hi, I'm Rutuja Jadhav, a passionate and dedicated software
                developer with a strong foundation in full-stack development. As
                a fresher eager to make my mark in the tech industry, I have
                honed my skills in both frontend and backend technologies to
                build efficient, scalable, and user-friendly applications. */}
                I specialize in full-stack development with a strong foundation
                in both frontend and backend technologies. My technical
                expertise includes Java for problem solving, Data structures and
                implementing efficient algorithms and database management with
                MySQL and MongoDB. I am proficient in building dynamic user
                interfaces using React JS, and I have extensive experience with
                Express JS and Node JS for creating efficient server-side
                applications. I am passionate about continuous learning and
                strive to stay updated with the latest industry trends and best
                practices.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">How I started my journey?</h5>
              <p class="card-text">
                My journey in the world of programming started from first year
                of my engineering where I learnt about basics of python from
                where my interest in this field started increasing. In next
                years of my engineering I learn different programming languages
                like C++ and Java among which I decided to work with java, using
                which I've solved different types of problems and gained
                knowledge about data structures and algorithms. I learnt MERN
                stack in third year and from there my journey in development
                started and currently I'm building differnt projects using the
                technologies that I've learn so far.
              </p>
            </div>
          </div>
        </div>
        <div className="about-skills">
          <h3>My Skills</h3>
          <div className="about-skill">
            <p>Java</p>
            <hr style={{ width: "100%" }} />
          </div>
          <div className="about-skill">
            <p>React JS</p>
            <hr style={{ width: "78%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>Node JS</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>Express Js</p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>MySql</p>
            <hr style={{ width: "82%" }} />
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <hr style={{ width: "87%" }} />
          </div>
        </div>

        <div className="mywork" style={{ marginTop: "30px" }}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">My Work:</h5>
              <p class="card-text">
                Throughout my journey in the field of software development, I
                have achieved significant milestones and worked on various
                projects that highlight my skills and dedication. I have
                successfully solved over 135 problems on LeetCode, demonstrating
                my strong problem-solving abilities and proficiency in
                algorithms and data structures. In addition to my competitive
                programming accomplishments, I have extensive experience in web
                development, where I have built and maintained several dynamic
                and responsive web applications. Utilizing my expertise in
                frontend technologies like React JS, I create intuitive user
                interfaces, while my knowledge of backend technologies like Node
                JS and Express JS allows me to develop efficient and secure
                server-side applications. My work also includes designing and
                optimizing databases with MySQL and MongoDB to ensure robust and
                scalable solutions.
              </p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Strenths:</h5>
              <p class="card-text">
                <ul>
                  <li>
                    I'm passionate about solving different types of problems
                  </li>
                  <li>
                    I enjoy building unique and beautiful projects using my
                    development skills.
                  </li>
                  <li>
                    I've strong ability to convey ideas clearly and effectively,
                    facilitating seamless collaboration within teams.
                  </li>
                  <li>I can work effectively with team.</li>
                  <li>
                    I'm abaptable to various work environments , ensuring
                    productivity and performance in my setting
                  </li>
                  <li>
                    I'm proficient in identifying and resolving issues quickly
                    and efficiently.
                  </li>
                  <li>
                    I'm committed to staying updated with the latest
                    technologies and best practices in the software industry.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
