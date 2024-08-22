import React from "react";

const Project2 = () => {
  return (
    <div className="project2">
      <div class="col mb-3">
        <div class="card shadow">
          <img
            src="https://img.youtube.com/vi/ghjP0xtL4sI/maxresdefault.jpg"
            class="card-img-top"
            alt="Video Thumbnail"
          />
          <div class="card-body">
            <div class="card-header mb-2 h6">Kingdom Panic</div>
            <p id="projects-kingdom-panic" class="card-text language-dependent">
              A game made with Unreal Engine. It's a tower defense where the
              goal is to place towers as to defend against the enemy.
            </p>
            <div class="text-center">
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=ghjP0xtL4sI"
                class="btn btn-dark m-1 language-dependent"
                target="_blank"
              >
                Watch on YouTube
              </a>
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/Unreal-v5.1_KingdomPanic"
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

export default Project2;
