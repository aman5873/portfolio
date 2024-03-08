import React from "react";

function Footer({ social, about }) {
  const year = new Date().getFullYear();
  const copyrightText = `${year} ${about?.name ?? "Aman Singh Chauhan"}`;
  return (
    <>
      {social && (
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {social.map((network) => {
                  return (
                    <li key={network.name}>
                      <a href={network.url} target="_blank">
                        <i className={network.className}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <ul></ul>

              <ul className="copyright">
                <li>&copy; - {copyrightText}</li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
