// Packages used
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import courseDetails from "./Components/courseDetails";

import { Helmet } from "react-helmet";
// Component Splitted
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Products from "./Components/Products"; 
import Footer from "./Components/Footer";
import End from "./Components/End";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact"; 
import Blogs from "./Components/Blog";
    //autentication
import { AuthProvider } from "./Components/auth/authContext";
import ProtectedRoute from "./Components/auth/protectedRoute";
import Login from "./Components/auth/Login";
import Home from"./Components/Home";
function App() {
 
    return (
      <AuthProvider>

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
              <ProtectedRoute  path="/About" component={About}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/login" component={Register}/>
              <ProtectedRoute path="/home" component={Home}/>
              <ProtectedRoute exact path="/Services" component={Services}/>
              <ProtectedRoute exact path="/Careers" component={Careers}/>
              <ProtectedRoute exact path="/Contact" component={Contact}/>
              <ProtectedRoute exact path="/Products" component={Products}/>
              <ProtectedRoute exact path="/courseDetails" component={courseDetails}/>
              <ProtectedRoute exact path="/Blogs" component={Blogs}/>
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
      </AuthProvider>
    );
  }
export default App;

