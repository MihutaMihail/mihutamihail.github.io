import React from "react";
import "./PowerBI.css";

const PowerBI = () => {
  return (
    <div className="powerbi">
      <section className="section">
        {/* SECTION TITLE 1 */}
        <div className="container">
          <div className="section-title">
            <h2 id="powerbi-section-title-1" className="language-dependent">What is it ?</h2>
          </div>
        </div>

        {/* TEXT 1 */}
        <p id="powerbi-item-1" className="language-dependent">
          Power BI is a business analytics tool developed by Microsoft thatt
          allows you to visualize data. It helps you create interactive and
          visually appealing dashboard and reports from your data. It can also
          connect various data sources, such as Excel spreadsheets, databases,
          and more.
        </p>
      </section>

      <section className="section">
        {/* SECTION TITLE 2 */}
        <div className="container">
          <div className="section-title">
            <h2 id="powerbi-section-title-2" className="language-dependent">What is the goal ?</h2>
          </div>
        </div>

        {/* TEXT 2 */}
        <p id="powerbi-item-2" className="language-dependent">
          The goal is to verify that the numbers that came out of the
          calculation engine was indeed correct and corresponded with the data
          that was within Power BI. Even though this part didn't really get much
          use, it was still helpful to verify this and make sure that the
          numbers are correct.
        </p>
      </section>

      <section className="section">
        {/* SECTION TITLE 3 */}
        <div className="container">
          <div className="section-title">
            <h2 id="powerbi-section-title-3" className="language-dependent">What does it look like ?</h2>
          </div>
        </div>

        {/* TEXT 3 */}
        <p id="powerbi-item-3" className="language-dependent">
          Here's some images on how the power bi presentation that I have done
          during the first 2 weeks.
        </p>
        <img
          src="./img/powerbi_accueil.JPG"
          className="card-img-bottom"
          alt="Consort Group"
        />
        <br></br>
        <br></br>
        <br></br>
        {/* TEXT 4 */}
        <p id="powerbi-item-4" className="language-dependent">
          On the left we have all the filters where we can choose what we would
          like the data to be based on. If we were to choose a client like
          CLIENT XYZ, then all the data inside the graphs will be completely
          based on this particular client and no other client. If we were to
          choose a profile next, the graphs would have been based on the CLIENT
          XYZ as well as the chosen profile.
        </p>

        {/* TEXT 5 */}
        <p id="powerbi-item-5" className="language-dependent">
          In the top right we can see that we have the months of the year.
          Clicking on a month will display the data on that particular month
          while the donut chart shows the data during the full year.
        </p>

        {/* TEXT 6 */}
        <p id="powerbi-item-6" className="language-dependent">Here's an image of the third tab:</p>

        <img
          src="./img/powerbi_profil.JPG"
          className="card-img-bottom"
          alt="Consort Group"
        />

        {/* TEXT 7 */}
        <p id="powerbi-item-7" className="language-dependent">
          Here we can see that we have the same thing effectively but only based
          on the profile.
        </p>
      </section>
    </div>
  );
};

export default PowerBI;
