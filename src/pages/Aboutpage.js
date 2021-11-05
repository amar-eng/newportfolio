import React from "react";
import Navbar from "../components/Navbar";
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
import fire from "../assets/pics/icons/fire.png";
import node from "../assets/pics/icons/node.png";
import aws from "../assets/pics/icons/aws.png";
import "./Styles.scss";

const Aboutpage = () => {
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow">
            <div className="title">
              <h2>about me</h2>
            </div>
          </div>
          <div className="roow about-row row-about">
            <div className="about__img">
              <div className="imgg__box">
                <img src={Me} alt="portfolio-pic" className="about__pic" />
              </div>
            </div>
            <div className="about-text">
              <p className="about-cont">
                Hi, My name is Amar Mohamud and I enjoy creating things &
                re-inventing the wheel whether it be programming Javascript
                applications or finding solutions to real-world problems. Below
                are some of the skills I’ve acquired along the way.
              </p>

              <div className="wrapper">
                {/* <div className="skill-container"> */}
                <img src={html} alt="html" className="skillImg" />
                <img src={css} alt="html" className="skillImg" />
                <img src={js} alt="html" className="skillImg" />
                <img src={react} alt="html" className="skillImg" />
                <img src={sass} alt="html" className="skillImg" />
                <img src={git} alt="html" className="skillImg" />
                <img src={node} alt="html" className="skillImg" />
                <img src={fire} alt="html" className="skillImg fire" />
                <img src={mongo} alt="html" className="skillImg" />
                <img src={aws} alt="html" className="skillImg" />
                <img src={matlab} alt="html" className="skillImg" />
                <img src={sql} alt="html" className="skillImg" />
                {/* </div> */}
                {/* <div className="skill-container">
                  <img src={css} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={js} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={react} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={sass} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={git} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={node} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={fire} alt="html" className="skillImg fire" />
                </div>
                <div className="skill-container">
                  <img src={mongo} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={aws} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={matlab} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
                  <img src={sql} alt="html" className="skillImg" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
