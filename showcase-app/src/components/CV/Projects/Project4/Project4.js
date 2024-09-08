import React from "react";

const Project4 = () => {
  return (
    <div className="project4">
      <div className="col mb-3">
        <div className="card shadow">
          {/* Thumbnail image for the project */}
          <img
            src="https://img.youtube.com/vi/fn6k69TmOL0/maxresdefault.jpg"
            className="card-img-top"
            alt="Video Thumbnail"
          />

          {/* Card body containing text and links */}
          <div className="card-body">
            <div className="card-header mb-2 h6">Groupie Tracker</div>
            <p
              id="projects-groupie-tracker"
              className="card-text language-dependent"
            >
              Use of the groupie-tracker API to create an app with golang.
            </p>
            
            {/* Container for buttons */}
            <div className="text-center">
              {/* YouTube link */}
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=fn6k69TmOL0"
                className="btn btn-dark m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
              </a>

              {/* GitHub link to the repository */}
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/groupie_tracker"
                className="btn btn-secondary m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
