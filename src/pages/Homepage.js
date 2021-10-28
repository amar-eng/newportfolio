import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/pics/logo.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
      strings: [
        "Front-End Developer",
        "Mentor",
        "Entrepreneur",
        "Colognoisseur",
      ],
    });
  }, []);
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow home__container">
            <div className="home__text">
              <h2 ref={textRef} style={{ height: "5vh" }}>
                {" "}
              </h2>
              <div className="home-socials">
                <div className="home-icons">
                  <AiFillGithub
                    style={{
                      color: "#4078c0",

                      cursor: "pointer",
                    }}
                    onClick={() => window.open(`https://github.com/amar-eng`)}
                  />
                </div>
                <div className="home-icons">
                  <AiFillLinkedin
                    style={{
                      color: " #0e76a8",

                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(`https://www.linkedin.com/in/amar-mohamud/`)
                    }
                  />
                </div>
              </div>
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
