import React from "react";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <div className="row">
      <div
        className="col-lg-5 col-md-6 col-sm-10 m-auto"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <div className="img-holder">
          <img src="images/media/img_19.png" alt="media" />
          <img
            src="images/shape/34.svg"
            alt="shape"
            className="shapes shape-six"
          />
        </div>
        {/* img-holder */}
      </div>
      {/* End .col */}

      <div
        className="col-xl-6 col-lg-7 ml-auto"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="quote-wrapper pt-60">
          <img src="images/icon/26.svg" alt="icon" className="icon" />
          <blockquote className="font-rubik">
            As a technology partner
          </blockquote>

          <p className="paraGraph">
            we build trust by delivering excellent customer experience and
            offers to innovate marketing leading software components in our
            product portfolio. We’re passionate coders, who allows to take
            advantage of promising opportunities in the worldwide market. Our
            approach utilizes various tools, technology and resources to assist
            our clients to understand their position, measure the benefits and
            implement change.
          </p>
          <h6>Award Us Your Project</h6>
          <Link to="/about-cs" className="theme-btn-two mt-45 md-mt-30">
            {" "}
            Contact
          </Link>
        </div>
        {/* /.quote-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutTwo;
