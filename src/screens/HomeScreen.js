import React from "react";
import "../styles/Home.scss";
import Me from "../assets/me.jpg";
const HomeScreen = () => {
  return (
    <div className="main">
      <section className="home-section align-items-center">
        <div className="container">
          <div className="row align-items-center ">
            <div className="home-text">
              <p>Hello, I'm</p>
              <h1>Amar Mohamud</h1>
              <h2>Front-End Web developer</h2>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src={Me} alt="portfolio-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
