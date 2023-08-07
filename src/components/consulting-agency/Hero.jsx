import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_69.png";

const Hero = () => {
  return (
    <div className="banner-content h-100 d-md-flex align-items-center justify-content-between">
      <div className="text-wrapper">
        <h1 className="hero-heading">Vis Group.</h1>
        <p className="hero-sub-heading text-lg">
          We are helping clients to create Durable and high quality Sloutions
          with our talented expert.
        </p>
        <Link to="/contact-v3" className="theme-btn-eleven ripple-btn">
          Consult with an exprt now!
        </Link>
      </div>
      {/* <!-- /.text-wrapper --> */}

      <div className="img-wrapper position-relative">
        <img src={img1} alt="media" />
      </div>
      {/* End .img-wrapper */}
    </div>
  );
};

export default Hero;
