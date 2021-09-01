import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "../styles/Home.scss";
import Me from "../assets/me.jpg";
import logo from "../assets/pics/logo.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const HomeScreen = () => {
  // const textRef = useRef();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1000,
  //     startDelay: 500,
  //     cursorChar: "|",
  //     backSpeed: 50,
  //     typeSpeed: 120,
  //     strings: ["Web Developer", "Mentor", "Entrepreneur", "Colognoisseur"],
  //   });
  // }, []);
  return (
    <div className="main">
      {/* <Header /> */}
      <Navbar />
      <section className="home-section align-items-center ">
        <div className="container ">
          <div className="row align-items-center ">
            <div className="home-text">
              <p>Hello, I'm</p>
              <h1>Amar Mohamud</h1>
              <h2>Front End Developer</h2>
              {/* <div className="moving"> */}
              {/* <h2 ref={textRef}></h2> */}
              {/* </div> */}

              <a href="#" className="btn">
                About me
              </a>
              <a href="#" className="btn">
                My Portfolio
              </a>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src={logo} alt="portfolio-pic" className="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
