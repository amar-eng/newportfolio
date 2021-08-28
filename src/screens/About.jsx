import React from "react";
import { useState } from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import Me from "../assets/me.jpg";
import Header from "../components/Header";
import Work from "../components/Work";
import Education from "../components/Education";
const About = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="main">
      <Header />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
