import React, { useState } from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import "../styles/Portfolio.scss";
import Modal from "../screens/Modal";
import Instock from "../assets/pics/instock.png";
import prof from "../assets/pics/prof.png";
import List from "../components/List";

const PortfolioScreen = () => {
  const [selected, setSelected] = useState(false);
  const [blocks] = useState([
    {
      title: "Instock",
      index: 1,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Instock2",
      index: 2,
      image: prof,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Instock3",
      index: 3,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Instock4",
      index: 4,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Instock5",
      index: 5,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Instock6",
      index: 6,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
  ]);

  return (
    <div className="main hidden ">
      <section>
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            {blocks.map((block) => (
              <>
                <List block={block} />
              </>
            ))}
          </div>
        </div>
      </section>

      {/* {selected && blocks.map((block, index) => <Modal title={block.title} />)} */}
    </div>
  );
};

export default PortfolioScreen;
