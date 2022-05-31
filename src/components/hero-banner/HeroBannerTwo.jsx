import React from "react";
import Brand from "../brand/Brand";
import SvgColor from 'react-svg-color';

const HeroBannerTwo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero-banner-two">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <img
                src="images/assets/ils-01.png"
                alt="shape"
                className="illustration_01"
              />
              <img
                src="images/assets/ils-01.1.png"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils-01.2.png"
                alt="shape"
                className="shapes shape-two"
              />
              <img
                src="images/assets/ils-01.3.png"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 order-lg-first">
            <div className="hero-text-wrapper md-mt-50">
              <h1>
                <span>
                  Your technology
                  <SvgColor
                    svg="images/shape/line-shape-1.svg"
                    width={200}
                    colors={["#FF0000", "#FF0000"]}
                  />

                  {/* <img
                    src="images/shape/line-shape-1.svg"
                    alt="shape"
                    className="cs-screen"
                  /> */}
                </span>
                partner.
              </h1>
              <p className="sub-text">For software innovations.</p>
              <form onClick={handleSubmit}>
                <input type="email" placeholder="Enter your email" />
                <button>Get Started</button>
              </form>
              <ul className="list-item d-flex mt-20">
                <li>Design</li>
                <li>Development</li>
                <li>Maintainence</li>
              </ul>
            </div>
            {/* /.hero-text-wrapper */}
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}

      <div className="mt-65 md-mt-50 trusted-companies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p>
                Top rated agency. iOS, Android and PWA app developers{" "}
                {/* <span>contact@redcrix.com</span> */}
              </p>
            </div>
            <div className="col-12">
              <div className="companies-logo-slider">
                <Brand />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/*  /.trusted-companies */}
    </div>
    // End .hero-banner-two
  );
};

export default HeroBannerTwo;
