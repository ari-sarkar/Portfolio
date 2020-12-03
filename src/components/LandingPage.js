import React, {useEffect} from "react";
import "../stylesheets/LandingPage.scss";
import webDev from "../Media/webDev.png";
const LandingPage = () => {
    useEffect(()=>{
        document.addEventListener('mousemove', paralax)
        function paralax(e){
            this.querySelectorAll('.layer').forEach(layer => {
                const speed= layer.getAttribute('dataSpeed')
    
                const x = (window.innerWidth -e.pageX*speed)/100;
                const y =(window.innerHeight -e.pageY*speed)/100;
    
                layer.style.transform = `translateX(${x}px) translatey(${y}px)`;
            });
        }
    },[])
  return (
    <section className="landing-page-wrapper">
      <h1 className="layer" dataSpeed="10">
        <span className="main-heading-span1">Front </span>
        <span className="main-heading-span2">End Web Developer</span>
      </h1>
      <img src={webDev} alt="WebDeveloper" dataSpeed="5" className="layer"></img>
    </section>
  );
};
export default LandingPage;
