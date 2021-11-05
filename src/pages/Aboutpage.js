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
                <img src={Me} alt="Amar Mohamud" className="about__pic" />
              </div>
            </div>
            <div className="about-text">
              <p className="about-cont">
                Hi there! My name is Amar Mohamud and I am a technology
                enthusiast at heart pursuing a profession in Web Development by
                utilizing my record of providing innovative technical solutions.
                Ever since I got my first computer, I was obsessed with
                understanding its inner workings. I was even more so intrigued
                by the internet and how it works so a career in web development
                being my calling isn’t hard to conceptualize because its not
                only something Im good at but something I love! In the Resume
                section of my portfolio you will see my educational background
                but till then please explore down below some of the skills I’ve
                acquired along the way.
              </p>

              <div className="wrapper">
                <div className="skill-container">
                  <img src={html} alt="html" className="skillImg" />
                </div>
                <div className="skill-container">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
