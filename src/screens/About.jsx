import React from "react";
import { useState } from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import Me from "../assets/me.jpg";
import Work from "../components/Work";
import Education from "../components/Education";
const About = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  return (
    <div className="about-body">
      <section className="about-section sec-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>about me</h2>
            </div>
          </div>

          <div className="row">
            <div className="about-img">
              <div className="imgg-box">
                <img src={Me} alt="portfolio-pic" className="about-pic" />
              </div>
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nihil dicta ab placeat similique ipsum, ut est itaque
                xt obcaecati modi.
              </p>
              <h3 className="about-skills">skills</h3>
              <div className="skills">
                <div className="skill-item">html</div>
                <div className="skill-item">css</div>
                <div className="skill-item">javascript</div>
                <div className="skill-item">bootstrap</div>
                <div className="skill-item">php</div>
                <div className="skill-item">java</div>
                <div className="skill-item">python</div>
                <div className="skill-item">wordpress</div>
                <div className="skill-item">c</div>
                <div className="skill-item">c++</div>
              </div>
              <div className="about-tabs">
                <button
                  type="button"
                  className="tab-item  "
                  //   data-target="#education"
                  onClick={() => setIsClicked(!isClicked)}
                >
                  education
                </button>
                <button
                  type="button"
                  className="tab-item "
                  //   data-target="#experience"
                  onClick={() => setIsClicked(!isClicked)}
                >
                  experience
                </button>
              </div>
              {isClicked ? <Work /> : <Education />}

              <a href="#" target="_blank" class="btn">
                download Resume
              </a>
              <a href="#" class="btn link-item">
                contact me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
