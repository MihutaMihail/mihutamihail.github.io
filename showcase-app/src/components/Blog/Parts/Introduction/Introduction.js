import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <img
        src="https://consort-group.com/logo.png"
        className="card-img-top"
        alt="Consort Group"
      />
      {/* TEXT 1 */}
      <p id="introduction-item-1" className="language-dependent">
        Consort Group is a French company that specializes in IT infrastructure
        and data management solutions. It offers services across multiple
        domains including cybersecurity, cloud computing or systems management.
      </p>

      {/* TEXT 2 */}
      <p id="introduction-item-2" className="language-dependent">
        The group is operating under two main branches: Consortis, which focuses
        on IT infrastructure services, and Consortia, which specializes in data
        engineering and digital development.
      </p>

      {/* TEXT 3 */}
      <p id="introduction-item-3" className="language-dependent">
        The time that I have spent there can be divided into 2 parts. For the
        first 2 weeks, I have worked with Power BI and for the remaining 5
        weeks, I have developed an interface to automate a specific part of the
        CO2 footprint calculation process.
      </p>

      {/* TEXT 4 */}
      <p id="introduction-item-4" className="language-dependent">
        This specific part was importing the files used to calculate CO2. In
        addition, I also developed a component for displaying the results of
        this said CO2 footprint.
      </p>
    </div>
  );
};

export default Introduction;
