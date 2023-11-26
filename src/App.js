// Packages used
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import courseDetails from "./Components/layouts/courseDetails";

import { Helmet } from "react-helmet";
// Component Splitted
import Navbar from "./Components/layouts/Navbar";
import Services from "./Components/layouts/Services";
import Hero from "./Components/layouts/Hero";
import About from "./Components/layouts/About";
import Products from "./Components/layouts/Products"; 
import Footer from "./Components/layouts/Footer";
import End from "./Components/layouts/End";
import Careers from "./Components/layouts/Careers";
import Contact from "./Components/layouts/Contact"; 
import Blogs from "./Components/layouts/Blog";
function App() {
 
    return (
      <Router>

        <div className="App">

          <Helmet>
            <script src="assets/vendor/purecounter/purecounter.js"/>
            <script src="assets/vendor/aos/aos.js"/>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"/>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
            <script src="assets/vendor/swiper/swiper-bundle.min.js" />
            <script src="assets/vendor/php-email-form/validate.js" />
            <script src="assets/js/main.js" type="text/javascript" />
          </Helmet>

          <Navbar />
          
          <Route exact path="/" component={Hero}/>

          <Switch>
            <main id="main">
              <Route exact path="/About" component={About}/>
              <Route exact path="/Services" component={Services}/>
              <Route exact path="/Careers" component={Careers}/>
              <Route exact path="/Contact" component={Contact}/>
              <Route exact path="/Products" component={Products}/>
              <Route exact path="/courseDetails" component={courseDetails}/>
              <Route exact path="/Blogs" component={Blogs}/>
            </main>
          </Switch>
          
          <footer id="footer">
            <div class="footer-top">
              <Footer />
            </div>
            <End />
          </footer>

          <a
            href="#"
            class="back-to-top d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-arrow-up-short"></i>
          </a>
        </div>
      </Router>
    );
  }
export default App;

