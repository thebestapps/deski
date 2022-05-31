import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../../../components/useDocumentTitle";
import HeaderTwo from "../../../../components/header/HeaderTwo";
import CallToActionThree from "../../../../components/call-to-action/CallToActionThree";
import FooterTwo from "../../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import CounterThreeColored from "../../../../components/counter/CounterThreeColored";
import FancyTextBlockTen from "../../../../components/fancy-text-block/FancyTextBlockTen";
import FancyFeatureSeven from "../../../../components/features/FancyFeatureSeven";
import TeamFour from "../../../../components/team/TeamFour";

const CustomerSupport = () => {
  useDocumentTitle(
    "About Customer Support || Deski-Saas & Software React Template"
  );
  return (
    <div className="main-page-wrapper">
      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderTwo />
      {/* End HeaderTwo Variation Three */}

      {/* 	=============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">
            About Our Organisation
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                {/* <h1 className="heading">World best customer support portal</h1> */}
                <p className="sub-heading">
                Redcrix Technologies Pvt Ltd represents considerable authority of designing & development of websites and apps. Being an offshore development company, we recognize the need of our customers. We hire qualified professionals from reputed engineering and management institutions with proven records of software development. The work platforms are maintained using expert professional advice to help the team deliver accurately.
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Our Story</p>
                <h2>Mission</h2>
              </div>
            </div>
          </div>
          {/* End title-style-two */}

          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
              We assure to provide safe outsourcing services, secure processes, and top quality results. Each project is most important for us. Once get awarded; your project would be in safer hands and with mutual cooperation of both the parties at each phase, undoubtedly the project will turn out to a big success.
              </p>
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
   We are here to ensure that the life of many people is made better every single day of their life. We know that times are changing and there is need for development in terms of online products. There is also a need for the marketing of products. That is the only way the targets who are the potential buyers will get to know about it.
              </p>

              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
 We are a company that is based on services and products. This includes dealing with development and product marketing. At REDCRIX, our target and focus are to get people in need of website development, mobile development, SEO, digital marketing, or other IT maintenance service. We bring quality services and results to your doorsteps.
            </p>


            <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >

We have decided to make our services available to all. It has been made possible for so many people to be able to request for our services and also have the strength financially to pay for the services he/she requested for.
     </p>


            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
      <div className="counter-with-icon-one border-style pt-120 pb-45 md-pt-70">
        <div className="container">
          <div className="border-style">
            <CounterThreeColored />
          </div>
        </div>
        {/* End .container */}
      </div>
      {/*  /.counter-with-icon-one */}

      {/* 	=============================================
				Fancy Text block Ten
			==============================================  */}
      <div className="fancy-text-block-ten mt-120 md-mt-60">
        <div className="container">
          <FancyTextBlockTen />
        </div>
      </div>
      {/* /.fancy-text-block-ten */}

      {/* =====================================================
				Fancy Feature Five
			===================================================== */}
      <div className="fancy-feature-five mt-200 md-mt-100">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <img
            src="images/shape/47.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container">
            <div className="title-style-two text-center mb-60 md-mb-40">
              <div className="row">
                <div className="col-xl-8 col-lg-9 m-auto">
                  <p>Our Values</p>
                  <h2>We’r driven by our values</h2>
                  <div className="sub-text">
                    Deski stand with friendly interface with lots of features
                    that help our team and csutomer to collbarate easily.
                  </div>
                </div>
              </div>
            </div>
            {/* End .title-style-two */}
            <div className="row justify-content-center">
              <FancyFeatureSeven />
            </div>
            {/* End .row */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-five */}

      {/* =====================================================
				Team Section Two
			===================================================== */}
      <div className="team-section-two mt-200 md-mt-100">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row align-items-center justify-content-between mb-80 md-mb-10">
            <div className="col-lg-8">
              <div className="title-style-two">
                <p>Our Team</p>
                <h2>Our talented team member waiting to server.</h2>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-4 d-lg-flex justify-content-end">
              <Link to="/team-3" className="theme-btn-three md-mt-20">
                See All Members
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="row">
            <TeamFour />
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.team-section-two */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-225 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
        <div className="top-footer">
          <div className="container">
            <FooterTwo />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRightTwo />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CustomerSupport;
