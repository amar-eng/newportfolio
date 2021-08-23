import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import pic from "../assets/pics/instock.png";
import "../styles/Modal.scss";
const Modal = ({ block, setSelected, selected }) => {
  console.log(block.title);
  //   const [blocks, setBlocks] = useState(props);
  return (
    // <div className="portfolio-popup">
    //   <div className="pp-inner">
    //     <div className="pp-content">
    //       <div className="pp-header">
    //         <button className="btn pp-close">{/* <IoCloseOutline /> */}</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="portfolio-popup">
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button className="btn pp-close" onClick={() => setSelected(false)}>
              <AiOutlineClose className="icon" />
            </button>
            <div className="pp-thumbnail">
              <img src={block.image} alt="image" />
            </div>
            <h2 className="modal__title">{block.title}</h2>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>{block.paragraph}</p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  technologies used - <span>{block.tech}</span>
                </li>
                <li>
                  Role - <span>{block.role}</span>
                </li>
                <li>
                  View Online -{" "}
                  <span>
                    <a href="#">{block.site}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
