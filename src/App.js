import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import JSHeading from "./components/JSHeading";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
function App() {
  ReactGA.initialize('G-JNTZKQ6Q5X');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <Navigation />
      <LandingPage />
      <About />
      <Work />
      <JSHeading />
      <Projects />
      <Contact />
      <Switch>
        <Route path="#" exact component={LandingPage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/projects" component={Projects}></Route>
        {/* <Route path="/projects" component={JSHeading}></Route> */}
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
