import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/Portfolio.scss";
// import "../styles/Home.scss";
import Modal from "../screens/Modal";
import "../pages/Styles.scss";
const List = ({ block }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="portfolio-card">
        <div
          key={block.index}
          className="portfolio-item-thumbnail imgContainer"
        >
          <img src={block.image} alt="instock" className="port-image " />
        </div>
        <h3 className="portfolio-item-title port-title">{block.title}</h3>
        <button
          className="btn projectBtn"
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
