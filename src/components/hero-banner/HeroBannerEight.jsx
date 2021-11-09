import React from "react";
import Video from "../../elements/Video";
import BrandFive from "../../components/brand/BrandFive";

const HeroBannerEight = () => {
  return (
    <div className="hero-banner-eight">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <h1 className="hero-heading">Edit video & create great content</h1>
            <p className="hero-sub-heading">
              Make stunning videos with animation, stock footage, and photos.
            </p>
            <a href="#" className="theme-btn-nine">
              Download - It’s free
            </a>
          </div>
        </div>

        <div className="video-wrapper">
          <Video />
        </div>
        {/* /.video-wrapper */}
      </div>

      <div className="partner-slider-two mt-130 md-mt-80">
        <div className="container">
          <div className="partnerSliderTwo">
            <BrandFive />
          </div>
        </div>
      </div>
      {/* /.partner-slider-two */}
      <img
        src="images/shape/173.svg"
        alt="shape"
        className="shapes shape-right"
      />
      <img
        src="images/shape/174.svg"
        alt="shape"
        className="shapes shape-left"
      />
    </div>
    //   /.hero-banner-eight
  );
};

export default HeroBannerEight;
