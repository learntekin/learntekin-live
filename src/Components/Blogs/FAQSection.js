import React, { Component } from "react";
export default class FAQSection extends Component {
  componentDidMount() {
    document.title = "Faq";
  }
  render() {
    return (
      <section id="faq" class="faq" style={{ marginTop: "4rem" }}>
        <div class="container-fluid" data-aos="fade-up">
          <div class="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <ul class="faq-list accordion" data-aos="fade-up">
            <li>
              <a
                data-bs-toggle="collapse"
                class="collapsed"
                data-bs-target="#faq1"
              >
                What is offered learntekin?{" "}
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-x icon-close"></i>
              </a>
              <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                <p>
                  The course is designed to be self paced and you can go through
                  it at your own pace. However, If you have any questions or
                  need help using our platform, feel free to ask!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
