import React from "react";
import footerImg from "../assets/images/assets/ils_03.png";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/consulting-agency/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import FooterSubscribe from "../components/creative-agency/FooterSubscribe";
import { Link } from "react-router-dom";
import Blog from "../components/consulting-agency/Blog";
import Seo from "../components/common/seo/Seo";
import banner from "../assets/images/media/aboutUsBanner.jpg";

const Blogs = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Blogs" />

      <Sidebar />

     
      <Header />

      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Our Blogs</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
     
      </div>
 
     
      
      <div className="blog-section-one mt-180 mb-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <div className="col-xl-5 col-md-6 col-sm-7">
                  <div className="title-style-five">
                    <div className="upper-title">News & Blogs</div>
                    <h2 className="title">Our Blogs</h2>
                  </div>
                </div>
                {/* End .col */}
            
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="mt-100 lg-mt-60">
                <div className="row">
                  <Blog />
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
     
      
     
   
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

export default Blogs;
