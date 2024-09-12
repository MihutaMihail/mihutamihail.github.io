import React from "react";
import "./Conclusion.css";
import CarouselWithNotes from "../../CarouselWithNotes/CarouselWithNotes";

const Conclusion = () => {
  const carouselItems = [
    {
      src: "./img/certificates/anti-corruption.JPG",
      caption: "Anti Corruption",
    },
    { src: "./img/certificates/cyber&moi.JPG", caption: "Cyber & Moi" },
    {
      src: "./img/certificates/cybersecurite-keep-an-eye-out.JPG",
      caption: "Cybersécurité (Keep an eye out)",
    },
    {
      src: "./img/certificates/essentiels-rgpd.JPG",
      caption: "Essentiels RGPD",
    },
  ];

  return (
    <div className="conclusion">
      {/* TEXT 1 */}
      <p id="conclusion-item-1" className="language-dependent">
        Firstly, I would like to talk about what I have learned / got better at,
        so here are a few of those things. First thing that I worked on was
        Power BI. I think it's a great and useful tool that can help a lot with
        analyzing data. Another thing was Python. It has been some time since I
        have worked with Python and I think it was great to code again in this
        language. It was also nice that I have discovered a things like Flask
        where you can host your own server. THe library Pandas was something
        that I actually was pretty bad in school so actually working with it
        again made it more clear on what does it do and how does it actually
        work. I have also worked on UX UI design since I had to design the CO2
        interface all by myself (I used Figma to design it).
      </p>

      <p id="conclusion-item-2" className="language-dependent">
        Even though I prefer backend work, I still had to work with some
        frontend languages like javascript. I primarily worked with the library
        Chart.js that helped me design a few charts for the results page for the
        CO2 interface. Another thing that I learned is to properly document my
        code. I was commenting my code before, don't get me wrong, but I didn't
        document it how you should've. What I mean by this is writing a
        docstring where you write a simple phrase about how the function does in
        which you can further explain the process of the function in detail. You
        also need to specify the parameters and their types as well as what they
        represent. Can't forget about what the function returns as well if it
        throws any kind of error. Lastly, you can also include an example on how
        you would use this function.
      </p>

      {/* TEXT 2 */}
      <p id="conclusion-item-3" className="language-dependent">
        Finally, I would like to talk more about the professional world. I think
        this internship was nice to see more of what the professional world
        looks like and how does it function a little bit. From working with
        different colleagues, to reunions, I think it has helped me understand
        all of it a tiny bit better. Something that I have seen before but not
        in greater detail was the world of corruption or how to properly defend
        yourself from potential IT threats. I have done a few courses from
        something called the SeriousGames where I have learneed a litle about
        those things. Here are the certificates:
      </p>

      <br></br>
      <CarouselWithNotes items={carouselItems} />
    </div>
  );
};

export default Conclusion;

/*
bilan de votre stage de fin d’année :

vos impressions, votre ressenti ;
l’expérience acquise ;
les points d’amélioration ;
*/
