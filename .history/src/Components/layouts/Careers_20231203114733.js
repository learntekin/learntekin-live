import React, { Component } from "react";
import { Icon } from "@iconify/react";
export default class Careers extends Component {
  componentDidMount() {
    document.title = "Careers";
  }
  render() {
    return (
      <section id="careers" class="contact">
        <div class="container-fluid mt-5" data-aos="fade-up">
          <div class="section-title">
            <h2>Careers</h2>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3>Get Started Today</h3>
                    <p align="justify">
                      Welcome to the Careers page of Learntekin! We are a
                      technology organization that specializes in providing
                      training and development in website development, Android
                      application development, data analytics, and data science.
                      Our goal is to empower individuals with the skills and
                      knowledge required to succeed in the ever-changing
                      landscape of the technology industry.{" "}
                      <b style={{ color: "cadetblue" }}>Learntek IN, LLC </b>
                      today!
                    </p>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3>Let us explore!</h3>
                    <p align="justify">
                      At Learntekin, we value creativity, innovation, and
                      collaboration. We believe in providing an environment that
                      fosters growth and personal development. Our team is made
                      up of individuals who are passionate about technology and
                      share a common goal of making a positive impact in the
                      industry.
                    </p>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3>Our Mantra on hiring</h3>
                    <p align="justify">
                      We are constantly looking for talented individuals who are
                      willing to take on new challenges and contribute to our
                      mission. Whether you are a seasoned professional or just
                      starting out in your career, we offer a variety of
                      opportunities to help you grow and achieve your career
                      goals.
                    </p>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3>Some of the positions we offer include:</h3>
                    <p align="justify">
                      {/* Website Development */}
                      <div class="col-md-12">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <i class="bi">
                            <Icon icon="mdi:web" />
                          </i>
                          <p align="justify">
                            <h2>Website Developer</h2> We provide top-notch
                            website development services to our clients. Our
                            team of experienced developers uses the latest
                            technologies and frameworks to develop websites that
                            are responsive, fast, and secure. We can build
                            websites of all types, including e-commerce,
                            corporate, and personal websites.
                          </p>
                        </div>
                      </div>
                      {/* Android App Development */}
                      <div class="col-md-12 ">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="mdi:ab-testing" />
                          </i>

                          <p align="justify">
                            <h2>Automation Tester</h2> At LearnTek, we provide
                            automation testing services to help our clients save
                            time and reduce errors. Our team of experts uses the
                            latest testing tools and technologies to automate
                            the testing process, which results in faster and
                            more accurate testing.
                          </p>
                        </div>
                      </div>

                      {/* Automation Testing */}
                      <div class="col-md-12  ">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="material-symbols:android-sharp" />
                          </i>

                          <p align="justify">
                            <h2>Android Developer</h2>Our team of expert
                            developers can develop Android apps that are
                            engaging, user-friendly, and functional. We use the
                            latest tools and technologies to build apps that
                            meet the requirements of our clients. Our team also
                            ensures that the apps are optimized for performance
                            and can be easily updated in the future.
                          </p>
                        </div>
                      </div>

                      {/* Research and Development */}
                      <div class="col-md-12  ">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="healthicons:virus-research-alt" />
                          </i>

                          <p align="justify">
                            <h2>Technical Writer and researchers:</h2> We
                            provide research and development services on all
                            technical and non-technical domains. Our team of
                            researchers and developers can help you with product
                            research and development, market research, and more.
                            We use the latest research tools and technologies to
                            deliver results that are accurate and relevant.
                          </p>
                        </div>
                      </div>
                      {/* Data Analytics and Data Science */}
                      <div class="col-md-12  ">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="ep:data-analysis" />
                          </i>

                          <p align="justify">
                            <h2>Data Analyzer and Data scientists</h2> Our team
                            of data analysts and data scientists can help you
                            make sense of your data. We use the latest tools and
                            technologies to analyze and visualize data, which
                            helps our clients make informed decisions.
                          </p>
                        </div>
                      </div>
                      {/* RPA and IOT */}
                      <div class="col-md-12 ">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="eos-icons:iot" />
                          </i>

                          <p align="justify">
                            <h2>RPA and IoT Device Developer and Tester</h2> We
                            provide RPA and IoT device development and testing
                            services to help our clients automate their
                            processes and improve efficiency. Our team of
                            experts uses the latest technologies and tools to
                            develop and test RPA and IoT devices that are
                            efficient and secure.
                          </p>
                        </div>
                      </div>
                      {/* Machine Learning and Deep Learning Model */}
                      <div class="col-md-12">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <i class="bi">
                            <Icon icon="carbon:machine-learning-model" />
                          </i>
                          <p align="justify">
                            <h2> ML and DL Models Designer</h2>
                            Our team of machine learning and deep learning
                            experts can help you develop and deploy machine
                            learning and deep learning models that are accurate
                            and efficient. We use the latest tools and
                            technologies to develop models that can be easily
                            integrated into your existing systems.
                          </p>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="info-box1 ">
                    <h3 align="left">Note</h3>
                    <p align="justify">
                      We offer competitive salaries, flexible work schedules,
                      and a variety of benefits, including health insurance,
                      retirement plans, and paid time off. We also offer
                      opportunities for professional development and growth.
                      <br />
                      <br />
                      <b>
                        If you are interested in joining our team, please check
                        our current job openings or submit your resume and cover
                        letter to learntekin@gmail.com. We look forward to
                        hearing from you and discovering how you can help us
                        make a difference in the world of technology!
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 ">
              <div class="info-box1 ">
    
                <div class="col-lg-12 mt-6">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    class="php-email-form"
                  >
                    <div class="row ">
                      <div class="col-md-12 form-group m-2 ">
                        <label>
                          <input type="radio" name="options" value="Ms. " />
                          &nbsp; Ms. &nbsp;
                        </label>

                        <label>
                          <input type="radio" name="options" value="Mr." />
                          &nbsp; Mr. &nbsp;
                        </label>

                        <label>
                          <input type="radio" name="options" value="Mrs." />
                          &nbsp; Mrs. &nbsp;
                        </label>
                      </div>
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          name="Fname"
                          class="form-control"
                          id="firstname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div class="col-md-6 form-group">
                        <input
                          type="text"
                          name="Lname"
                          class="form-control"
                          id="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="phoneNumber"
                          class="form-control"
                          name="phoneN"
                          id="phoneNumber"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>

                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="role"
                          class="form-control"
                          name="roleN"
                          id="role"
                          placeholder="Role apply for"
                          required
                        />
                      </div>

                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="refer"
                          class="form-control"
                          name="referN"
                          id="refer"
                          placeholder="Your Referral"
                          required
                        />
                      </div>

                    </div>
                    <div class="col-md-12 form-group m-2 ">
                      <h6>Preferred time to call?</h6>
                        <label>
                          <input type="radio" name="options" value="morning" />
                          &nbsp; Morning &nbsp;
                        </label>

                        <label>
                          <input type="radio" name="options" value="Mr." />
                          &nbsp; Afternoon &nbsp;
                        </label>

                        <label>
                          <input type="radio" name="options" value="Mrs." />
                          &nbsp; Evening &nbsp;
                        </label>
                      </div>

                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
