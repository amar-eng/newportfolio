import React from "react";
import Navbar from "../components/Navbar";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../assets/pics/logo.png";
import "./Styles.scss";

const Contactpage = () => {
  return (
    <div className="main">
      <section className="home-sections">
        <div className="container ">
          <Navbar />
          <div className="roow">
            <div className="title">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="contact-flex">
            <div className="  contact-row">
              <div className="contact-form">
                <form>
                  <div className="form-container">
                    <div className="input__group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="inputControl"
                      />
                    </div>
                    <div className="input__group">
                      <input
                        type="text"
                        placeholder="Email"
                        className="inputControl"
                      />
                    </div>
                    <div className="input__group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="inputControl"
                      />
                    </div>
                    <div class="input__group">
                      <textarea
                        placeholder="Message"
                        className="inputControl"
                      ></textarea>
                    </div>
                    <div class="submit-btn">
                      <button type="submit" className="btn contact-btn">
                        send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-info info-row">
              {/* <h1 className="contact__header">Let's Talk</h1> */}
              <div className="contact">
                <div className="contact__info">
                  <div className="contact__info-header">Contact info</div>
                  <div className="contact__info-content">
                    Feel feel to reach out!
                  </div>
                  <div className="icon-text">
                    <BiPhone
                      style={{
                        fontSize: "1.8rem",
                        color: "#13182c",
                        marginRight: "2rem",
                      }}
                    />
                    <span className="span-content">1-(647)-767-8903</span>
                  </div>
                  <div className="icon-text">
                    <HiOutlineMail
                      style={{
                        fontSize: "1.8rem",
                        color: "#13182c",
                        marginRight: "2rem",
                      }}
                    />
                    <span className="span-content">am24mo@gmail.com</span>
                  </div>
                  <div className="socials">
                    <a className="icon-circle">
                      <AiFillGithub
                        style={{
                          color: "#4078c0",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          window.open(`https://github.com/amar-eng`)
                        }
                      />
                    </a>
                    <a className="icon-circle">
                      <AiFillLinkedin
                        style={{
                          color: " #0e76a8",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          window.open(
                            `https://www.linkedin.com/in/amar-mohamud/`
                          )
                        }
                      />
                    </a>
                  </div>
                  <div className="contact-logo">
                    <img src={logo} alt="my-logo" className="logo-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactpage;
