import React, { useEffect } from "react";
import "../stylesheets/About.scss";
import myPic from "../Media/my-pic.jpg";
import Tilt from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useEffect(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger: ".About-wrapper",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},

      }
    })
    tl.fromTo(".about-me",{translateX: 500},{translateX: 0, ease: "Power2.easeOut", duration: 0.8})
    tl.fromTo(".left",{translateX: -500},{translateX: 0, ease: "Power2.easeOut", duration: 0.8})
    tl.fromTo(".my-pic",{rotateY: 180,},{rotateY:0, ease: "Power2.easeOut", duration: 0.8})
    tl.fromTo(".right",{translateX: 900,},{translateX: 0, ease: "Power2.easeOut", duration: 0.8},"-=0.5")
  })
  return (
    <section className="About-wrapper">
      <div className="left-right-wrapper">
        <h2 className="about-me">
          About <span>Me</span>
        </h2>
        <div className="left">
          <Tilt
            options={{
              easing: "cubic-bezier(.03,.98,.52,.99)",
              scale: 1,
              perspective: 1000,
              axis: "x",
            }}
          >
            <img src={myPic} alt="My-Pic" className="my-pic"></img>
          </Tilt>

          <p className="myName">Arindam Sarkar</p>
          <p className="dob">D.O.B: 05-04-1995</p>
        </div>
        <div className="right">
          <p>
            I am a Front End Web Developer looking for a Job where I can grow my
            skills to be able to call myself a professional developer.
          </p>
          <p>
            I am very passionate about my work.I strive to produce quality work
            to the best of my ability.
          </p>
          <p>
            I am continuously imporving my skills and love learning new things.
          </p>
          <p style={{ color: "red" }}>
            In coming future I want to be a FullStack Developer.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;