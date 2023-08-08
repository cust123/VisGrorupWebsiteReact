import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_70.png";
import img2 from "../../assets/images/media/img_71.png";
import img3 from "../../assets/images/media/home502x632.jpg";
import Sidebar from "../../components/common/header/sidebar/Sidebar";

import CounterUp from "../../components/consulting-agency/CounterUp";
import FeatureSectionFour from "../../components/creative-agency/FeatureSectionFour";
import FeatureSlider from "../../components/consulting-agency/FeatureSlider";
import Header from "../../components/consulting-agency/Header";

import TeamSlider from "../../components/consulting-agency/TeamSlider";
import VideoFeatureList from "../../components/consulting-agency/VideoFeatureList";
import FeedbackSliderFour from "../../components/creative-agency/FeedbackSliderFour";
import {LatestThreeBlogs} from "../../components/consulting-agency/Blog";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FancyBanner from "../../components/service-provider/FancyBanner";
import Seo from "../../components/common/seo/Seo";
import Service2 from "../inner-pages/pages/support/components/Service2";

const Home = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Home" />

      <Sidebar />

      <Header />
      {/* Banner: Start */}
      <div className="hero-banner-eight">
        <div className="scroll-bar"></div>
        {/* End .scroll-bar */}

        <div className="banner-content h-100 d-md-flex align-items-center justify-content-between">
          <div className="text-wrapper">
            <h1 className="hero-heading">Vis Group.</h1>
            <p className="hero-sub-heading text-normal">
              We are helping clients to create Durable and high quality
              Sloutions with our talented expert.
            </p>
            <Link to="/contact-v3" className="theme-btn-eleven ripple-btn">
              Consult with an expert now!
            </Link>
          </div>
          {/* <!-- /.text-wrapper --> */}

          <div className="img-wrapper position-relative">
            <img src={img3} alt="media" />
          </div>
          {/* End .img-wrapper */}
        </div>
        {/* <!-- /.banner-content --> */}
      </div>
      {/* Banner: End */}

      {/* Our Services: Start */}
      <div className="vcamp-feature-section-one  mt-75">
        <div className="bg-wrapper " style={{ paddingTop: "50px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-4 col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="upper-title">What we do</div>
                  <h4 className="title">
                    Our <span>Services</span> .
                  </h4>
                </div>
                <p className="meta-info-text text-normal">
                  Vis Group offers Services in Telecommunication, Network
                  Benchmarking, infotainment systems testing, Quality Assurance
                  and Software Development to its global clients.
                </p>
                <Link to="/services" className="theme-btn-four ripple-btn">
                  View All Services{" "}
                </Link>
              </div>
              {/* End .col */}

              <div className="col-lg-8 " data-aos="fade-left">
                <div className=" mt-40 lg-mt-10">
                  <div className="row">
                    <div className="col-xxl-12 m-auto">
                      <div className="row">
                        <Service2 />
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.box-layout --> */}
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* Our Services: END */}

      {/* About Us: Start */}
      <div className="vcamp-text-block-eleven mt-140 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-style-one">
                <div className="upper-title">Why choose us</div>
                <h4 className="title">We Solve Your Problem.</h4>
              </div>
            </div>
            <div className="col-lg-5 ms-auto">
              <p className=" md-pt-30">
                Welcome to Vis Group, your trusted partner for cutting-edge
                solutions in network benchmarking, infotainment system testing,
                software development, and quality assurance. With our global
                presence spanning Germany, Europe, the Middle East, and the UK,
                we empower businesses worldwide with unparalleled expertise and
                innovation. Unleash your potential with Vis Group and unlock
                limitless possibilities in the digital realm.
              </p>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="main-content">
          <div className="container">
            <div className="row">
              <div
                className="col-xxl-5 col-lg-6 ms-auto order-lg-last"
                data-aos="fade-left"
              >
                <div className="text-wrapper">
                  {/* End Video trigger wrapper */}
                  <div className="title-style-one">
                    <h3 className="title">
                      We’ve been helping <span>customers</span> globally.
                    </h3>
                  </div>
                  <p className=" text-normal">
                    Elevate your digital products and solutions with Vis Group,
                    a leading provider of end-to-end testing and quality
                    assurance services. Operating across Germany, Europe, and
                    Asia, we offer comprehensive testing solutions that ensure
                    the flawless performance of your digital offerings. From
                    telecommunication system testing to network benchmarking,
                    infotainment systems testing, and software testing, our
                    expert team leverages their domain knowledge to deliver
                    superior results. With Vis Group, you can trust in our
                    meticulous testing processes and experienced professionals
                    to provide your end-users with a seamless and exceptional
                    experience. Let us validate and optimize your digital
                    solutions for unparalleled success.
                  </p>
                  <Link to="/about-us" className="theme-btn-two">
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="left-img-meta">
            <img src={img1} alt="media" className="w-100" />
          </div>
          {/* <!-- /.left-img-meta --> */}
        </div>
        {/* <!-- /.main-content --> */}
      </div>
      <div className="counter-section-three border-bottom pt-120 pb-60 lg-pt-30 lg-pb-10">
        <div className="container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* About Us: END */}

      {/* Our Facts and Figers: Start */}
      <div className="vcamp-feature-section-four ">
        <FeatureSectionFour />
      </div>
      {/* Our Facts and Figers: END */}

      {/* Why Choose Vis-Group: start */}
      <div className="vcamp-feature-section-five mt-90">
        <div className="container">
          <div className="row align-items-center align-items-xl-end">
            <div className="col-xl-6 col-lg-4 col-md-5 col-sm-8">
              <div className="title-style-nine text-center text-sm-start xs-pb-20">
                <h2 className="title">Our Success Story.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
        <div className="feature_slider_one mt-70 lg-mt-50 slick-rounded-arrow arrow-top-right exact ripple-btn is_light">
          <FeatureSlider />
        </div>
        {/* End .feature_slider_one */}
      </div>
      {/* Why Choose Vis-Group: END */}

      <div className="vcamp-text-block-twelve mt-250 lg-mt-120 pb-20 z-index-auto">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-7">
              <VideoFeatureList />
              {/* <!-- / VideoFeatureList --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="right-img-meta">
          <img src={img2} alt="media" className="w-100 main-img" />
        </div>
        {/* <!-- /.right-img-meta --> */}
      </div>

      <div className="team-section-four mt-225 lg-mt-100">
        <div className="container">
          <div className="row align-items-center align-items-xl-end">
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-8">
              <div className="title-style-nine text-center text-sm-start xs-pb-20">
                <h2 className="title">Our Talented Players.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="team_slider_two mt-100 lg-mt-60 slick-rounded-arrow arrow-top-right ripple-btn is_light">
          <TeamSlider />
        </div>
        {/* <!-- /.team_slider_two --> */}
      </div>

      <div className="feedback-section-four bg-white lg-mt-20 sm-mt-50">
        <div className="container">
          <div className="feedback_slider_four">
            <FeedbackSliderFour className="style-two" />
          </div>
          {/* <!-- /.feedback_slider_four --> */}
        </div>
      </div>

      <div className="blog-section-one">
        <div className="container">
          <div className="border-top pt-120 md-pt-100">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="title-style-five">
                      <div className="upper-title">Latest Blogs</div>
                      <h2 className="title">Our Blogs</h2>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-xl-7 col-sm-6 text-sm-end text-start">
                    <Link to="/blog-v2" className="theme-btn-three xs-mt-30">
                      View All Blogs <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="mt-100 lg-mt-60">
                  <div className="row feature-post">
                    <LatestThreeBlogs />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-banner-one mt-200 lg-mt-120">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>

      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../assets/images/logo/vCamp_03.svg").default
                    }
                    alt="brand"
                  />
                </Link>
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
    </div>
    // End .main-page-wrapper
  );
};

export default Home;
