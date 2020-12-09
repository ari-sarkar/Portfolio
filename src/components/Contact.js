import React from "react";
import "../stylesheets/Contact.scss";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_04dbtfu",
        "template_n8a5xpc",
        e.target.form,
        "user_7FB02iHfSavyhB6EpEZ9k"
      )
      .then(
        result => {
          alert("sent");
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.form.reset();
  }
  return (
    <section className="Contact">
      <div className="contact-form-wrapper">
        <h2 className="contact-heading">
          Contact <span> Me</span>
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <p className="message-me">Leave me a Message</p>
          <input className="name" placeholder="Full Name " name="name"></input>
          <input className="e-mail" placeholder="E-Mail" name="e-mail"></input>
          <input
            className="message"
            placeholder="Message"
            name="message"
          ></input>
          <Popup
            trigger={
              <button
                className="send-botton"
                onClick={sendEmail}
                type="submit"
                value="Send"
              >
                Send
              </button>
            }
            position="right center"
          >
            <div>Popup content here !!</div>
          </Popup>
        </form>


        <div className="social-media">
        <i class="fab fa-linkedin fa-3x"></i>
        <i class="fab fa-github-square fa-3x"></i>
        <i class="fas fa-envelope fa-3x"></i>
        <i class="fab fa-facebook-square fa-3x"></i>
        </div>
      </div>
    </section>
  );
};
export default Contact;
