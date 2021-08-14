import React from "react";
import "../styles/Home.scss";
import "../styles/About.scss";
import Me from "../assets/me.jpg";
const About = () => {
  return (
    <div className="main">
      <section className="about-section sec-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>about me</h2>
            </div>
          </div>

          <div className="row">
            <div className="about-img">
              <div className="img-box">
                <img src={Me} alt="portfolio-pic" />
              </div>
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nihil dicta ab placeat similique ipsum, ut est itaque
                accusamus nesciunt doloribus hic illum suscipit, facilis eaque
                laborum labore earum blanditiis unde voluptate sit? Placeat
                voluptatibus odio id provident laboriosam, facere enim, nam
                voluptates unde magnam in neque nesciunt obcaecati modi.
              </p>
              <h3>skills</h3>
              <div className="skills">
                <div className="skill-item">html</div>
                <div className="skill-item">css</div>
                <div className="skill-item">javascript</div>
                <div className="skill-item">bootstrap</div>
                <div className="skill-item">php</div>
                <div className="skill-item">java</div>
                <div className="skill-item">python</div>
                <div className="skill-item">wordpress</div>
                <div className="skill-item">c</div>
                <div className="skill-item">c++</div>
              </div>
              <div class="about-tabs">
                <button
                  type="button"
                  class="tab-item active"
                  data-target="#education"
                >
                  education
                </button>
                <button
                  type="button"
                  class="tab-item"
                  data-target="#experience"
                >
                  experience
                </button>
              </div>

              {/* <!-- Education Start --> */}
              <div className="tab-content active" id="education">
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">2013 - 2016</span>
                    <h4>
                      bachelor of technology - <span>todfod university</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum ratione expedita veniam dicta autem nobis?
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">2013 - 2016</span>
                    <h4>
                      bachelor of technology - <span>todfod university</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum ratione expedita veniam dicta autem nobis?
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">2013 - 2016</span>
                    <h4>
                      bachelor of technology - <span>todfod university</span>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum ratione expedita veniam dicta autem nobis?
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Education End --> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
