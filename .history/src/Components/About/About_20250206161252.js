import React, { Component } from "react";
import Testimonials from "../Testimonials/Testimonials";
import CompanyTestimonials from "../Testimonials/CompanyTestimonials";
import StudentPlacementCompanies from "../Testimonials/StudentPlacementCompanies";
import SuccessDashboard from "../Testimonials/SuccessDashboard";

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
                  <strong style={{ fontSize: "33px" }} className="st-b">
                    Learn TEK In
                  </strong>{" "}
                  is an organization that provides a comprehensive fellowship
                  program in website development, Android application
                  development, data analytics, and data science. The
                  organization aims to bridge the gap between academia and
                  industry by providing hands-on training in these domains. next
                  one.
                </p>
                {/* Goal and mission and vision */}
                <div class="container-fluid">
                  <div class="jumbotron">
                    <h1 class="display-4">Our Goals</h1>
                    <p class="lead">
                      "Embrace the convergence of modern innovation and timeless
                      tradition, for in this fusion lies the essence of
                      progress. As Learntekin pioneers the integration of
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
                            Deliver the high standard technologies to evolve the
                            small scale industries to globally. To be recognized
                            as a leading institution
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
                            actions and inspire us to make a difference and lead
                            us towards success.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TN Implementation */}
                <div class="container-fluid" >
                  <div class="jumbotron" >
                    <h4 class=" m-2" align="justify">
                       வெற்றி பயணத்தில் Learn TEK In
                    </h4>
                  </div>

                  <div class="row">
                    <div class="col-lg-5">
                      <div>
                        <div class="card-body">
                          {/* Image */}
                          <img
                            src="assets/img/tn_logo.png"
                            height="400"
                            width="400"
                            class=" float-left"
                            alt="..."
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-5">
                      <div>
                        <div class="card-body">
                          {/* Fellowship  Overview */}

                          <p style={{ margin: "1rem" }}>{" "}
                            <strong
                              className="st-b"
                              style={{ fontSize: "33px" }}
                            >
                              தமிழ்நாட்டில்
                            </strong>{" "}
                            <strong
                              style={{ fontSize: "18px" }}
                              className="st-b"
                            ></strong>{" "}
                            Learn TEK In, நகர்ப்புறம் மற்றும் கிராமப்புற
                            மக்களுக்கு சமமாக தொழில்நுட்ப திறன்களை கற்றுத் தரும்
                            சிறந்த பயிற்சி மையமாக திகழ்கிறது. React, Flutter,
                            MERN Stack, Spring Boot, DevOps போன்ற நவீன
                            தொழில்நுட்பங்களில் சிறந்த பயிற்சிகளை வழங்கி,
                            பொருத்தமான வேலை வாய்ப்புகளை உருவாக்குவதில்
                            உதவுகிறது. குறைந்த கட்டணத்தில் அனைத்து
                            தரப்பினருக்கும் எளிதில் அணுகக்கூடியதாக இருந்து,
                            தரமான பயிற்சி மற்றும் நேரடி வேலை வாய்ப்புகளை உறுதி
                            செய்கிறது. Learn TEK In-ல் பயிற்சி பெற்று உங்கள்
                            திறமைகளை மேம்படுத்தி, உங்கள் கனவுகளை நனவாக்குங்கள்!
                            Learn TEK In - உங்கள் வெற்றியின் முதல் படி.
                          </p>
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
                            <strong
                              className="st-b"
                              style={{ fontSize: "33px" }}
                            >
                              Fellowship Program
                            </strong>{" "}
                            offered by{" "}
                            <strong
                              style={{ fontSize: "18px" }}
                              className="st-b"
                            >
                              Learn TEK In
                            </strong>{" "}
                            is designed to equip individuals with the necessary
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
                            The{" "}
                            <strong
                              style={{ fontSize: "33px" }}
                              className="st-b"
                            >
                              Internship
                            </strong>{" "}
                            offered by{" "}
                            <strong
                              style={{ fontSize: "18px" }}
                              className="st-b"
                            >
                              Learn TEK In
                            </strong>{" "}
                            is designed to equip individuals with the necessary
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
                  <strong style={{ fontSize: "33px" }} className="st-b">
                    Various business services and technical solutions
                  </strong>{" "}
                  offered by{" "}
                  <strong style={{ fontSize: "18px" }} className="st-b">
                    Learn TEK In
                  </strong>{" "}
                  is designed to equip industries with the necessary
                  technologies to excel in the technology industry.
                </p>
              </p>

              <div class="container-fluid" data-aos="fade-up">
                <div class="section-title">
                  <h1 class="display-4" style={{ color: "black" }}>
                    Our Company Leaders
                  </h1>
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
                      Founder | Chairman | Board Member of LearnTEKIn &
                      financeFrenzy
                      <p style={{ color: "black" }} align="left">
                        He has 20+ Years Of Experience in IT Industry{" "}
                        <span class="social">
                          <a
                            href="https://www.instagram.com/selva143.shan/"
                            class="instagram"
                            target="_blank"
                          >
                            <i class="bx bxl-instagram"></i>
                          </a>{" "}
                          <a
                            href="https://www.linkedin.com/in/selvavel/"
                            class="linkedin"
                            target="_blank"
                          >
                            <i class="bx bxl-linkedin"></i>
                          </a>
                        </span>
                      </p>
                    </p>
                    <p
                      align="justify"
                      className="mt-3"
                      style={{ fontSize: "22px", color: "black" }}
                    ></p>
                  </p>

                  {/* Rajeshwaran bio */}

                  <div>
                    <h1
                      style={{ color: "black" }}
                      align="left"
                      className="mt-3"
                    >
                      Rajeshwaran Selvam
                    </h1>{" "}
                    <p style={{ color: "black" }} align="left">
                      SDE at Outlier AI | Board Member of LearnTEKIn
                      <p style={{ color: "black" }} align="left">
                        He has 2+ Years Of Experience in IT Industry{" "}
                        <span class="social">
                          <a
                            href="https://www.instagram.com/_tony_stark_7_18/"
                            class="instagram"
                            target="_blank"
                          >
                            <i class="bx bxl-instagram"></i>
                          </a>{" "}
                          <a
                            href="https://www.linkedin.com/in/rajeshwaranslv07/"
                            class="linkedin"
                            target="_blank"
                          >
                            <i class="bx bxl-linkedin"></i>
                          </a>
                        </span>
                      </p>
                    </p>
                    <p
                      align="justify"
                      className="mt-3"
                      style={{ fontSize: "22px", color: "black" }}
                    ></p>
                  </div>
                </div>
                {/* Success DashBoard */}
                <SuccessDashboard />
                {/* Testimonials */}
                <Testimonials />
                {/* Client Companies */}
                <CompanyTestimonials />
                {/* Placements */}
                <StudentPlacementCompanies />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
