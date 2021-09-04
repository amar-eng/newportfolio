import React, { useState } from "react";
import Navbar from "../components/Navbar";

import Instock from "../assets/pics/instock.png";
import prof from "../assets/pics/prof.png";
import omega from "../assets/pics/omega.png";
import bestbeats from "../assets/pics/bestbeats.png";
import studioglam from "../assets/pics/studioglam.png";
import colog from "../assets/pics/colog.png";
import List from "../components/List";
import "./Styles.scss";
const Projectpage = () => {
  // const [selected, setSelected] = useState(false);
  const [blocks] = useState([
    {
      title: "Omega",
      index: 1,
      image: omega,
      paragraph:
        "A front end focused website that navigates users through Swedish designed German made furniture. This application features animation concepts as well as a modern minimalist theme.",
      tech: "HTML, SaSS,REACT",
      role: "Front-end",
      site: "https://omegadesigns.netlify.app/",
      git: "https://github.com/amar-eng/omeg",
    },
    {
      title: "Studio Glam",
      index: 2,
      image: studioglam,
      paragraph:
        "A full stack MERN e-commerce website that is built with React-Redux. From the Admin product management to a simple checkout processes, this is an easy-to-use application developed for the customer's perpective and the owner of the e-commerce buisness.",
      tech: "React, Redux, Mongo DB, Express JS, Node Js, React-Bootstrap, and JWT authentication ",
      role: "Full Stack",
      site: "http://studioglam.herokuapp.com/",
      git: "https://github.com/amar-eng/StudioGlam-beta",
    },
    {
      title: "Best Beats",
      index: 3,
      image: bestbeats,
      paragraph:
        "A fully responsive front end focused application that is a one page e-commerce concept website. This application features animations and a sleek design that is built using JavaScript techniques.",
      tech: "HTML, CSS,and JS",
      role: "Front-end",
      site: "https://bestbeatsnow.netlify.app/",
      git: "https://github.com/amar-eng/Headphones",
    },
    {
      title: "Old Portfolio",
      index: 4,
      image: prof,
      paragraph:
        "My old portfolio that showcased some of my earlier-days skills. This application uses concepts such as react-scroll , styled-components, and ityped. Take a look and rate my progression!",
      tech: "HTML, SaSS, and React",
      role: "Front-end",
      site: "https://amar-mo.com/",
      git: "https://github.com/amar-eng/my-portfolio",
    },
    {
      title: "InStock",
      index: 5,
      image: Instock,
      paragraph:
        "This was a team-oriented project that used the Agile Methodology to create an Invetory application. The Inventory tracking system was developed using React and NodeJS to allow users to input, edit, and delete information.",
      tech: "HTML, SASS, React, Express Js, and Jira",
      role: "Full Stack",
      site: "https://instock.herokuapp.com/",
      git: "https://github.com/amar-eng/Instock",
    },
    {
      title: "Colognoisseur-Concept",
      index: 6,
      image: colog,
      paragraph:
        "I love all things colognes! My first project was to turn my hobby to an interactive un-deployed web application that allows users to get scent information. This was developed by using React and Sass for the front-end as well expressJS and Firebase for the back-end and user authentication",
      tech: "HTML,SaSS,React, Express JS, Firebase",
      role: "Full Stack",
      site: "https://github.com/amar-eng/Colognoisseurs",
      git: "https://github.com/amar-eng/Colognoisseurs",
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
