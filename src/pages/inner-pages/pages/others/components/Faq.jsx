import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

const Faq = () => {
  return (
    <>
      {/* End .col */}

      <div className="col-xl-12 col-lg-12 ms-auto faq-main-body">
        <div className="clearfix">
          <div className="accordion accordion-style-two" id="accordionTwo">
            <div className="accordion-tag md-pt-80" id="list-item-1">
              Makreting
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  What do you look for in a founding team?
                </button>
              </div>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  Do you recommend Pay as you go or Pre pay?
                </button>
              </div>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-style-two" id="accordionSix">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-5">
              Terms & Conditions
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneD"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoD"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeD"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
