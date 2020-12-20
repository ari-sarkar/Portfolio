import React, { useEffect, useState } from "react";
import "../stylesheets/Contact.scss";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Contact",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      },
    });
    tl.fromTo(
      ".contact-heading",
      { translateX: 500 },
      { translateX: 0, duration: 1, ease: "Power2.easeOut" }
    );
    tl.fromTo(
      ".contact-form",
      { translateX: -500 },
      { translateX: 0, duration: 1, ease: "Power2.easeOut" }
    );
    tl.fromTo(
      ".text-social-wrapper p",
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, ease: "Power2.easeOut" },"-=0.7"
    );
    tl.fromTo(
      ".social-media i",
      { translateY: 500 },
      { translateY: 0, duration: 1, ease: "Power2.easeOut", stagger: 0.3 },
      "-=0.8"
    );
  }, []);
 
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
          alert("Message Sent Sucessfully");
          SetCount(0)
        },
        error => {
          alert(error.text);
        }
      );
    e.target.form.reset();
  }
  const [count, SetCount] = useState(0);
  return (
    <section className="Contact" id="contact">
      <div className="contact-form-wrapper">
        <h2 className="contact-heading">
          Contact <span> Me</span>
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <p className="message-me">Leave me a Message</p>
          <input
            className="name"
            placeholder="Full Name"
            type="text"
            onChange={() => SetCount(count + 1)}
            name="name"
            required
          ></input>
          <input
            className="e-mail"
            placeholder="E-Mail"
            name="e-mail"
            type="email"
            onChange={() => SetCount(count + 1)}
            required
          ></input>
          <input
            className="message"
            placeholder="Message"
            name="message"
            onChange={() => SetCount(count + 1)}
            required
          ></input>
          <button
            className="send-botton"
            onClick={count > 10 ? sendEmail : ""}
            type="submit"
            value="Send"
          >
            {console.log(count)}
            Send
          </button>
        </form>
        <div className="text-social-wrapper">
          <p className="contact-sec-text">I would Love to hear from You</p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/arindam-sarkar-6169bb1b7/"
            target="#"
          >
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/ari-sarkar" target="#">
            <i class="fab fa-github-square fa-3x"></i>
          </a>
          <Popup trigger={<i class="fas fa-envelope fa-3x"></i>} position="top center">
            <div>arisarkar.mail@gmail.com</div>
          </Popup>
          
          <a href="https://www.facebook.com/sarkarari/" target="#">
            <i class="fab fa-facebook-square fa-3x"></i>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
