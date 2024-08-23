import React from "react";
import "./Projects.css";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";
import Project4 from "./Project4/Project4";

const Projects = () => {
  return (
    <div className="projects">
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2 id="nav-projects" className="language-dependent">
              Projects
            </h2>
          </div>

          {/* <!-- First Project --> */}
          <div className="row row-cols-1 row-cols-md-2">
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />
          </div>

          <div className="text-center">
            <div className="text-center">
              <h2 id="projects-message" className="pt-3 language-dependent">
                If you want to see all my projects, check out my
              </h2>
              <h2>
                <a
                  href="https://github.com/MihutaMihail"
                  target="_blank"
                  className="text-secondary"
                >
                  GitHub
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
