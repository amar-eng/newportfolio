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
    // <header className="header">
    //   <div className="container">
    //     <div className="row flex-end" onClick={show}>
    //       <button className="nav-toggler">
    //         <span></span>
    //       </button>
    //       <nav className="nav">
    //         <div className="nav-inner">
    //           <ul>
    //             <li>
    //               <Link to="/" className="nav-item link-item">
    //                 Home
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/about" className="nav-item link-item">
    //                 About
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/portfolio" className="nav-item link-item">
    //                 Projects
    //               </Link>
    //             </li>
    //             <li>
    //               <Link to="/contact" className="nav-item link-item">
    //                 Contact
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
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
      {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <button className="nav-toggler" onClick={show}>
              <span className="header-span"></span>
            </button>
          </Link>
        </div> */}
    </>
  );
};

export default Header;
