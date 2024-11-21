import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@material-ui/core";
export default class Services extends Component {
  componentDidMount() {
    document.title = "Services";
  }
  render() {
    return (
      <section id="services" class="services section-bg ">
        <div class="container-fluid" data-aos="fade-up">
          
          <div class="section-title">
            <h2 style={{ color: "black" }}>Services</h2>
            <p align="justify" style={{fontSize:'22px',color:'black'}}>
              Welcome to <strong className="st-b">Learn TEK In</strong>, your
              one-stop destination for a wide range of technical and
              non-technical services. We are dedicated to providing the best
              solutions for website development, android app development,
              automation testing, research and development on all technical and
              non-technical domains, data analytics and data science-related
              services, RPA and IoT device development and testing, machine
              learning and deep learning models.
            </p>
          </div>

          <div class="row">
            {/* Website Development */}
            <div class="col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i class="bi">
                  <Icon icon="mdi:web" />
                </i>
                <p align="justify">
                  <h2>Website Development</h2> We provide top-notch website
                  development services to our clients. Our team of experienced
                  developers uses the latest technologies and frameworks to
                  develop websites that are responsive, fast, and secure. We can
                  build websites of all types, including e-commerce, corporate,
                  and personal websites.
                </p>
                <a  style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</a>
              </div>
            </div>
            {/* Android App Development */}
            <div class="col-md-6  ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                  <Icon icon="mdi:ab-testing" />
                </i>

                <p align="justify">
                  <h2>Automation Testing</h2> At LearnTek, we provide automation
                  testing services to help our clients save time and reduce
                  errors. Our team of experts uses the latest testing tools and
                  technologies to automate the testing process, which results in
                  faster and more accurate testing.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>

            {/* Automation Testing */}
            <div class="col-md-6  ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                  <Icon icon="material-symbols:android-sharp" />
                </i>

                <p align="justify">
                  <h2>Android Development</h2>Our team of expert developers can
                  develop Android apps that are engaging, user-friendly, and
                  functional. We use the latest tools and technologies to build
                  apps that meet the requirements of our clients. Our team also
                  ensures that the apps are optimized for performance and can be
                  easily updated in the future.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>

            {/* Research and Development */}
            <div class="col-md-6  ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                  <Icon icon="healthicons:virus-research-alt" />
                </i>

                <p align="justify">
                  <h2>Research and Development:</h2> We provide research and
                  development services on all technical and non-technical
                  domains. Our team of researchers and developers can help you
                  with product research and development, market research, and
                  more. We use the latest research tools and technologies to
                  deliver results that are accurate and relevant.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>
            {/* Data Analytics and Data Science */}
            <div class="col-md-6  ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                  <Icon icon="ep:data-analysis" />
                </i>

                <p align="justify">
                  <h2>Data Analytics and Data Science</h2> Our team of data
                  analysts and data scientists can help you make sense of your
                  data. We use the latest tools and technologies to analyze and
                  visualize data, which helps our clients make informed
                  decisions.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>
            {/* RPA and IOT */}
            <div class="col-md-6  ">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                  <Icon icon="eos-icons:iot" />
                </i>

                <p align="justify">
                  <h2>RPA & IOT Development and Testing</h2> We provide
                  RPA and IoT device development and testing services to help
                  our clients automate their processes and improve efficiency.
                  Our team of experts uses the latest technologies and tools to
                  develop and test RPA and IoT devices that are efficient and
                  secure.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>
            {/* Machine Learning and Deep Learning Model */}
            <div class="col-md-6">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i class="bi">
                <Icon icon="carbon:machine-learning-model" />
                </i>
                <p align="justify">
                  <h2>ML & DL</h2>Our team of machine
                  learning and deep learning experts can help you develop and
                  deploy machine learning and deep learning models that are
                  accurate and efficient. We use the latest tools and
                  technologies to develop models that can be easily integrated
                  into your existing systems.
                </p>
                <Button style={{color:"white",textAlign:"left",backgroundColor:"darkblue"}}>Submit Idea</Button>

              </div>
            </div>
          </div>
          {/* Note */}
          <div class="section-title">
    
            <p align="justify" style={{fontSize:'22px',color:'black'}}>
            At  <strong className="st-b">Learn TEK In</strong>, we are committed to providing our clients with the best solutions for their technical and non-technical needs. Contact us today to learn more about our services and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
