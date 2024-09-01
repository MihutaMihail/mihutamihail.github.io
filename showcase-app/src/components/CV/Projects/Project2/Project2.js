import React from "react";

const Project2 = () => {
  return (
    <div className="project2">
      <div className="col mb-3">
        <div className="card shadow">
          <img
            src="https://img.youtube.com/vi/ghjP0xtL4sI/maxresdefault.jpg"
            className="card-img-top"
            alt="Video Thumbnail"
          />
          <div className="card-body">
            <div className="card-header mb-2 h6">Kingdom Panic</div>
            <p id="projects-kingdom-panic" className="card-text language-dependent">
              A game made with Unreal Engine. It's a tower defense where the
              goal is to place towers as to defend against the enemy.
            </p>
            <div className="text-center">
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=ghjP0xtL4sI"
                className="btn btn-dark m-1 language-dependent"
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
              </a>
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/Unreal-v5.1_KingdomPanic"
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

export default Project2;
