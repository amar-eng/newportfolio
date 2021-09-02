import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Navbar from "../components/Navbar";
import logo from "../assets/pics/logo.png";

import "./Styles.scss";
const Homepage = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      startDelay: 500,
      cursorChar: "|",
      backSpeed: 50,
      typeSpeed: 120,
      strings: ["Front Developer", "Mentor", "Entrepreneur", "Colognoisseur"],
    });
  }, []);
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow home__container">
            <div className="home__text">
              {/* <p>Hi, I'm a</p> */}
              {/* <h1>Amar Mohamud</h1> */}
              {/* <h2 ref={textRef}></h2> */}
              <h2>Front End Developer</h2>
              <a href="#" className="bttn">
                About me
              </a>
              <a href="#" className="bttn">
                My Portfolio
              </a>
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
