import React from "react";
import { useState } from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import Me from "../assets/me.jpg";
import html from "../assets/pics/icons/html.png";
import css from "../assets/pics/icons/css.png";
import js from "../assets/pics/icons/js.png";
import react from "../assets/pics/icons/react.png";
import git from "../assets/pics/icons/git.png";
import mongo from "../assets/pics/icons/mongo.png";
import sass from "../assets/pics/icons/sasss.png";
import sql from "../assets/pics/icons/sql.png";
import matlab from "../assets/pics/icons/matlab.png";
import firebase from "../assets/pics/icons/firebase.png";
import node from "../assets/pics/icons/node.png";
import aws from "../assets/pics/icons/aws.png";
import Header from "../components/Header";
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
              <p className="about-cont">
                I enjoy creating things & re-inventing the wheel whether it be
                programming Javascript applications or finding solutions to real
                world problems.
              </p>
              <h3 className="about-skills">skills</h3>
              <div className="skills">
                <div className="skill-item">
                  <img src={html} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={css} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={js} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={react} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={sass} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={git} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={node} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={firebase} alt="html" className="skills-img fire" />
                </div>
                <div className="skill-item">
                  <img src={mongo} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={aws} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={matlab} alt="html" className="skills-img" />
                </div>
                <div className="skill-item">
                  <img src={sql} alt="html" className="skills-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
