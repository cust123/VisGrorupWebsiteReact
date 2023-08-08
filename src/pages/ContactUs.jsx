import React from "react";
import footerImg from "../assets/images/assets/ils_03.png";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/consulting-agency/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import FooterSubscribe from "../components/creative-agency/FooterSubscribe";
import { Link } from "react-router-dom";
import Address from "../components/business/Address";
import Seo from "../components/common/seo/Seo";
import FromStyleThree from "../components/common/contact/FromStyleThree";

const ContactUs = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Abut Us" />

      <Sidebar />

      <Header />

      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h2 className="page-title font-recoleta">
                Get In <span>touch</span> with us
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                At Vis Group, we specialize in planning, developing, optimizing,
                and scaling network services and digital solutions to drive the
                seamless progress and growth of your business. Our dedicated
                team of professionals is committed to ensuring the highest
                quality and reliability of your solutions. Connect with us today
                to experience the professional expertise that guarantees the
                success and resilience of your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /.inside-hero-one --> */}

      {/* main form for contact us  */}

      <div className="contact-section-five">
        <div className="container">
          <div className="row">
            <Address />
          </div>
        </div>
        {/* End .container */}

        <div className="contact-meta mt-130 lg-mt-60">
          <div className="row gx-0">
            <div className="col-xl-6 order-xl-last d-flex">
              <div className="form-wrapper dark-bg w-100">
                <div className="form-style-three">
                  <h3 className="form-title font-recoleta pb-30 lg-pb-20">
                    Send Message.
                  </h3>
                  <FromStyleThree className="theme-btn-four " />
                </div>
                {/* <!-- /.form-style-three --> */}
              </div>
              {/* <!-- /.form-wrapper --> */}
            </div>
            {/* End .col */}

            <div className="col-xl-6 order-xl-first d-flex">
              <div className="map-area-two h-100 w-100">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="map"
                      className="gmap_iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359537.0372323226!2d-75.8002569!3d45.25015655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1660284753489!5m2!1sen!2sbd"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* <!-- /.contact-meta --> */}
      </div>

      {/* <!-- /.contact-section-one --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one box-layout">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe />
                </div>
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={
                              require("../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <img src={footerImg} alt="shape" className="shapes illustration" />
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default ContactUs;
