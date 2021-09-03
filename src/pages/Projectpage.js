import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Instock from "../assets/pics/instock.png";
import prof from "../assets/pics/prof.png";
import omega from "../assets/pics/omega.png";
import bestbeats from "../assets/pics/bestbeats.png";
import studioglam from "../assets/pics/studioglam.png";
import List from "../components/List";
import "./Styles.scss";
const Projectpage = () => {
  const [selected, setSelected] = useState(false);
  const [blocks] = useState([
    {
      title: "Omega",
      index: 1,
      image: omega,
      paragraph:
        "A front end focused website that navigates users through Swedish designed German made furniture",
      tech: "HTML,SaSS,REACT",
      role: "Front-end",
      site: "https://omegadesigns.netlify.app/",
      git: "https://github.com/amar-eng/omeg",
    },
    {
      title: "Studio Glam",
      index: 2,
      image: studioglam,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Best Beats",
      index: 3,
      image: bestbeats,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Old Portfolio",
      index: 4,
      image: prof,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "InStock",
      index: 5,
      image: Instock,
      paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      tech: "HTML,CSS,REACT",
      role: "Front-end",
      site: "www.google.com",
    },
    {
      title: "Colognoisseur-Concept",
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
