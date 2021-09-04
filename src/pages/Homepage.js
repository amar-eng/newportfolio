import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/pics/logo.png";

import "./Styles.scss";
const Homepage = () => {
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow home__container">
            <div className="home__text">
              {/* <p>Hi, I'm a</p> */}
              {/* <h1>Amar Mohamud</h1> */}

              <h2>Front End Developer</h2>
              <Link to="/about" className="bttn">
                About me
              </Link>
              <Link to="/portfolio" className="bttn">
                My Portfolio
              </Link>
            </div>
            <div className="home-image">
              <div className="image-box">
                <img src={logo} alt="portfolio-pic" className="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
