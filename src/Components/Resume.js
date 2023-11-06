import React from "react";

function Resume({ resume }) {
  const { skills, work, education, skillMessage = null } = resume;

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education.map(function (educationObj) {
                return (
                  <div key={educationObj.intermediate_school}>
                    <h3>{educationObj.university}</h3>
                    <p className="info">
                      {educationObj.degree} <span>&bull;</span>
                      <em className="date">{educationObj.graduated}</em>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work.map(function (workObj) {
            return (
              <div key={workObj.company}>
                <h3>{workObj.company}</h3>
                <p className="info">
                  {workObj.title}
                  <span>&bull;</span> <em className="date">{workObj.years}</em>
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  {workObj?.description?.map((descObj, index) => {
                    return <li key={`desc-${index}`}>{descObj}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillMessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills.map(function (skillObj) {
                var className = "bar-expand " + skillObj.name.toLowerCase();
                return (
                  <li key={skillObj.name}>
                    <span
                      style={{ width: skillObj.level }}
                      className={className}
                    ></span>
                    <em>{skillObj.name}</em>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
