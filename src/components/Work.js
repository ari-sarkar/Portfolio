import React, { useEffect } from "react";
import "../stylesheets/Work.scss";
import { motion} from "framer-motion";
import wrihanshi from "../Media/wrihanshi-capture.png";
import smart from "../Media/smart.png";
import grocer from "../Media/grocer.png";
import uchiha from "../Media/uchiha.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  useEffect(()=>{
    const tl1=gsap.timeline({
      scrollTrigger:{
        trigger: ".Work",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
        //scrub: 1,
       // pin: true,
      }
    })
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger: "#card2",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
       // scrub: 1,
        //pin: true,
      }
    })
    const tl3=gsap.timeline({
      scrollTrigger:{
        trigger: "#card3",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
        //scrub: 1,
        //pin: true,
      }
    })
    const tl4=gsap.timeline({
      scrollTrigger:{
        trigger: "#card4",
        start: "-=500",
        end: "bottom bottom",
        //markers:{startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
        //scrub: 1,
        //pin: true,
      }
    })
    tl1.fromTo(".mywork-heading",{translateX: 500},{translateX:0, duration:  1, ease: "Power2.easeOut"})
    //  CAED 1
    tl1.fromTo("#card1",{translateX: -900},{translateX:0, duration:  1, ease: "Power2.easeOut"})
    tl1.fromTo(".card-image-overlay1",{width: "100%"},{width: "0%", duration:  1, ease: "Power2.easeOut"})
    tl1.fromTo("#des1",{translateX: 900},{translateX:0, duration:  1, ease: "Power2.easeOut"}, "-=0.8")
    //  CAED 1 END
    //  CAED 2 
    tl2.fromTo("#card2",{translateX: 900},{translateX:0, duration:  1, ease: "Power2.easeOut"})
    tl2.fromTo(".card-image-overlay2",{width: "100%"},{width: "0%", duration:  1, ease: "Power2.easeOut"})
    tl2.fromTo("#des2",{translateX: -900},{translateX:0, duration:  1, ease: "Power2.easeOut"}, "-=0.8")
    //  CAED 2 END
    //  CAED 3
    tl3.fromTo("#card3",{translateX: -900},{translateX:0, duration:  1, ease: "Power2.easeOut"})
    tl3.fromTo(".card-image-overlay3",{width: "100%"},{width: "0%", duration:  1, ease: "Power2.easeOut"})
    tl3.fromTo("#des3",{translateX: 900},{translateX:0, duration:  1, ease: "Power2.easeOut"}, "-=0.8")
    //  CAED 3 END
    //  CAED 4
    tl4.fromTo("#card4",{translateX: 900},{translateX:0, duration:  1, ease: "Power2.easeOut"})
    tl4.fromTo(".card-image-overlay4",{width: "100%"},{width: "0%", duration:  1, ease: "Power2.easeOut"})
    tl4.fromTo("#des4",{translateX: -900},{translateX:0, duration:  1, ease: "Power2.easeOut"}, "-=0.8")
    //  CAED 4 END
    
  })
  return (
    <section className="Work" id="work">
      {/* --------------------------LEFT card start -------------------------  */}
      <h2 className="mywork-heading">
          My <span>Works</span>
        </h2>
      <div className="mywork-wrapper" id="wrihanshi-foundation">
        <div className="card-container" id="card1">
          <div className="card-outline" id="card-outline1">
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
            <div className="card-image-overlay1"></div>
          </div>
          <h4 className="left-heading">The Wrihanshi Foundation</h4>
        </div>
        <div className="description-container" id="des1">
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
       <div className="mywork-wrapper" id="right-card">
        <div className="description-container DesContainerTwo" id="des2">
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
        <div className="card-container" id="card2">
          <div className="card-outline CardOutlineTwo"  id="card-outline2">
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
            <div className="card-image-overlay2"></div>
          </div>
          <h4 className="right-heading">Smart Home Care Service</h4>
        </div>
      </div>
      {/* --------------------------Right card end-------------------------  */}



      {/* --------------------------LEFT card start-------------------------  */}
      <div className="mywork-wrapper">
        <div className="card-container" id="card3">
          <div className="card-outline CardOutlineThree"  id="card-outline3">
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
            <div className="card-image-overlay3"></div>
          </div>
          <h4 className="left-heading">Grocer</h4>
        </div>
        <div className="description-container DesContainerThree"  id="des3">
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
          ><a href="./" target="#">Visit Page</a>
          </button>
        </div>
      </div>
      {/* --------------------------LEFT card end-------------------------  */}

       {/* --------------------------RIGHT card start-------------------------  */}
       <div className="mywork-wrapper" id="right-card">
        <div className="description-container DesContainerTwo"  id="des4">
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
          ><a href="./" target="#">Visit Page</a>
          </button>
        </div>
        <div className="card-container" id="card4">
          <div className="card-outline CardOutlineTwo"  id="card-outline4">
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
            <div className="card-image-overlay4"></div>
          </div>
          <h4 className="right-heading">The Uchiha Clan</h4>
        </div>
      </div>
      {/* --------------------------Right card end-------------------------  */}


    </section>
  );
};
export default Work;
