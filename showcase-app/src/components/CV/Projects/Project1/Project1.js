import React from "react";

const Project1 = () => {
  return (
    <div className="project1">
      <div class="col mb-3">
        <div class="card shadow">
          <img
            src="https://img.youtube.com/vi/SfqUuGNmkmY/maxresdefault.jpg"
            class="card-img-top"
            alt="Video Thumbnail"
          />
          <div class="card-body">
            <div class="card-header mb-2 h6">Platformer</div>
            <p id="projects-platformer" class="card-text language-dependent">
              A platfomer game made with Unity. Goal is to pass each challenge
              that is presented until you reach the end.
            </p>
            <div class="text-center">
              <a
                id="watch-on-youtube"
                href="https://www.youtube.com/watch?v=SfqUuGNmkmY"
                class="btn btn-dark m-1 language-dependent"
                target="_blank"
              >
                Watch on YouTube
              </a>
              <a
                id="github-repository"
                href="https://github.com/MihutaMihail/Unity-v2021.3.16_Platformer"
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

export default Project1;
