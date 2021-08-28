import React from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
const Work = () => {
  return (
    <div className="main">
      <div className="tab-content active " id="experience">
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">2013 - 2016</span>
            <h4>
              web developer - <span>the webshala</span>
            </h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              molestias, delectus cupiditate cumque commodi adipisci.
            </p>
          </div>
          <div className="timeline-item">
            <span className="date">2013 - 2016</span>
            <h4>
              web developer - <span>the webshala</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              molestias, delectus cupiditate cumque commodi adipisci.
            </p>
          </div>
          <div className="timeline-item">
            <span className="date">2013 - 2016</span>
            <h4>
              web developer - <span>the webshala</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              molestias, delectus cupiditate cumque commodi adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
