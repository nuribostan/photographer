import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur
          asperiores perferendis adipisci reiciendis officiis blanditiis
          explicabo consequuntur odio praesentium!
        </h1>

        <h1 className="menu-title-2">
          nuri<span>.bostan</span>
        </h1>
      </div>

      <div className="about-images">
        <img
          src="https://www.datocms-assets.com/70451/1651832348-about-2.png?fit=max&fm=webp&h=1200&q=90&w=1980"
          alt=""
        />
        <img
          src="https://www.datocms-assets.com/70451/1665381847-td.jpg?fit=max&fm=webp&h=1200&q=90&w=1980"
          alt=""
        />
      </div>

      <div className="about-text">
        <div className="about-text-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            accusantium necessitatibus fuga nihil harum consectetur unde
            impedit! Dolorum, consequatur odio?
          </p>
        </div>

        <div className="about-text-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            culpa aperiam aliquam at earum amet totam, consequuntur dicta magni
            cumque?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            molestiae ad corrupti libero commodi id.
          </p>
        </div>
      </div>

      <div className="about-locate">
        <div className="right-col">
          <span>lo</span>
          <span>-ca</span>
          <span>ted</span>
        </div>
        <div className="left-col">
          <span>is</span>
          <span>-tan</span>
          <span>bul</span>
        </div>
      </div>

      <div className="about-contact">
        <h1>we love all things photography and entertainment,</h1>
        <div className="about-contact-group">
          <h1>lets chat</h1>
          <h1>.</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
