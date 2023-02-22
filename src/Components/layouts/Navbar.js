import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    function refreshPage() {
      window.location.reload(true);
    }

    return (
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="logo  me-auto">
             
            <Link to="/"><span className="brand">LearnTEK</span></Link><span className="in">.In</span>
            <br />
            <span
              style={{
                fontSize: "10px",
                position: "relative",
                bottom: "20px",
                right: "8px",
              }}
            >
             We explore the world!
            </span>
          </h1>
          <nav
            id="navbar"
            class="navbar navbar-expand-lg navbar-light bg-light navbar-default navbar-inverse order-last order-lg-0"
          >
            <ul nav nav-tabs>
              <li>
                <Link class="nav-link scrollto active" to="/#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link class="nav-link scrollto"target={"_blank"} to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link scrollto" target={"_blank"} to="/Services">
                  Services
                </Link>
              </li>

              <li>
                <Link class="nav-link scrollto" target={"_blank"} to="/Products">
                  Products
                </Link>
              </li>

              <li>
                <Link class="nav-link scrollto" target={"_blank"} to="/Careers">
                  Careers
                </Link>
              </li>

              <li>
                <Link class="nav-link scrollto" target={"_blank"} to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>

            <i class="bi bi-list mobile-nav-toggle"> </i>
          </nav>
        </div>
      </header>
    );
  }
}
