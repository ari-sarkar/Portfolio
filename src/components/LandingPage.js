import React, { useEffect } from "react";
import "../stylesheets/LandingPage.scss";
import webDev from "../Media/web-developer.svg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { HashLink as Link } from 'react-router-hash-link';
const LandingPage = () => {
  useEffect(() => {
    document.addEventListener("mousemove", paralax);
    function paralax(e) {
      this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute("dataspeed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translatey(${y}px)`;
      });
    }
    const tl = gsap.timeline({});
    tl.fromTo(
      "#frontEndDevText",
      { translateX: -1000 },
      { translateX: 0, ease: "Power1.easeOut", duration: 1 }
    )
      .fromTo(
        "#frontEndDevImg",
        { translateX: 1000 },
        { translateX: 0, ease: "Power1.easeOut", duration: 1 },
        "-=0.9"
      )
      .to(".hire-me", { autoAlpha: 1, duration: 1 });
  }, []);
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <section className="landing-page-wrapper">
      {/* LLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOGGGGGGGGGGGGGGGGGOOOOOOOOOOOOOOOOOO */}
      <svg
        version="1.1"
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        space="preserve"
      >
        <motion.path
          className="st0"
          d="M163.4,481.5c-11.9,5.6-17.6,18-18.2,19.3c0,0.1-0.1,0.1-0.1,0.2c-1.7,5.5-65,211.9-35.9,186.3
	c25.9-22.8,61.7-239.8,70.1-292.8c0.4-2.5,4-2.6,4.5-0.2c6.2,27.4,21.1,99.6,21.7,166.7c0.8,84.9,21.2,142.4,21.2,142.4"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M148.5,564.9c8.8-1.5,28.7-9.8,56.7,0"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M258.1,583.9c0,0-16.9-24.8,9.4-38.5c0,0,12.2-8.7,30.3,52.3c0,0,8.7,33-17.3,64.1c0,0-18.9,16.1-9-65.7
  c0,0-0.8-21.6,24.4-37.8c25.2-16.1,62.9,33,55.8,50.7"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M378.9,590.6c0,0,15.3,24,9.8,46"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M361.6,476.7c-0.9-3.2,3.4-5,5.1-2.3c7.4,11.6,17.7,30.3,19.9,46.1C389.7,541.7,369,503.6,361.6,476.7z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M428.8,558l18.9,61c0,0,7.9-49.2,11.8-53.5c3.9-4.3,51.1,20.4,53.1,73.5"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M622.7,447.1c0,0,5.1,171.1,27.9,171.1c0,0,19.3-4.7,16.1-41.7c0,0-3.5-26.5-27.5-49.8c0,0-35.8-10.4-78.7,31.3
  c0,0-22,24.8-4.3,60.2S649,639,649,639s23.6-10.2,27.5-18.9"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M744.6,551.3c-6.3,66.9-38.1,51.1-38.1,51.1c-37.8-32.2,14.2-81.5,14.2-81.5s20.8,10,29.1,38.3
  c8.3,28.3-9.4,18.9,19.3,52.3"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M784.7,543.4c0,0,20.1,61.3,18.5,70.8c-1.6,9.4,24-74.3,24-74.3s18.5,49.9,14.9,52.7
  c-3.5,2.8,24-47.6,31.9-52.7c7.9-5.1,30.3,20.4,28.7,31.1c-1.6,10.6,18.9,26.7,18.9,26.7"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1115.4,448.7c0,0,18.9-39.3-44.8-47.2c0,0-55.8,0-43.3,28.3c12.6,28.3,155.7,94.4,155.7,94.4
  s59,37.8,15.7,65.3c-43.3,27.5-142.4,0-142.4,0"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1258.3,486.4c0,0-39.1,20.4-24.9,73.9c14.2,53.5,51.1,14.2,51.1,14.2v-26.7l-27.1-65.3
  c0,0,22.4,59.8,37.3,69.2c0,0,8.7,10.2,23.6,14.2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1334.1,501.6c0,0,20.6,13.3,23.4,25.7c2.8,12.4-6.3,37.8-23.4,44.8c-17.1,7.1,16.9-58.4,20.6-58.8
  c0,0,3.7-5.1,11-2.2c7.3,2.9,20.4,4.9,38.5,23.2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1419.2,376.5c0,0,35.4,208.8,26,236c-9.4,27.1,17.1-17.1,17.1-17.1"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1518.9,433.7c0,0-35.4,84.1-72,103.4c0,0-13,2.2,2.4,5.7s63.7,26,87.9,24.8"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1630.4,504.5c0,0-11.8-27.7-17.7-26c-5.9,1.8-26.5,3.5-38.3,17.1c-11.8,13.6-21.8,33-14.7,47.8
	c7.1,14.7,20.1,26.5,37.2,27.7c17.1,1.2,37.2-19.5,41.3-36c0.2-1,0.4-1.9,0.5-2.9c1.1-15.8-19.8-27.6-8.2-48.1
  c0,0-15.9,47.5,52.5,76.4"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
        <motion.path
          className="st0"
          d="M1706.5,471.5c0,0,37.8,18.8,47.8,53.4c10,34.5-28.3,49.9-28.3,49.9l-7.7-7c0,0,8.8-80.9,46-112.1
  c0,0,2.9-14.7,54.3,53.1"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        />
      </svg>
      {/* LLLLLLLLLLLLLLOOOOOOOOOOOOOOOGGGGGGGGGGGGGGGGGOOOOOOOOOOOOOOOOOOOO */}
      <h1 id="frontEndDevText" className="layer" dataspeed="10">
        <span className="main-heading-span1">Front </span>
        <span className="main-heading-span2">End Web Developer</span>
      </h1>
      <img
        id="frontEndDevImg"
        src={webDev}
        alt="webDevloper"
        className="layer"
        dataspeed="5"
      ></img>
      <Link smooth to="#contact">
      <p className="hire-me">Hire Me</p>
      </Link>
    </section>
  );
};
export default LandingPage;
