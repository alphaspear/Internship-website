import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation2";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Features } from "./components/features";
import { About } from "./components/about";
//import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
//import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
//import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    
      /*
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      */
   <div>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={() => <><Header data={landingPageData.Header} /><Features data={landingPageData.Features} /><Gallery data={landingPageData.Gallery}/><Testimonials data={landingPageData.Testimonials} /><Footer data={landingPageData.Footer} />   </>} />
        <Route path="/about" exact component={() => <><About data={landingPageData.About} /><Footer data={landingPageData.Footer} /></>} />
        <Route path="/contact" exact component={() => <><Contact data={landingPageData.Contact} /> <Footer data={landingPageData.Footer} />   </>} />
        <Route path="/services/web_development" exact component={() => <><Header data={landingPageData.Header} /><Features data={landingPageData.Features} /><Gallery data={landingPageData.Gallery}/><Testimonials data={landingPageData.Testimonials} /><Footer data={landingPageData.Footer} />   </>} />      
        <Route path="/services/software_development" exact component={() => <><Header data={landingPageData.Header} /><Features data={landingPageData.Features} /><Gallery data={landingPageData.Gallery}/><Testimonials data={landingPageData.Testimonials} /><Footer data={landingPageData.Footer} />   </>} />   
        <Route path="/services/mobile_app_development" exact component={() => <><Header data={landingPageData.Header} /><Features data={landingPageData.Features} /><Gallery data={landingPageData.Gallery}/><Testimonials data={landingPageData.Testimonials} /><Footer data={landingPageData.Footer} />   </>} />      
        
      </Switch>
    </Router>
  </div>
  
    
  );
};

export default App;