import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import "../styles/Home.scss";

import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const show = () => setSidebar(!sidebar);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row flex-end">
            <div className="navbar" onClick={show}>
              <Link to="#" className="menu-bars">
                <button className="nav-toggler">
                  <span className="header-span"></span>
                </button>
              </Link>
            </div>
          </div>
          <nav
            className={sidebar ? "nav-menu active" : "nav-menu"}
            onClick={show}
          >
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-barss">
                  <AiOutlineClose className="ai" />
                </Link>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
