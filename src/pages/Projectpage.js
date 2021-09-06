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
        "A front-end-focused website that navigates users through Swedish-designed German-made furniture. This application features animation concepts as well as a modern minimalist theme. ",
      tech: "HTML, Sass, React",
      role: "Front-end",
      site: "https://omegadesigns.netlify.app/",
      git: "https://github.com/amar-eng/omeg",
    },
    {
      title: "Studio Glam",
      index: 2,
      image: studioglam,
      paragraph:
        " A Full-stack MERN easy-to-use e-commerce application developed for the admin product management as well as a simple checkout process for the customer. It was built with the use of React-Redux, React-Bootstrap, and JWT Authentication!",
      tech: "React, Redux, Mongo DB, Express JS, & Node JS ",
      role: "Full-Stack",
      site: "http://studioglam.herokuapp.com/",
      git: "https://github.com/amar-eng/StudioGlam-beta",
    },
    {
      title: "Best Beats",
      index: 3,
      image: bestbeats,
      paragraph:
        "A fully responsive front-end application that is a one-page e-commerce concept website. This application features animations and a sleek design that is built using JavaScript techniques.",
      tech: "HTML, CSS & JS",
      role: "Front-end",
      site: "https://bestbeatsnow.netlify.app/",
      git: "https://github.com/amar-eng/Headphones",
    },
    {
      title: "Old Portfolio",
      index: 4,
      image: prof,
      paragraph:
        "My old portfolio that showcased some of my earlier-day skills. This application uses concepts such as react-scroll , styled-components, and ityped. Take a look at my progression!",
      tech: "HTML, Sass & React",
      role: "Front-end",
      site: "https://amar-mo.com/",
      git: "https://github.com/amar-eng/my-portfolio",
    },
    {
      title: "InStock",
      index: 5,
      image: Instock,
      paragraph:
        "This was a team-oriented project that used an Agile Methodology to create an Inventory application. The Inventory tracking system was developed using React and NodeJS to allow users to input, edit, and delete information.",
      tech: "HTML, Sass, React, Express Js & Jira",
      role: "Full Stack",
      site: "https://instock.herokuapp.com/",
      git: "https://github.com/amar-eng/Instock",
    },
    {
      title: "Cologne Experts",
      index: 6,
      image: colog,
      paragraph:
        "I love all things cologne! My first project was to turn my hobby into an interactive un-deployed web application that allows users to get scent information. This was developed by using React and Sass for the front-end as well ExpressJS and Firebase for the back-end and user authentication.",
      tech: "HTML, Sass, React, ExpressJS, Firebase",
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
