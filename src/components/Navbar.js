import React, { useState } from "react";
import "../pages/Styles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const show = () => setSidebar(!sidebar);
  console.log(SidebarData);
  return (
    <>
      <div className="nav-container" onClick={show}>
        <button className="navv">
          <span className="nav-span"></span>
        </button>
      </div>
      <nav className={sidebar ? "menu active" : "menu"} onClick={show}>
        <ul className="menu__items">
          <li className="menu__toggle">
            <AiOutlineClose className="close" />

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
    </>
  );
};

export default Navbar;
