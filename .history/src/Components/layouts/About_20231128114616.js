import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <section id="about" class="about section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="content col-xl-12 col-lg-12 d-flex align-items-center">
              <div class="content">
                <h1 class="logo me-auto">
                  <Link to="/" className="about-li">
                    About: LearnTEK In
                  </Link>
                </h1>

                <p align="justify" style={{ fontSize: "22px", color: "black" }}>
                  <p>
                    {" "}
                    <strong className="st-b">Learn TEK In</strong> is an
                    organization that provides a comprehensive fellowship
                    program in website development, Android application
                    development, data analytics, and data science. The
                    organization aims to bridge the gap between academia and
                    industry by providing hands-on training in these domains.
                    next one.
                  </p>
                  <br />
                  <br />
                  The <strong className="st-b">Fellowship Program</strong>{" "}
                  offered by <strong className="st-b">Learn TEK In</strong> is
                  designed to equip individuals with the necessary skills to
                  excel in the technology industry. The program is divided into
                  modules, each covering a specific aspect of the technology
                  domain. Learners are expected to complete each module before
                  moving on to the next module. You may have to choose any one
                  module from each module.
                  <br />
                  <br />
                  The <strong className="st-b">Internship</strong> offered by{" "}
                  <strong className="st-b">Learn TEK In</strong> is designed to
                  equip individuals with the necessary skills to excel in the
                  technology industry. This internship will sharpe the skills in
                  the various technologies in the digital world
                  <br />
                  <br />
                  The{" "}
                  <strong className="st-b">
                    various business services and technical solutions
                  </strong>{" "}
                  offered by <strong className="st-b">Learn TEK In</strong> is
                  designed to equip industries with the necessary technologies
                  to excel in the technology industry.
                </p>
                <Switch></Switch>
                <div class="container-fluid" data-aos="fade-up">
                  <div class="section-title">
                    <p>
                      <h1
                        style={{ color: "black" }}
                        align="left"
                        className="mt-3"
                      >
                        Selvavel Shanmugam
                      </h1>{" "}
                      <p style={{ color: "black" }} align="left">
                        Founder, CEO
                      </p>
                      <p
                        align="justify"
                        className="mt-3"
                        style={{ fontSize: "22px", color: "black" }}
                      >
                        Selvavel Shanmugam is a licensed financial professional
                        in the US states North Carolina, Georgia, and Texas.
                        Leveraging 30 years of skills, experience, and
                        relationships of enthusiastic leaders in the financial
                        industry, Selvavel helped families improve their lives
                        through sustaining financial solutions. Also provided
                        opportunity to ambitious individuals to be part of his
                        recession proof business.
                      </p>
                      <h1
                        align="left"
                        className="mt-3"
                        style={{ color: "black" }}
                      >
                        Neelima Devineni
                      </h1>{" "}
                      <p style={{ color: "black" }} align="left">
                        Co-Founder, CEO
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
