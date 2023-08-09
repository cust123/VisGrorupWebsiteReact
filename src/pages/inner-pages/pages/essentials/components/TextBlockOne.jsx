import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import heroAvatar from "../../../../../assets/images/media/img_40.jpg";

const TextBlockOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      {/* End ModalVideo */}

      <div className="row">
        <div
          className="col-xxl-5 col-lg-6 ms-auto order-lg-last"
          data-aos="fade-left"
        >
          <div className="text-wrapper pt-0">
            {/* End Video trigger wrapper */}
            <div className="title-style-two">
              <h3 className="title">
                Your Product and Network <span> Quality </span> is our Passion.
              </h3>
            </div>
            <h6>Who we are?</h6>
            <p className="meta-info-text-two">
              Our founders Dustin Moskovitz and Justin Rosenstein met while
              leading Engineering teams at Facebook. As operations scaled, they
              grew frustrated by how difficult.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
          <div className="img-container position-relative">
            <img src={heroAvatar} alt="hero avatar" className="ceo-avatar" />

            {/* <!-- /.quote-wrapper --> */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TextBlockOne;
