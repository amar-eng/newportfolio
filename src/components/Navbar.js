import React, { useState } from "react";
import "../pages/Styles.scss";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const show = () => setSidebar(!sidebar);

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
                <Link to={item.path}>
                  <li key={index} className={item.cName}>
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
