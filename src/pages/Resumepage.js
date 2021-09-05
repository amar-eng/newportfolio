import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Styles.scss";
import pdf from "../assets/pdf/my-CV.pdf";
import Work from "../components/Work";
import Education from "../components/Education";
const Resumepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow">
            <div className="title">
              <h2>Resume</h2>
            </div>
          </div>
          <div className="roow about-row">
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

              <button
                target="_blank"
                class="bttn res-button "
                onClick={() => window.open(`${pdf}`)}
              >
                View full Resume
              </button>
              <Link to="/contact" class="bttn res-button ">
                contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resumepage;
