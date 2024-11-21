import React, { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";

export default class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <section id="about" class="about section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row no-gutters">
              <div class="content">
      

                <p align="justify" style={{ fontSize: "18px", color: "black" }}>
                  <p style={{ margin: "1rem" }}>
                    <strong style={{fontSize:"33px"}} className="st-b">Learn TEK In</strong> is an
                    organization that provides a comprehensive fellowship
                    program in website development, Android application
                    development, data analytics, and data science. The
                    organization aims to bridge the gap between academia and
                    industry by providing hands-on training in these domains.
                    next one.
                  </p>
                  {/* Goal and mission and vision */}
                  <div class="container-fluid">
                    <div class="jumbotron">
                      <h1 class="display-4">Our Goals</h1>
                      <p class="lead">
                        "Embrace the convergence of modern innovation and
                        timeless tradition, for in this fusion lies the essence
                        of progress. As Learntekin pioneers the integration of
                        technology in realms as diverse as agriculture,
                        healthcare, organic products, robotics, and space
                        research, remember: our commitment to innovation honors
                        the past while shaping the future."
                      </p>
                    </div>
                    {/*   Team members */}
 

                    <div class="row">
                      <div class="col-lg-4 col-md-12 align-item-center">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Vision</h5>
                            <span class="card-text">
                              Deliver the high standard technologies to evolve
                              the small scale industries to globally. To be
                              recognized as a leading institution
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Mission</h5>
                            <span class="card-text ">
                              Focus on individuals with potentials to make
                              significant contributions to society through
                              technological advancements
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Values</h5>
                            <span class="card-text">
                              Values are our <b>guiding lights</b>, shaping our
                              actions and inspire us
                              to make a difference and lead us towards
                              success.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fellowship program */}
                  <div class="container-fluid">
                    <div class="jumbotron">
                      <h1 class="display-4">Fellowship Program</h1>
                    </div>

                    <div class="row">
                      <div class="col-lg-5">
                        <div class="card">
                          <div class="card-body">
                            {/* Image */}
                            <img
                              src="assets/img/fellowship.png"
                              height="300"
                              width="300"
                              class="rounded float-left"
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-5">
                        <div class="card">
                          <div class="card-body">
                            {/* Fellowship  Overview */}
                            <p style={{ margin: "1rem" }}>
                              The{" "}
                              <strong className="st-b" style={{fontSize:"33px"}}>
                                Fellowship Program
                              </strong>{" "}
                              offered by{" "}
                              <strong style={{fontSize:"18px"}} className="st-b">Learn TEK In</strong> is
                              designed to equip individuals with the necessary
                              skills to excel in the technology industry. The
                              program is divided into modules, each covering a
                              specific aspect of the technology domain. Learners
                              are expected to complete each module before moving
                              on to the next module. You may have to choose any
                              one module from each module.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Internship Program */}
                  <div class="container-fluid">
                    <div class="jumbotron">
                      <h1 class="display-4">Internship Program</h1>
                    </div>

                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card">
                          <div class="card-body">
                            {/* Image */}
                            <img
                              src="assets/img/internship.png"
                              height="300"
                              width="300"
                              class="rounded float-left"
                              alt="..."
                            ></img>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-5">
                        <div class="card">
                          <div class="card-body">
                            {/* Internship  Overview */}
                            <p style={{ margin: "1rem" }}>
                              The <strong style={{fontSize:"33px"}} className="st-b">Internship</strong>{" "}
                              offered by{" "}
                              <strong  style={{fontSize:"18px"}} className="st-b">Learn TEK In</strong> is
                              designed to equip individuals with the necessary
                              skills to excel in the technology industry. This
                              internship will sharpe the skills in the various
                              technologies in the digital world
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p style={{ margin: "1rem" }}>
                    The{" "}
                    <strong style={{fontSize:"33px"}} className="st-b">
                      Various business services and technical solutions
                    </strong>{" "}
                    offered by <strong style={{fontSize:"18px"}} className="st-b">Learn TEK In</strong> is
                    designed to equip industries with the necessary technologies
                    to excel in the technology industry.
                  </p>
                </p>

                <div class="container-fluid" data-aos="fade-up">
                  <div class="section-title">
                    {/* Selvavel bio */}
                    <p>
                      <h1
                        style={{ color: "black" }}
                        align="left"
                        className="mt-3"
                      >
                        Selvavel Shanmugam
                      </h1>{" "}
                      <p style={{ color: "black" }} align="left">
                        Founder | Chairman | Board Member of LearnTEKIn & financeFrenzy
                      </p>
                      <p
                        align="justify"
                        className="mt-3"
                        style={{ fontSize: "22px", color: "black" }}
                      ></p>
                    </p>

                    {/* Rajeshwaran bio */}

                    <>
                      <h1
                        style={{ color: "black" }}
                        align="left"
                        className="mt-3"
                      >
                        Rajeshwaran Selvam
                      </h1>{" "}
                      <p style={{ color: "black" }} align="left">
                     Technical Lead | Board Member of LearnTEKIn 
                      </p>
                      <p
                        align="justify"
                        className="mt-3"
                        style={{ fontSize: "22px", color: "black" }}
                      ></p>
                    </>


                  </div>
                </div>
              </div>
 
          </div>
        </div>
      </section>
    );
  }
}
