import React from "react";

function Portfolio({ projects = [] }) {
  console.log(projects);
  if (!projects.length) return null;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects.map((project, index) => {
              if (project?.title && project?.image) {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    key={`project-${index}`}
                    className="columns portfolio-item"
                  >
                    <div className="item-wrap">
                      <div
                        onClick={() =>
                          window.open(
                            project?.url,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        // title={project.title}
                        // href={project?.url}
                        // target="_blank"
                        // rel="noopener noreferrer"
                      >
                        <img
                          alt={project.title}
                          src={project.image}
                          style={{
                            aspectRatio: 2 / 1,
                            height: 100,
                            objectFit: "contain",
                          }}
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{project.title}</h5>
                            <p>{project.category}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="fa fa-link" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
