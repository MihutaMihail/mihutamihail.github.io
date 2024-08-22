import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <section id="skills">
        <div class="container">
          <div class="section-title">
            <h2 id="nav-skills" class="language-dependent">
              Skills
            </h2>
          </div>

          <div class="row">
            {/* <!-- Backend --> */}
            <div class="col-md-6 col-12 mb-4">
              <div class="grid-container">
                <h2 id="programming-languages" class="language-dependent">
                  Backend
                </h2>
                <div class="row">
                  <div class="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
                      alt="C# Logo"
                      class="square-logo"
                    />
                  </div>
                  <div class="grid-item col-2">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
                      alt="Java Logo"
                      class="square-logo"
                    />
                  </div>
                  <div class="grid-item col-2">
                    <img
                      src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                      alt="Golang Logo"
                      class="square-logo"
                    />
                  </div>
                  <div class="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
                      alt="Javascript Logo"
                      class="square-logo"
                    />
                  </div>
                  <div class="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                      alt="Python Logo"
                      class="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Backend --> */}

            {/* <!-- Database --> */}
            <div class="col-md-6 col-12 mb-4">
              <div class="grid-container">
                <h2>Database</h2>
                <div class="row">
                  <div class="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                      alt="SQL Logo"
                      class="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Database --> */}

            {/* <!-- Game Development --> */}
            <div class="col-md-6 col-12 mb-4">
              <div class="grid-container">
                <h2 id="game-development" class="language-dependent">
                  Game Development
                </h2>
                <div class="row">
                  <div class="grid-item col-2">
                    <img
                      src="https://cdn2.unrealengine.com/Unreal+Engine%2Fonlinelearning-courses%2Fblueprint-for-enterprise%2FBlueprint-for-Enterprise-1000x1000-13caa11b8e5c5e91506a8dd63b39d247318c3208.png?resize=1&w=300"
                      alt="Unreal Engine Logo"
                      class="square-logo"
                    />
                  </div>
                  <div class="grid-item col-2">
                    <img
                      src="https://i.redd.it/tu3gt6ysfxq71.png"
                      alt="Unity Logo"
                      class="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Game Development --> */}

            {/* <!-- Operating Systems --> */}
            <div class="col-md-6 col-12">
              <div class="grid-container">
                <h2 id="operating-systems" class="language-dependent">
                  Operating Systems
                </h2>
                <div class="row">
                  <div class="grid-item col-2">
                    <img
                      src="https://dwglogo.com/wp-content/uploads/2019/03/1800px-gnu_bash_logo.png"
                      alt="Bash Logo"
                      class="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Operating Systems --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
