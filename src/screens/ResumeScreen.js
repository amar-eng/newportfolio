import React from "react";
import { useState } from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import Me from "../assets/me.jpg";
import Work from "../components/Work";
import Education from "../components/Education";
import Header from "../components/Header";
const ResumeScreen = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="main">
      <Header />
      <section className="about-section sec-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Resume</h2>
            </div>
          </div>

          <div className="row">
            <div className="about-img">
              <div className="imgg-box">
                <img src={Me} alt="portfolio-pic" className="about-pic" />
              </div>
            </div>
            <div className="about-text">
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

export default ResumeScreen;
