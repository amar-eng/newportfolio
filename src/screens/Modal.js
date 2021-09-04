import React from "react";
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import { SiSafari } from "react-icons/si";

import "../styles/Modal.scss";
import "../pages/Styles.scss";
const Modal = ({ block, setSelected, selected }) => {
  return (
    <div
      className="portfolio-popup"
      // style={{ background: `url(${block.image})` }}
    >
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button className="btn pp-close" onClick={() => setSelected(false)}>
              <AiOutlineClose className="icon" />
            </button>
            <div className="pp-thumbnail">
              <img src={block.image} alt="imagemodal" className="modal-pic" />
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
                <div className="modal-icon">
                  <div className="icon-circles">
                    <AiFillGithub
                      style={{
                        color: "#4078c0",
                        fontSize: "50px",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(`${block.git}`)}
                    />
                  </div>
                  <div className="icon-circles">
                    <SiSafari
                      style={{
                        color: "#4078c0",
                        fontSize: "50px",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(`${block.site}`)}
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
