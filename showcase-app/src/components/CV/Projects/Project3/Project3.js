import React from "react";

const Project3 = () => {
  return (
    <div className="project3">
      <div className="col mb-3">
        <div className="card shadow">
          {/* Thumbnail image for the project */}
          <img
            src="https://img.youtube.com/vi/DcCmeYA6cZ0/maxresdefault.jpg"
            className="card-img-top"
            alt="Video Thumbnail"
          />

          {/* Card body containing text and links */}
          <div className="card-body">
            <div className="card-header mb-2 h6">Pacman</div>
            <p id="projects-pacman" className="card-text language-dependent">
              An attempt of the game Pacman using javascript.
            </p>
            
            {/* Container for buttons */}
            <div className="text-center">
              {/* YouTube link */}
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=DcCmeYA6cZ0"
                className="btn btn-dark m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
              </a>

              {/* GitHub link to the repository */}
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/pacman"
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

export default Project3;
