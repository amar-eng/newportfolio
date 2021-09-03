import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Instock from "../assets/pics/instock.png";
import prof from "../assets/pics/prof.png";
import List from "../components/List";
import "./Styles.scss";
const Projectpage = () => {
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
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow">
            <div className="title">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="roow about-row port-row">
            {blocks.map((block) => (
              <>
                <List block={block} />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectpage;
