import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import JSHeading from "./components/JSHeading";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <LandingPage />
      <About />
      <Work />
      <JSHeading />
      <Projects />
      <Contact />
      <Switch>
      <Route path="#about-me" exact component={About}/>
      {/* <Route path="#products" component={Products}/>
      <Route path="#locate-us" component={Locate}/> */}
      </Switch>
    </Router>

  );
}

export default App;
