import React from "react";

const skillIcons = {
  javascript:
    "https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F",
  html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  css: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  sass: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  ant_design:
    "https://img.shields.io/badge/AntDesign-0170FE?style=for-the-badge&logo=antdesign&logoColor=white",
  tailwind:
    "https://img.shields.io/badge/Tailwind_CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000",
  bootstrap:
    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
  mui: "https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white",
  react:
    "https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB",
  react_native:
    "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  next_js:
    "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  redux:
    "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
  node_js:
    "https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A",
  express_js:
    "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  mongodb:
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  django:
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
  vS_code:
    "https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white",
  git: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  markdown:
    "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
  aws: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
  google_analytics:
    "https://img.shields.io/badge/Google%20Analytics-E37400.svg?style=for-the-badge&logo=Google-Analytics&logoColor=white",
  python:
    "https://img.shields.io/badge/Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white",
};

function findIconURL(skillName) {
  const normalizedSkillName = skillName.toLowerCase().replace(/\s/g, "_");

  return skillIcons[normalizedSkillName];
}

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
              {education.map((educationObj, index) => {
                return (
                  <div key={`education-${index}`}>
                    <h3>{educationObj?.university}</h3>
                    <p className="info">
                      {educationObj?.degree} <span>&bull;</span>
                      <em className="date">{educationObj?.graduated}</em>
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
          <div
            style={{ display: "flex", gap: 5, flexWrap: "wrap", width: "100%" }}
          >
            {skills?.map((skillObj, index) => {
              const iconURL = findIconURL(skillObj.name);
              if (!skillObj.name?.length) return null;

              return (
                <img
                  key={`skill-icon-${index + 1}`}
                  className="skill-icon-img"
                  src={iconURL}
                  alt={skillObj.name}
                />
              );
            })}
          </div>

          {/* <div className="bars">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Resume;
