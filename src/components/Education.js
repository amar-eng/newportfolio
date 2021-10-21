import React from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
const Education = () => {
  return (
    <div className="main">
      <div className="tab-content active " id="education">
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">Sept. 2020 - Dec. 2020</span>
            <h4>
              Diploma - <span>BrainStation</span>
            </h4>
            <p>
              Completed the full stack web development bootcamp diploma at
              BrainStation where I developed skills in Responsive Design,
              JavaScript and its Frameworks, and Git.
            </p>
          </div>
          <div className="timeline-item">
            <span className="date">2014 - 2020</span>
            <h4>
              bachelor of Applied Science (B.A.Sc) -{" "}
              <span>university of regina</span>
            </h4>
            <p>
              A graduate from the University of Regina's Software Systems
              Engineering program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
