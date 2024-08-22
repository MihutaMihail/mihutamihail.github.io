import React from "react";

const Project4 = () => {
  return (
    <div className="project4">
      <div class="col mb-3">
        <div class="card shadow">
          <img
            src="https://img.youtube.com/vi/fn6k69TmOL0/maxresdefault.jpg"
            class="card-img-top"
            alt="Video Thumbnail"
          />
          <div class="card-body">
            <div class="card-header mb-2 h6">Groupie Tracker</div>
            <p
              id="projects-groupie-tracker"
              class="card-text language-dependent"
            >
              Use of the groupie-tracker API to create an app with golang.
            </p>
            <div class="text-center">
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=fn6k69TmOL0"
                class="btn btn-dark m-1 language-dependent"
                target="_blank"
              >
                Watch on YouTube
              </a>
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/groupie_tracker"
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

export default Project4;
