import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../assets/pics/logo.png";
import "./Styles.scss";

const Contactpage = () => {
  const [clicked, setClicked] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_93iuxid",
        "template_wyensrw",
        e.target,
        "user_tpKvmxKUkq2uGaUHZcIWk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
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
              {clicked && (
                <div className="mes">
                  {" "}
                  Thanks for inquiring! I will reach back to you soon.
                </div>
              )}
              <form onSubmit={sendEmail}>
                <div className="form-container">
                  <div className="input__group">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      className="inputControl"
                    />
                  </div>
                  <div className="input__group">
                    <input
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      className="inputControl"
                    />
                  </div>
                  <div className="input__group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="inputControl"
                    />
                  </div>
                  <div class="input__group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="inputControl"
                    ></textarea>
                  </div>
                  <div class="submit__btn" onClick={() => setClicked(!clicked)}>
                    <button type="submit" className=" bttn contact-bttn">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-info info-row">
              <div className="contact">
                <div className="contact__info">
                  <div className="contact__info-header">Contact info</div>
                  <div className="contact-Container">
                    <div className="contact-Container--Left">
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
                    </div>
                    <div className="socials">
                      <div className="socials__container">
                        <div className="icon-circle">
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
                        </div>
                        <div className="icon-circle">
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
                        </div>
                      </div>
                      <div className="contact__logo">
                        <img src={logo} alt="my-logo" className="logo__img" />
                      </div>
                    </div>
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
