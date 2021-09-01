import React from "react";
import Navbar from "../components/Navbar";

const Aboutpage = () => {
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow">
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
                {/* <img src={logo} alt="portfolio-pic" className="image" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;