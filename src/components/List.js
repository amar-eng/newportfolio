import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Portfolio.scss";
import "../styles/Home.scss";
import Modal from "../screens/Modal";
const List = ({ block }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="portfolio-item">
        <div key={block.index} className="portfolio-item-thumbnail">
          <img src={block.image} alt="instock" className="port-image" />
        </div>
        <h3 className="portfolio-item-title">{block.title}</h3>
        <button
          className="btn view-project-btn"
          onClick={() => setSelected(!selected)}
        >
          View Project
        </button>
      </div>
      {selected && (
        <Modal block={block} selected={selected} setSelected={setSelected} />
      )}
    </>
  );
};

export default List;
