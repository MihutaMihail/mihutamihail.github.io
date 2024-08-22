import React from "react";

const Project3 = () => {
  return (
    <div className="project3">
      <div class="col mb-3">
        <div class="card shadow">
          <img
            src="https://img.youtube.com/vi/DcCmeYA6cZ0/maxresdefault.jpg"
            class="card-img-top"
            alt="Video Thumbnail"
          />
          <div class="card-body">
            <div class="card-header mb-2 h6">Pacman</div>
            <p id="projects-pacman" class="card-text language-dependent">
              An attempt of the game Pacman using javascript.
            </p>
            <div class="text-center">
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=DcCmeYA6cZ0"
                class="btn btn-dark m-1 language-dependent"
                target="_blank"
              >
                Watch on YouTube
              </a>
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/pacman"
                class="btn btn-secondary m-1 language-dependent"
                target="_blank"
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
