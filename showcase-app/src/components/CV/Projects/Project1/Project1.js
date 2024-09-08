import React from "react";

const Project1 = () => {
  return (
    <div className="project1">
      <div className="col mb-3">
        <div className="card shadow">
          {/* Thumbnail image for the project, using a YouTube thumbnail URL */}
          <img
            src="https://img.youtube.com/vi/SfqUuGNmkmY/maxresdefault.jpg"
            className="card-img-top"
            alt="Video Thumbnail"
          />

          {/* Card body containing text and links */}
          <div className="card-body">
            <div className="card-header mb-2 h6">Platformer</div>
            <p
              id="projects-platformer"
              className="card-text language-dependent"
            >
              A platformer game made with Unity. Goal is to pass each challenge
              that is presented until you reach the end.
            </p>
            {/* Container for buttons */}
            <div className="text-center">
              {/* YouTube link */}
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=SfqUuGNmkmY"
                className="btn btn-dark m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
              </a>

              {/* GitHub link to the repository */}
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/Unity-v2021.3.16_Platformer"
                className="btn btn-secondary m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Project1;
