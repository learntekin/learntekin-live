import React, { Component } from "react";
 
export default class Products extends Component {
  componentDidMount(){
    document.title="Products";
  }
  render() {
 
    return (
      <section id="pricing" class="pricing section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Products</h2>
            <p align="justify">
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
          <h3>Insurance and Annuity Products with Living Benefits*</h3>
          <div class="row mt-4 ">
            <div class="col-lg-4 col-md-6">
              <div class="box" data-aos="fade-up" data-aos-delay="100">
                <h3>Life Insurance </h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Indexed Universal Life</li>
                  <li>Term Life</li>
                  <li>Final Expense </li>
                  <li>Final Expense Life</li>
                  <li>Guaranteed Issue Life</li>
                  <li>Guaranteed Universal Life</li>
                  <li>MEC Contracts</li>
                  <li>Term Life</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div class="box featured" data-aos="fade-up" data-aos-delay="200">
                <h3>Annuities</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Fixed Annuities</li>
                  <li>Indexed Annuities</li>
                  <li>Multi-year Guarantee Annuities </li>
                  <li>Single Premium Immediate Annuities</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div class="box" data-aos="fade-up" data-aos-delay="300">
                <h3>Other</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li> Estate planning</li>
                  <li>REITs</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mt-4" align="justify">
            {" "}
            *Provided Through world class companies which have earned strong
            ratings from the top rating agencies (A.M. Best, S&P Global Ratings,
            Fitch Ratings) as well as accreditation from the Better Business
            Bureau. You can feel confident that Finance Frenzy will be around to
            deliver on our promise to you and your loved ones when you need it
            most.
          </h4>
        </div>
      </section>
    );
  }
}
