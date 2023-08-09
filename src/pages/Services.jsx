import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/consulting-agency/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../components/common/footer/FooterMenuListTwo";
import CounterUp from "../components/business/CounterUp";
import { AllServices } from "./inner-pages/pages/support/components/Service2";
import Partners from "./inner-pages/pages/essentials/components/Partners";
import { Link } from "react-router-dom";
import FancyBanner from "../components/startup/FancyBanner";
import Address from "../components/business/Address";
import Seo from "../components/common/seo/Seo";
import banner from "../assets/images/media/ServicesBanner.jpg";

const Services = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Services" />

      <Sidebar />

      <Header />

      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Our Services</h2>
          <p style={{ fontWeight: "bold" }}>
            We’re empowering Services to do great things together
          </p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      <div className="vcamp-feature-section-seven style-two mt-10 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-xl-9 col-lg-7 col-md-9 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-one text-center">
                <h4 className="title">
                  Explore Our Top Notch Solutions and Services
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box-layout mt-40 lg-mt-10">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <AllServices />
              </div>
            </div>
          </div>
          {/* <!-- /.box-layout --> */}
        </div>
      </div>

      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
			=====================================================
				Counter Section One
			=====================================================
			--> */}
      <div className="counter-section-one mt-170 md-mt-120">
        <div className="inner-container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* End .counter-section-one */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Five
			============================================== 
			--> */}

      {/* <!-- /.vcamp-feature-section-five --> */}

      {/* <!--
			=====================================================
				Partner Section Three
			=====================================================
			--> */}
      <div className="partner-section-three mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4 col-md-8">
              <div className="title-style-one">
                <h2 className="title">
                  Our best <span>partners</span> for the long run.
                </h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 col-lg-7 ms-auto">
              <p className="info-text">
                Over <span>32K+</span> software businesses growing with vCamp.
              </p>
              <div className="row">
                <Partners />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.partner-section-three --> */}

      {/* <!--
			=====================================================
				Feedback Slider Two
			=====================================================
			--> */}

      {/* <!-- /.feedback-section-two --> */}

      {/* <!--
			=====================================================
				Blog Section One
			=====================================================
			--> */}

      {/* <!-- /.blog-section-one --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Three
			=====================================================
			--> */}
      <div className="box-layout mt-200 lg-mt-120">
        <div className="fancy-banner-three">
          <div className="inner-content position-relative">
            <div className="container">
              <div className="row align-items-center">
                <FancyBanner />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-three --> */}

      {/* <!--
			=====================================================
			Contact Section One
			=====================================================
			--> */}
      <div className="contact-section-one mt-120 mb-80 lg-mt-80 lg-mb-40">
        <div className="container">
          <div className="row">
            <Address />
          </div>
        </div>
      </div>

      {/* Footer : start */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40 d-flex align-items-center justify-content-center">
              <div className="logo">
                <Link to="/">
                  <img
                    src={require("../assets/images/logo/visLogo.png")}
                    alt="Vis Logo"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </Link>
                <p style={{ fontFamily: "Recoleta" }}>
                  Reprehenderit sunt aliquip laboris dolore enim.
                </p>
              </div>
            </div>
            {/* End .col */}
            <FooterMenuListTwo />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
        {/* End .container */}
      </footer>
      {/* Footer : End */}
    </div>
    // End .main-page-wrapper
  );
};

export default Services;
