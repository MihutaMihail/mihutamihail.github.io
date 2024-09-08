import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="section-title">
          <h2 id="nav-about" className="language-dependent">
            About
          </h2>
        </div>
        {/* END SECTION TITLE */}

        {/* PROFILE IMAGE */}
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 order-1">
            <div>
              <figure>
                <img
                  src="./img/profile.jpg"
                  alt="Profile"
                  className="img-fluid img-thumbnail rounded img-introduction"
                />
              </figure>
            </div>
          </div>
          {/* END PROFILE IMAGE */}

          <div className="col-md-6 order-2">
            <div className="text-wrap">
              {/* MY JOURNEY */}
              <h2 id="my-journey" className="language-dependent">
                My journey
              </h2>
              <p id="my-journey-message" className="language-dependent">
                Passionate by games and computers since childhood, I embarked on
                a journey into the IT world and am now working as a developer.
                My current projects involve school assignements and internships.
                My experience includes working with Unreal Engine (Blueprints),
                C# (APIs and Unity), Python (for a Discord bot and data analysis
                with Pandas), PHP (e-commerce site, forum) and Javascript
                (Pac-Man game), among others. I have completed my BTS SIO
                diploma and am currently pursuing my master's degree.
              </p>
              {/* END MY JOURNEY */}

              {/* LOOKING FOR */}
              <h2 id="looking-for" className="language-dependent">
                Looking for
              </h2>
              <p id="looking-for-message" className="language-dependent">
                I am looking for an internship in development. I mainly do
                backend work, but as a developer, it is my job to adapt to
                frontend work if needed.
              </p>
              <p id="more-details" className="language-dependent">
                Here are more details:
              </p>
              <ul>
                <li id="contract" className="language-dependent">
                  Contract Type → 1 or 3-year apprenticeship contract
                </li>
                <li id="schedule" className="language-dependent">
                  Schedule → 2 weeks in the company, 1 week in training
                </li>
                <li id="specialization" className="language-dependent">
                  Specialization B3 (next year) → Development
                </li>
              </ul>
              {/* END LOOKIN FOR */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
