import React from "react";
import Navbar from "../components/Navbar";
import "./Styles.scss";
const Homepage = () => {
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
