import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>Introduction</h2>
        </div>

        <div class="row justify-content-center align-items-center">
          <div class="col-md-6 order-md-1">
            <div>
              <figure>
                <img
                  src="./img/profile.jpg"
                  alt="#"
                  class="img-fluid img-thumbnail rounded img-introduction"
                />
              </figure>
            </div>
          </div>

          <div class="col-md-6 order-md-2">
            <div class="text-wrap">
              <h2 id="looking-for" class="language-dependent">
                Looking for
              </h2>
              <p id="looking-for-message" class="language-dependent">
                I am looking for an apprenticeship in development, preferably in
                the video game sector, but I am open to other opportunities.
              </p>
              <p id="more-details" class="language-dependent">
                Here are more details:
              </p>
              <ul>
                <li id="contract" class="language-dependent">
                  Contract Type → 3-year apprenticeship contract
                </li>
                <li id="schedule" class="language-dependent">
                  Schedule → 2 weeks in the company, 1 week in training
                </li>
                <li id="specialization" class="language-dependent">
                  Specialization B3 (next year) → Développement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
