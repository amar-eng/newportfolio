import React from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
const Work = () => {
  return (
    <div className="main">
      <div className="tab-content active " id="experience">
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">Dec 2020 - Present</span>
            <h4>
              Founder/ Full Stack Developer - <span>Colognoisseurs</span>
            </h4>
            <p>
              A startup that serves to provide affordable solutions to fragrance
              enthusiasts. My responsibilities are but not limited to leading a
              team of developers, designers, and digital marketers to create an
              application for a subscription based e-commerce buisness by the
              use of MERN stack and Figma.
            </p>
          </div>
          <div className="timeline-item">
            <span className="date">June 2020 - Sept. 2020</span>
            <h4>
              Web Developer - <span>Pronto Shop</span>
            </h4>
            <p>
              As a summer intern, I worked in a team mainly responsible for
              collecting data for the server side logic as well as some of the
              front end application with the use of HTML, CSS, and some
              JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
