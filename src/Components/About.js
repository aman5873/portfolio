import React from "react";

function About(props) {
  const { about, address, resumeDownload } = props;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={"./images/profile-image.jpg"}
            // src={about?.image}
            onError={(err) => {
              err.target.src = "images/profile-image.jpg";
            }}
            alt="Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          {/* <h2>About Me</h2>
          <p>{about?.bio}</p> */}
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{about?.name}</span>
                <br />
                <span>
                  {address?.street}
                  <br />
                  {address?.city} {address?.state}, {address?.zip}
                </span>
                <br />
                <span>{about?.phone}</span>
                <br />
                <span>{about?.email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
