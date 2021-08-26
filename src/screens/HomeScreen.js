import React from "react";
import "../styles/Home.scss";
import Me from "../assets/me.jpg";
import logo from "../assets/pics/logo.png";
import Header from "../components/Header";
const HomeScreen = () => {
  return (
    <div className="main">
      <Header />
      <section className="home-section align-items-center ">
        <div className="container">
          <div className="row align-items-center ">
            <div className="home-text">
              <p>Hello, I'm</p>
              <h1>Amar Mohamud</h1>
              <h2>Front-End Web developer</h2>
              <a href="#" className="btn">
                About me
              </a>
              <a href="#" className="btn">
                My Portfolio
              </a>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src={logo} alt="portfolio-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
