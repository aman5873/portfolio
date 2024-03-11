import React, { useState } from "react";
import Loading from "react-fullscreen-loading";
import axios from "axios";

import FormResponseModal from "./FormResponseModal";

async function postContactFormData(data) {
  const api_url = `https://x8ki-letl-twmt.n7.xano.io/api:5Qh37sEM/portfolio_contact_form_api`;
  return await axios.post(api_url, data).then((res) => {
    return res;
  });
}
async function sendSlackNotification(data) {
  const api_url = `https://server-api-9ije.onrender.com/slack_notification/`;
  return await axios.post(api_url, data).then((res) => {
    return res;
  });
}

function Contact({ address, contactMeMessage = null, about }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  let responseMessage =
    "Thank you for connecting!\nI appreciate your interest and will get back to you shortly.";

  function resetForm() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const handleClick = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      subject: subject,
      email: email,
      message: message,
    };
    let slackMessage =
      "\n\n-----------------------\nportfolio contact-form\n{\n";
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        slackMessage += `${key}: "${formData[key]}",`;
      }
    }
    setIsRefreshing(true);
    postContactFormData(formData).then((res) => {
      setIsRefreshing(false);
      if (res?.data?.status) {
        setShowForm(true);
        sendSlackNotification({ message: `${slackMessage}\n}` });
        resetForm();
      } else {
        responseMessage = null;
      }
    });
  };

  return (
    <div>
      <Loading
        loading={isRefreshing}
        background="#fff6"
        loaderColor="#000000"
      />

      <FormResponseModal
        show={showForm}
        message={responseMessage ?? "Internal Server Error!"}
        variant={responseMessage ? "Success" : "Error"}
        handleClose={() => {
          setShowForm(false);
        }}
      />

      {address && about && (
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            {contactMeMessage && (
              <div className="ten columns">
                <p className="lead">{contactMeMessage}</p>
              </div>
            )}
          </div>

          <div className="row">
            <div className="eight columns">
              <form id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      value={name}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      value={email}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      value={subject}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="submit"
                    >
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>

            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address </h4>
                <p className="address">
                  {name}
                  <br />
                  {address.street} <br />
                  {address.city}, {address.state} {address.zip}
                  <br />
                  <span>
                    {about?.phone}
                    <br />
                    {about?.email}
                  </span>
                </p>
              </div>

              <div className="widget widget_tweets"></div>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}

export default Contact;
