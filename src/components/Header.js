import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row flex-end">
          <button className="nav-toggler">
            <span></span>
          </button>
          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <li>
                  <Link to="/" className="nav-item link-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-item link-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="nav-item link-item">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-item link-item">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
