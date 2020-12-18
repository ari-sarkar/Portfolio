import React, { useEffect, useState } from "react";
import "../stylesheets/Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';
import gsap from "gsap";
const Navigation = () => {
  const [count, Setcount] = useState(true);
  useEffect(() => {
    const tl = gsap.timeline({});
    tl.fromTo(
      ".navigation-wrapper",
      { translateY: 0 },
      { translateY: -500, duration: 1, delay: 3 }
    );
    tl.fromTo(
      ".right-arrow",
      { autoAlpha: 0, rotate: "0deg" },
      { autoAlpha: 1, rotate: "90deg", duration: 1 },
      "-=0.5"
    );
  }, []);
  if (count === false) {
    gsap.to(".navigation-wrapper", {
      translateY: 0,
      duration: 1,
      ease: "Power4.easeOut",
    });
    gsap.to(".right-arrow", {
      position: "absolute",
      //translateY: 72,
      rotate: "-90deg",
      duration: 1,
      ease: "Power4.easeOut",
    });
  } else {
    gsap.fromTo(
      ".navigation-wrapper",
      {
        translateY: 0,
      },
      {
        translateY: -500,
        duration: 1,
        ease: "Power4.easeOut",
      }
    );
    gsap.to(".right-arrow", {
      translateY: 0,
      rotate: "90deg",
      duration: 1,
      ease: "Power4.easeOut",
    });
  }
  return (
    <header className="header">
      <div
        className="navigation-wrapper"
        style={count ? {} : { translateX: "-10px" }}
      >
        <Link smooth to="#" className="link">
        <li>Home</li>
        </Link>
        <Link smooth to="#about" className="link">
        <li>About Me</li>
        </Link>
        <Link smooth to="#work" className="link">
        <li>Work</li>
        </Link>
        <Link smooth to="#projects" className="link">
        <li>Projects</li>
        </Link>
        <Link smooth to="#contact" className="link">
        <li>Contact</li>
        </Link>
        
      </div>
      <svg
        className="right-arrow"
        viewBox="0 0 20 20"
        onClick={() => Setcount(!count)}
      >
        <path
          fill="#686bfd"
          d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
        ></path>
      </svg>
      {console.log(count)}
    </header>
  );
};
export default Navigation;
