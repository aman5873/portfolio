import React from "react";

function Testimonials({ testimonials }) {
  return (
    <>
      {testimonials && (
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>

              <div className="ten columns flex-container">
                <ul className="slides">
                  {testimonials.map((testimonialObj) => {
                    console.log(testimonialObj);
                    return (
                      <li key={testimonialObj?.user}>
                        <blockquote>
                          <p>{testimonialObj?.text}</p>
                          <cite>{testimonialObj?.user}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Testimonials;
