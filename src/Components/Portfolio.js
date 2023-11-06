import React from "react";

function Portfolio({ projects }) {
  return (
    <>
      {projects && (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects.map(function (projectObj) {
                  return (
                    <div
                      key={projectObj.title}
                      className="columns portfolio-item"
                    >
                      <div className="item-wrap">
                        <a href={projectObj.url} title={projectObj.title}>
                          <img alt={projectObj.title} src={projectObj.image} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{projectObj.title}</h5>
                              <p>{projectObj.category}</p>
                            </div>
                          </div>
                          <div className="link-icon">
                            <i className="fa fa-link"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Portfolio;
