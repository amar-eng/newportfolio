import React from "react";
import "../styles/Home.scss";
import "../styles/Contact.scss";
const ContactScreen = () => {
  return (
    <div className="main">
      <section className="contact-section sec-padding">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-control"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-control"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                  />
                </div>
                <div class="input-group">
                  <textarea
                    placeholder="Message"
                    className="input-control"
                  ></textarea>
                </div>
                <div class="submit-btn">
                  <button type="submit" className="btn">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-info">
          <h3>Follow Me</h3>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
