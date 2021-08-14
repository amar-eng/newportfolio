import React from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
const About = () => {
  return (
    <div className="main">
      <section className="about-section sec-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>About me</h2>
            </div>
          </div>
          {/* <div className="row">
                  <div className="about-img">
                      <div className="img-box">
                          
                      </div>
                  </div>
              </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
