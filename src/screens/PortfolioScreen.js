import React from "react";
// import "../styles/Home.scss";
// import "../styles/About.scss";
// import "../styles/Portfolio.scss";

import Instock from "../assets/pics/instock.png";
const PortfolioScreen = () => {
  return (
    <div className="main">
      <section className="portfolio-section sec-padding" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>recent work</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-item-thumbnail">
            <img
              className="portimage"
              src={Instock}
              alt="portfolio item thumb"
            />
          </div>
          <h3 className="portfolio-item-title">education course website</h3>
          <button type="button" className="btn view-project-btn">
            view project
          </button>
          <div className="portfolio-item-details">
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                ab nobis eaque optio excepturi tempore, cumque porro ex natus
                repudiandae vero repellendus ipsa possimus illum quisquam hic
                vitae blanditiis, alias consequuntur? Necessitatibus ipsa ex
                fugit cupiditate a ea amet saepe.
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created - <span>4 Dec 2020</span>
                </li>
                <li>
                  technologies used - <span>Html, Css</span>
                </li>
                <li>
                  Role - <span>Frontend</span>
                </li>
                <li>
                  View Online -{" "}
                  <span>
                    <a href="#" target="_blank">
                      www.domain.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;
