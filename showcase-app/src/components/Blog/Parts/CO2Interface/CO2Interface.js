import React from "react";
import "./CO2Interface.css";
import CarouselWithNotes from "../../CarouselWithNotes/CarouselWithNotes";

const CO2Interface = () => {
  const firstCarouselItems = [
    { src: "./img/results_1.JPG" },
    { src: "./img/results_2.JPG" },
  ];

  const secondCarouselItems = [{ src: "./img/index.JPG" }];

  const thirdCarouselItems = [
    { src: "./img/firstPart.JPG" },
    { src: "./img/firstPart_click.JPG" },
  ];

  const fourthCarouselItems = [
    { src: "./img/secondPart.JPG" },
    { src: "./img/secondPart_click.JPG" },
  ];

  const fifthCarouselItems = [
    {
      src: "https://user-images.githubusercontent.com/847422/61704800-73907200-ad3c-11e9-8179-ea8fadf1cb91.png",
      caption: "Javascript",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:739/1*RpOZOq30_rdP8G_3USHCJw.png",
      caption: "Python",
    },
  ];

  return (
    <div className="co2interface">
      <p id="co2interface-item-1" className="language-dependent">
        This is what I've done during the 5 remaining weeks after working with
        Power BI.
      </p>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Stack</h2>
          </div>
        </div>
        <p id="co2interface-item-2" className="language-dependent">
          Before starting the project, we first must identify the technical
          stack, meaning the technologies that we're going to use for this
          particular project. Here's how it looks like:
        </p>
        <table class="table table-bordered table-striped">
          <thead class="thead-dark"></thead>
          <tbody>
            <tr>
              <td>
                <strong>IDE</strong>
              </td>
              <td>Visual Studio Code</td>
              <td id="co2interface-item-3" className="language-dependent">
                Preferred IDE
              </td>
            </tr>
            <tr>
              <td>
                <strong>Backend Language</strong>
              </td>
              <td>Python</td>
              <td id="co2interface-item-4" className="language-dependent">
                Chosen language for data manipulation
              </td>
            </tr>
            <tr>
              <td>
                <strong>Environment</strong>
              </td>
              <td>Jupyter Notebook</td>
              <td id="co2interface-item-5" className="language-dependent">
                Testing environment for Pandas
              </td>
            </tr>
            <tr>
              <td>
                <strong>Libraries (data)</strong>
              </td>
              <td>Pandas</td>
              <td id="co2interface-item-6" className="language-dependent">
                Used for manipulation Excel files data
              </td>
            </tr>
            <tr>
              <td>
                <strong>Frontend Language</strong>
              </td>
              <td>JS</td>
              <td id="co2interface-item-7" className="language-dependent">
                Chosen language for charts and interacting with the backend
              </td>
            </tr>
            <tr>
              <td>
                <strong>Libraries (charts)</strong>
              </td>
              <td>Chart.js</td>
              <td id="co2interface-item-8" className="language-dependent">
                Used to make charts
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2
              id="co2interface-section-title-1"
              className="language-dependent"
            >
              Results page
            </h2>
          </div>
        </div>
        <CarouselWithNotes items={firstCarouselItems} />
        <br></br>
        <p id="co2interface-item-9" className="language-dependent">
          Everything besides the charts has been done using CSS and most
          importantly, Bootstrap. The charts has been done using the library
          Chart.js. As you might seen in the images, the numbers are completely
          arbitatry since I didn't have any Excel files with real data.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2
              id="co2interface-section-title-2"
              className="language-dependent"
            >
              Index page
            </h2>
          </div>
        </div>

        <p id="co2interface-item-10" className="language-dependent">
          I call this part 'index' to reference the index.html or index.php
          which is the entry point to a website. In my case, this part of the
          interface is the entry point where you would import all necessary
          files.
        </p>
        <CarouselWithNotes items={secondCarouselItems} />
        <br></br>
        <p id="co2interface-item-11" className="language-dependent">
          So the index page looks like this. We have two options, either
          generating a list of collaborators or calculate the CO2 footprint.
          Let's talk first about the list of collaborators.
        </p>

        <CarouselWithNotes items={thirdCarouselItems} />
        <br></br>
        <p id="co2interface-item-12" className="language-dependent">
          So first we choose the year since we're going to calculate the CO2
          footprint based on an year. After choosing the year, we have multiple
          options. We can either just generate the list by clicking on the
          download button that will create an Excel file with the collaborators.
          In addition, the user can generate a list of collaborators by
          filtering them beforehand. There's also a button that resets those
          said filters.
        </p>

        <p id="co2interface-item-13" className="language-dependent">
          Furthermore, there's a reason why the filters and the buttons look a
          little greyed out, it's to show that you cannot choose them before you
          choose the year.
        </p>

        <p id="co2interface-item-14" className="language-dependent">
          Here we have the second part:
        </p>
        <CarouselWithNotes items={fourthCarouselItems} />
        <br></br>
        <p id="co2interface-item-15" className="language-dependent">
          It's the same concept, you choose the year but this time you drag and
          drop (or click on the button) to manually insert the needed file. This
          is the only file that is needed to insert manually everytime.
        </p>

        <p id="co2interface-item-16" className="language-dependent">
          There's around 7 to 9 necessary files for the calculation of the CO2
          footprint which need to be verified beforehand. However, this part is
          yet to be finished since I didn't have the time to do so during my
          internship. As you might see, there's also no button to click to start
          the calculation process either.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2
              id="co2interface-section-title-3"
              className="language-dependent"
            >
              Documenting code
            </h2>
          </div>
        </div>
        <p id="co2interface-item-17" className="language-dependent">
          Documenting your code is important not only for other people so that
          they know what your code does, but also for yourself. Since I don't
          have access to the code at the moment of writing, I can only provide
          an example on how I have documented my code (docstring).
        </p>

        <CarouselWithNotes items={fifthCarouselItems} />
        <br></br>

        <p id="co2interface-item-18" className="language-dependent">
          Right above I'm showing an example on how I have documented my bode
          for Javascript and Python. These are just examples and if you search
          images on Google you'll find that people will write their docstring in
          different ways but those images represent pretty closely how I have
          documented my code.
        </p>

        <p id="co2interface-item-19" className="language-dependent">
          A docstring consists firstly of writing a general phrase on what your
          code does followed by your arguments. Each argument that your function
          has must be written by their name and their type as well as what they
          represent inside the function. You can then write what the function
          returns as well as what it might throw as an error. Finally, you could
          also provide an example on how you would call the function and what it
          might return based on the values that you have given it.
        </p>
      </section>
    </div>
  );
};

export default CO2Interface;
