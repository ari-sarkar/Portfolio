import React from "react";
import "../stylesheets/Work.scss";
import { motion} from "framer-motion";
import wrihanshi from "../Media/wrihanshi-capture.png";
import smart from "../Media/smart.png";
import grocer from "../Media/grocer.png";
import uchiha from "../Media/uchiha.png";
const Work = () => {
  return (
    <section className="Work">
      {/* --------------------------LEFT card start -------------------------  */}
      <div className="mywork-wrapper">
        <h2 className="mywork-heading">
          My <span>Works</span>
        </h2>
        <div className="card-container">
          <div className="card-outline">
            <motion.img src={wrihanshi} className="wrihanshi" alt="wrihanshi"
            animate={{translateY:
              [1, -500, -1000, -1450, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
              // onHoverStart={e => {
              //   console.log("dada")
              // }}
            ></motion.img>
          </div>
          <h4 className="left-heading">The Wrihanshi Foundation</h4>
        </div>
        <div className="description-container">
          <p>N.G.O in my town.
          </p>
          <p>Skills used :</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Responsvie Design</li>
          </ul>
          <button
          ><a href="http://thewrihanshifoundation.com/" target="#">Visit Page</a>
          </button>
        </div>
      </div>
      {/* --------------------------LEFT card end-------------------------  */}


       {/* --------------------------RIGHT card start-------------------------  */}
       <div className="mywork-wrapper">
        <div className="description-container DesContainerTwo">
          <p>Business Website about Product Servicing.
          </p>
          <p>Skills used :</p>
          <ul>
            <li>Wordpress</li>
          </ul>
          <button
          ><a href="https://smarthomecareservice.com/" target="#">Visit Page</a>
          </button>
        </div>
        <div className="card-container">
          <div className="card-outline CardOutlineTwo">
            <motion.img src={smart} className="wrihanshi" alt="smart"
            animate={{translateY:
              [1, -320, -700, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
              // onHoverStart={e => {
              //   console.log("dada")
              // }}
            ></motion.img>
          </div>
          <h4 className="right-heading">Smart Home Care Service</h4>
        </div>
      </div>
      {/* --------------------------Right card end-------------------------  */}



      {/* --------------------------LEFT card start-------------------------  */}
      <div className="mywork-wrapper">
        <div className="card-container">
          <div className="card-outline CardOutlineThree">
            <motion.img src={grocer} className="grocer" alt="grocer"
            animate={{translateY:
              [1, -400, -1000, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
              // onHoverStart={e => {
              //   console.log("dada")
              // }}
            ></motion.img>
          </div>
          <h4 className="left-heading">Grocer</h4>
        </div>
        <div className="description-container DesContainerThree">
          <p>E-commerce Website
          </p>
          <p>Skills used :</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>REACT</li>
            <li>REACT ROUTER</li>
            <li>GSAP</li>
            <li>Responsvie Design</li>
          </ul>
          <button
          ><a href="https://smarthomecareservice.com/" target="#">Visit Page</a>
          </button>
        </div>
      </div>
      {/* --------------------------LEFT card end-------------------------  */}

       {/* --------------------------RIGHT card start-------------------------  */}
       <div className="mywork-wrapper">
        <div className="description-container DesContainerTwo">
          <p>Reveal Animation on Scroll
          </p>
          <p>Skills used :</p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>REACT</li>
            <li>GSAP</li>
            <li>GSAP SCROLL-TRIGGER</li>
            <li>REACT-PLAYER</li>
            <li>ADOBE ILUSTRATOR</li>
            <li>PHOTOSHOP</li>
          </ul>
          <button
          ><a href="https://smarthomecareservice.com/" target="#">Visit Page</a>
          </button>
        </div>
        <div className="card-container">
          <div className="card-outline CardOutlineTwo">
            <motion.img src={uchiha} className="uchiha" alt="uchiha"
            animate={{translateY:
              [1, -320, -800 ,-1700, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
              // onHoverStart={e => {
              //   console.log("dada")
              // }}
            ></motion.img>
          </div>
          <h4 className="right-heading">The Uchiha Clan</h4>
        </div>
      </div>
      {/* --------------------------Right card end-------------------------  */}


      {/* --------------------------LEFT card start-------------------------  */}
      {/* <div className="mywork-wrapper">
        <div className="card-container">
          <div className="card-outline CardOutlineThree">
            <motion.img src={smart} className="wrihanshi" alt="smart"
            animate={{translateY:
              [1, -320, -730, 1]}}
              transition={{
                duration: 10,
                ease: "easeInOut",
               // times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
                //repeatDelay: 1
              }}
              // onHoverStart={e => {
              //   console.log("dada")
              // }}
            ></motion.img>
          </div>
          <h4 className="left-heading">Smart Home Care Service</h4>
        </div>
        <div className="description-container DesContainerThree">
          <p>Business Website about Product Servicing.
          </p>
          <p>Skills used :</p>
          <ul>
            <li>Wordpress</li>
          </ul>
          <button
          ><a href="https://smarthomecareservice.com/" target="#">Visit Page</a>
          </button>
        </div>
      </div> */}
      {/* --------------------------LEFT card end-------------------------  */}
    </section>
  );
};
export default Work;
