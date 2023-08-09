import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/consulting-agency/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";
import Faq from "./inner-pages/pages/others/components/Faq";
import FooterMenuListTwo from "../components/common/footer/FooterMenuListTwo";

const Imprint = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Projects" />
      <Sidebar />
      <Header />

      {/* <!-- /.inside-hero-one --> */}

      <div className="inside-hero-one hero-spacing">
        <div className="container">
          <h2 className="page-title font-recoleta">Imprint</h2>
          <p>Find the relevent information about the Vis Group here!</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}
      {/* <!-- 
        =============================================
        FAQ Section One
        ============================================== 
        --> */}
      <div className="faq-section-one mt-120 mb-150 lg-mt-100 lg-mb-120">
        <div className="container">
          <div className="row">
            <Faq />
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

export default Imprint;
