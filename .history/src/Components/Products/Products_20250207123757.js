import React, { Component } from "react";
import { Icon } from "@iconify/react";
import { Button, Form } from "react-bootstrap";
 
import { connect } from "react-redux";
import { verifyCertificate } from "../../Components/actions/verifyCertificate";
import "./product.css";
class Products extends Component {
  state = {
    certificateId: "",
    verifyMessage: "",
    verifiedCertificate: null,
  };

  componentDidMount() {
    document.title = "Products";
  }

  handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  handleCertificateIdChange = (e) => {
    this.setState({ certificateId: e.target.value });
  };

  handleVerifyCertificate = async () => {
    const { certificateId } = this.state;
    const { verifyCertificate } = this.props;

    try {
      const certificate = await verifyCertificate(certificateId);
      this.setState({
        verifyMessage: `Certificate Found: ${certificate.candidateName}`,
        verifiedCertificate: certificate,
      });
    } catch (e) {
      this.setState({
        verifyMessage: "Certificate not found",
        verifiedCertificate: null,
      });
    }
  };

  render() {
    const { certificateId, verifyMessage, verifiedCertificate } = this.state;
    return (
      <section id="pricing" class="pricing section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2 style={{ color: "black" }}>Products Bucket List</h2>
            <p align="justify" style={{ fontSize: "22px", color: "black" }}>
              Meeting the financial challenges of today’s consumers requires a
              unique mix of experience and expertise. Backed by a wealth of
              resources, Finance Frenzy is uniquely positioned to meet these
              challenges. As an independent financial services company, Finance
              Frenzy is able to bring together the best products and companies
              to deliver unparalleled financial solutions to its clients. These
              world-class products, concepts, and support companies gives
              Finance Frenzy a competitive advantage in the marketplace.
            </p>
          </div>
             {/* Certificate Verification Section */}
             <div className="section-title mt-4">
            <h2 style={{ color: "black" }}>Certificate Verification</h2>
            <Form>
              <Form.Group>
                <Form.Label style={{ fontSize: "20px", color: "black" }}>
                  Enter Certificate ID
                </Form.Label>
                <Form.Control
                  type="text"
                  value={certificateId}
                  onChange={this.handleCertificateIdChange}
                  placeholder="e.g., LTIN2025XXXX"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="mt-3"
                onClick={this.handleVerifyCertificate}
              >
                Verify Certificate
              </Button>
            </Form>

            {/* Verification Result */}
            {verifyMessage && (
              <div
                className="mt-4"
                style={{
                  color: verifiedCertificate ? "green" : "red",
                  fontSize: "18px",
                }}
              >
                {verifyMessage}
              </div>
            )}
          </div>

          <div class="row mt-4 ">
            <div class="col-lg-12 col-md-12 align-item-center">
              <div class="box" data-aos="fade-up" data-aos-delay="100">
                <h1 align="justify" style={{ color: "black" }}>
                  Finance Frenzy
                </h1>
                <h4></h4>
                <p>
                  <p align="justify" style={{ color: "black" }}>
                    Learntekin's Finance Frenzy is an independent financial
                    services company that provides a wide range of investment,
                    retirement, and estate planning products through a network
                    of independent affiliates. Our expert licensed professionals
                    work with clients to conduct a thorough financial analysis,
                    identify financial gaps, and recommend appropriate
                    investment options to fill those gaps. In today's uncertain
                    financial climate, Finance Frenzy is committed to helping
                    clients preserve their capital while seeking long-term
                    growth and appreciation. Our associates are highly educated
                    and well-trained in the industry, and we have the experience
                    and resources to create successful financial plans for
                    clients facing any financial challenge. Some of the
                    investment products we offer include mutual funds,
                    exchange-traded funds (ETFs), stocks, bonds, and annuities.
                    Our retirement planning products include individual
                    retirement accounts (IRAs), 401(k)s, and other retirement
                    savings options. We also offer estate planning services to
                    help clients plan for the future of their assets and
                    minimize tax liabilities.
                  </p>
                  <p align="justify" style={{ color: "black" }}>
                    {" "}
                    <b>
                      At Finance Frenzy, we believe in a personalized approach
                      to financial planning, and we work closely with clients to
                      understand their unique financial goals and challenges.
                      Our commitment to excellence and client satisfaction has
                      made us a trusted provider of financial services, and we
                      are dedicated to helping our clients achieve financial
                      success.
                    </b>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <h4 className="mt-4" align="justify" style={{ color: "black" }}>
            {" "}
            *Provided Through world class companies which have earned strong
            ratings from the top rating agencies (A.M. Best, S&P Global Ratings,
            Fitch Ratings) as well as accreditation from the Better Business
            Bureau. You can feel confident that Finance Frenzy will be around to
            deliver on our promise to you and your loved ones when you need it
            most.
          </h4>
        </div>
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2 style={{ color: "black", marginTop: "3rem" }}>
              1. Fellowship Program
            </h2>
            <p align="justify" style={{ fontSize: "22px", color: "black" }}>
              LearnTekin offers an enriching Fellowship Program designed to
              empower individuals across diverse backgrounds in the fields of
              web development, Android app development, data analytics,
              networking, and business model solutions. Tailored for students,
              working professionals, those re-entering the workforce after a
              career gap, and non-IT students, this program provides a
              comprehensive learning experience.
            </p>
            <p
              align="justify"
              style={{ marginTop: "3rem", fontSize: "22px", color: "black" }}
            >
              Participants will delve into the latest technologies and industry
              best practices, gaining hands-on expertise through practical
              projects and real-world scenarios. Whether you're a tech
              enthusiast aiming to build a solid foundation or a professional
              seeking to upskill, LearnTekin's Fellowship Program offers a
              dynamic curriculum led by industry experts.
            </p>
            <p
              align="justify"
              style={{ marginTop: "3rem", fontSize: "22px", color: "black" }}
            >
              The program's inclusive approach ensures that individuals from
              various backgrounds can seamlessly integrate into the tech
              landscape. By fostering a collaborative and supportive learning
              environment, LearnTekin aims to bridge the gap between aspiration
              and achievement. Whether you're charting a new career path or
              augmenting your existing skills, this Fellowship Program is your
              gateway to success in the rapidly evolving tech industry.
            </p>
            <p
              align="justify"
              style={{
                marginTop: "3rem",
                fontWeight: "bolder",
                fontSize: "22px",
                color: "black",
              }}
            >
              Join LearnTekin's Fellowship Program to unlock a world of
              opportunities, enhance your skill set, and embark on a
              transformative journey toward a rewarding and fulfilling career in
              the digital realm.
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {/* Website Development */}
            <div class="col-md-6 mt-2">
              <div
                class="icon-box"
                style={{ padding: "1rem" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p align="justify" style={{ color: "white" }}>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    <i class="bi">
                      <Icon icon="mdi:web" style={{ color: "white" }} />
                    </i>{" "}
                    Website Development{" "}
                  </h2>{" "}
                  <p align="justify">
                    We provide top-notch website development services to our
                    clients. Our team of experienced developers uses the latest
                    technologies and frameworks to develop websites that are
                    responsive, fast, and secure. We can build websites of all
                    types, including e-commerce, corporate, and personal
                    websites.
                  </p>
                  <p align="justify">
                    {" "}
                    <p>
                      <a
                        className="roadmap"
                        href="https://roadmap.sh/full-stack"
                        title="hello"
                        target="_blank"
                      >
                        Click here for roadmap
                      </a>
                    </p>
                    <strong>
                      <p> 🚀Trained by Experienced Industrialist.</p>
                    </strong>
                    <strong>
                      <p> 🚀Duration starts from 1 Week upto 6 months.</p>
                    </strong>
                    <strong>
                      <p> 🚀Certificates and bonus based on performance.</p>
                    </strong>
                    <strong>
                      <p> 🚀Support Systems: Community of Chat, Calls 24/7.</p>
                    </strong>
                    <strong>
                      <p>
                        {" "}
                        🚀Placement Systems: Assistance till you placed, No
                        guarantee.
                      </p>
                    </strong>
                    <strong>
                      <p> 🚀Price starts from Rs.99 - Rs. 9999/-</p>
                    </strong>
                    <strong>
                      <p> 🚀Registration fee <strike>Rs.999/-</strike> Rs.499/- </p>
                    </strong>
                    <a
                      href="https://forms.gle/MWZy2xVp6v3jHLoJ8"
                      target="_blank"
                      class="button"
                    >
                      Buy now
                    </a>
                  </p>
                  <p>
                    {" "}
                    <span class="marquee-container">
                      <span class="marquee">
                        Don't miss the Scholarship Test!
                      </span>
                    </span>{" "}
                  </p>
                  <a
                    target="_blank"
                    className="roadmap"
                   
                    href="https://www.hackerrank.com/coding-challenge-learn-tek-in"
                  >
                    Click here!
                  </a>
                </p>
              </div>
            </div>
            {/* Android Development */}
            <div class="col-md-6 mt-2">
              <div
                class="icon-box"
                data-aos="fade-up"
                style={{ padding: "1rem" }}
                data-aos-delay="100"
              >
                <p align="justify" style={{ color: "white" }}>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    <i class="bi">
                      <Icon icon="material-symbols:android-sharp" />
                    </i>{" "}
                    Android Development
                  </h2>{" "}
                  <p>
                    {" "}
                    We provide top-notch website development services to our
                    clients. Our team of experienced developers uses the latest
                    technologies and frameworks to develop websites that are
                    responsive, fast, and secure. We can build websites of all
                    types, including e-commerce, corporate, and personal
                    websites.
                  </p>
                  <p>
                    {" "}
                    <p>
                      <a
                        className="roadmap"
                        href="https://roadmap.sh/android"
                        title="hello"
                        target="_blank"
                      >
                        Click here for roadmap
                      </a>
                    </p>
                    <strong>
                      <p> 🚀Trained by Experienced Industrialist.</p>
                    </strong>
                    <strong>
                      <p> 🚀Duration starts from 1 Week upto 6 months.</p>
                    </strong>
                    <strong>
                      <p> 🚀Certificates and bonus based on performance.</p>
                    </strong>
                    <strong>
                      <p> 🚀Support Systems: Community of Chat, Calls 24/7.</p>
                    </strong>
                    <strong>
                      <p>
                        {" "}
                        🚀Placement Systems: Assistance till you placed, No
                        guarantee.
                      </p>
                    </strong>
                    <strong>
                      <p> 🚀Price starts from Rs.99 - Rs. 27999/-</p>
                    </strong>
                    <strong>
                      <p> 🚀Registration fee <strike>Rs.999/-</strike> Rs.499/- </p>
                    </strong>
                    <a
                      href="https://forms.gle/MWZy2xVp6v3jHLoJ8"
                      target="_blank"
                      class="button"
                    >
                      Buy Now
                    </a>
                  </p>
                  <p>
                    {" "}
                    <span class="marquee-container">
                      <span class="marquee">
                        Don't miss the Scholarship Test!
                      </span>
                    </span>{" "}
                  </p>
                  <a
                    className="roadmap"
                    target="_blank"
                    href="https://www.hackerrank.com/coding-challenge-learn-tek-in"
                  >
                    Click here!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2 style={{ color: "black", marginTop: "3rem" }}>2. Internship</h2>
            <p align="justify" style={{ fontSize: "22px", color: "black" }}>
              🚀 Exciting Internship Opportunities Await at LearnTek! Ready to
              take your skills to the next level? LearnTek invites passionate
              individuals to explore our dynamic internship programs! From web
              and Android app development to networking, business analysis, data
              analytics, machine learning, deep learning, data science, and
              blockchain dapps solutions, our programs offer hands-on experience
              in cutting-edge fields.
            </p>

            <p
              align="justify"
              style={{
                marginTop: "3rem",
                fontWeight: "bolder",
                fontSize: "22px",
                color: "black",
              }}
            >
              Join LearnTekin's Internship to unlock a world of opportunities,
              enhance your skill set, and embark on a transformative journey
              toward a rewarding and fulfilling career in the digital realm.
            </p>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row ">
            {/* Website Development */}
            <div class=" col-md-6 mt-2">
              <div
                class="icon-box"
                style={{ padding: "1rem" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p align="justify" style={{ color: "white" }}>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    <i class="bi">
                      <Icon icon="mdi:web" style={{ color: "white" }} />
                    </i>{" "}
                    Website Development{" "}
                  </h2>
                  <strong>
                    <p>
                      {" "}
                      🌐 Elevate Your Web Development Skills with LearnTek! 🚀
                    </p>
                  </strong>

                  <p>
                    {" "}
                    Exciting news for aspiring web developers! LearnTek is
                    offering a unique web internship program to fuel your
                    passion and enhance your expertise. Dive into hands-on
                    projects, stay updated on the latest industry trends, and
                    make meaningful contributions to real-world development
                    scenarios. Ready to shape the digital future? Apply now and
                    let's build something extraordinary together!
                  </p>
                  <strong>
                      <p> 🚀Work with Experienced Industrialist & Team.</p>
                    </strong>

                  <strong>
                    <p> 🚀Duration starts from 1 Week upto 6 months.</p>
                  </strong>
                  <strong>
                    <p>
                      {" "}
                      🚀Certificates(Project Completion, Internship Completion,
                      No Due).
                    </p>
                  </strong>
                  <strong>
                    <p> 🚀Support Systems: Community of Chat, Calls 24/7.</p>
                  </strong>
                  <strong>
                    <p>
                      {" "}
                      🚀Placement Systems: Assistance till you placed, No
                      guarantee.
                    </p>
                  </strong>
                  <strong>
                    <p> 🚀Stipend starts from Rs.999 - Rs. 2999/-</p>
                  </strong>

                  <strong>
                    <p> 🚀Registration fee of <strike>Rs.99/-</strike> Rs.19/-</p>
                  </strong>
                  <a
                    href="https://forms.gle/KY7gWBv78dzy3MC48"
                    target="_blank"
                    class="button"
                  >
                    Join Now
                  </a>
                </p>
              </div>
            </div>

            {/* Android Development */}
            <div class="col-md-6 mt-2">
              <div
                class="icon-box"
                data-aos="fade-up"
                style={{ padding: "1rem" }}
                data-aos-delay="100"
              >
                <p align="justify" style={{ color: "white" }}>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    <i class="bi">
                      <Icon icon="material-symbols:android-sharp" />
                    </i>{" "}
                    Android Development
                  </h2>{" "}
                  <strong>
                    <p>
                      {" "}
                      📱 Ignite Your Android App Development Journey with
                      LearnTek!
                    </p>
                  </strong>
                  <p>
                    Calling all budding app developers! LearnTek presents an
                    exclusive Android app development internship program to
                    elevate your skills. Immerse yourself in hands-on projects,
                    stay abreast of industry innovations, and contribute to
                    real-world app creation. Ready to transform your passion
                    into expertise? Apply today and let's craft exceptional
                    mobile experiences together!
                  </p>
                  <p>
                  <strong>
                      <p> 🚀Work with Experienced Industrialist & Team.</p>
                    </strong>
                    <strong>
                      <p> 🚀Duration starts from 1 Week upto 6 months.</p>
                    </strong>
                    <strong>
                      <p>
                        {" "}
                        🚀Certificates(Project Completion, Internship
                        Completion, No Due).
                      </p>
                    </strong>
                    <strong>
                      <p> 🚀Support Systems: Community of Chat, Calls 24/7.</p>
                    </strong>
                    <strong>
                      <p>
                        {" "}
                        🚀Placement Systems: Assistance till you placed, No
                        guarantee.
                      </p>
                    </strong>
                    <strong>
                      <p> 🚀Stipend starts from Rs.999 - Rs. 2999/-</p>
                    </strong>

                    <strong>
                      <p> 🚀Registration fee of <strike>Rs.99/-</strike>  Rs.19/-</p>
                    </strong>
                    <a
                      href="https://forms.gle/KY7gWBv78dzy3MC48"
                      target="_blank"
                      class="button"
                    >
                      Join Now
                    </a>
                  </p>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = {
  verifyCertificate,
};

export default connect(null, mapDispatchToProps)(Products);