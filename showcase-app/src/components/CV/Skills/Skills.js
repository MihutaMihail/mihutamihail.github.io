import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <section id="skills">
        <div className="container">
          <div className="section-title">
            <h2 id="nav-skills" className="language-dependent">
              Skills
            </h2>
          </div>

          <div className="row">
            {/* <!-- Backend --> */}
            <div className="col-md-6 col-12 mb-4">
              <div className="grid-container">
                <h2 id="programming-languages" className="language-dependent">
                  Backend
                </h2>
                <div className="row">
                  {/* C SHARP */}
                  <div className="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
                      alt="C# Logo"
                      className="square-logo"
                    />
                  </div>

                  {/* JAVA */}
                  <div className="grid-item col-2">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
                      alt="Java Logo"
                      className="square-logo"
                    />
                  </div>

                  {/* GO */}
                  <div className="grid-item col-2">
                    <img
                      src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                      alt="Golang Logo"
                      className="square-logo"
                    />
                  </div>
                  
                  {/* JS */}
                  <div className="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
                      alt="Javascript Logo"
                      className="square-logo"
                    />
                  </div>

                  {/* Python */}
                  <div className="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                      alt="Python Logo"
                      className="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Backend --> */}

            {/* <!-- Database --> */}
            <div className="col-md-6 col-12 mb-4">
              <div className="grid-container">
                <h2>Database</h2>
                <div className="row">
                  {/* SQL */}
                  <div className="grid-item col-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                      alt="SQL Logo"
                      className="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Database --> */}

            {/* <!-- Game Development --> */}
            <div className="col-md-6 col-12 mb-4">
              <div className="grid-container">
                <h2 id="game-development" className="language-dependent">
                  Game Development
                </h2>
                <div className="row">
                  {/* UE BLUEPRINT */}
                  <div className="grid-item col-2">
                    <img
                      src="https://cdn2.unrealengine.com/Unreal+Engine%2Fonlinelearning-courses%2Fblueprint-for-enterprise%2FBlueprint-for-Enterprise-1000x1000-13caa11b8e5c5e91506a8dd63b39d247318c3208.png?resize=1&w=300"
                      alt="Unreal Engine Logo"
                      className="square-logo"
                    />
                  </div>
                  {/* UNITY */}
                  <div className="grid-item col-2">
                    <img
                      src="https://i.redd.it/tu3gt6ysfxq71.png"
                      alt="Unity Logo"
                      className="square-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Game Development --> */}

            {/* <!-- Operating Systems --> */}
            <div className="col-md-6 col-12">
              <div className="grid-container">
                <h2 id="operating-systems" className="language-dependent">
                  Operating Systems
                </h2>
                <div className="row">
                  {/* BASH */}
                  <div className="grid-item col-2">
                    <img
                      src="https://dwglogo.com/wp-content/uploads/2019/03/1800px-gnu_bash_logo.png"
                      alt="Bash Logo"
                      className="square-logo"
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
