import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../../../components/useDocumentTitle";
import Header from "../../../../components/header/Header";
import HeaderTwo from "../../../../components/header/HeaderTwo";
import CallToActionFour from "../../../../components/call-to-action/CallToActionFour";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import FaqClassic from "../../../../components/faq/FaqClassicTwo";
import CounterFour from "../../../../components/counter/CounterFour";
import Pricing from "../../../../components/pricing/pricing-two/Pricing";
// import PricingYearly from "../../../../components/pricing/pricing-two/PricingYearly";
import sliderimage from "../../../../assets/images/assets/wp-img/undraw_Mobile_app_p3ts.png";
import i_magento from "../../../../assets/images/assets/wp-img/m2.png";
import i_webapp from "../../../../assets/images/assets/wp-img/webapp.jpg";
import i_mobileapp from "../../../../assets/images/assets/wp-img/mobile-app-icn.png";
import i_js from "../../../../assets/images/assets/wp-img/js.jpeg";
import i_node from "../../../../assets/images/assets/wp-img/node.png";

import freelancer from "../../../../assets/images/assets/wp-img/freelancer.jpeg";
import fivr from "../../../../assets/images/assets/wp-img/lgo.png";
import upwork from "../../../../assets/images/assets/wp-img/udwork.png";
import linkedin from "../../../../assets/images/assets/wp-img/logos.png";
import clutch from "../../../../assets/images/assets/wp-img/deliveron.png";
import toptal from "../../../../assets/images/assets/wp-img/toptal.png";


const companyLogoImagesContent = [
  {
    startCount: "0",
    endCount: "5",
    endPointText: "",
    meta: "freelancer",
    animationDelay: "0",
    image:freelancer
  },
  {
    startCount: "0",
    endCount: "29",
    endPointText: "k",
    meta: "fivr",
    animationDelay: "100",
    image:fivr
  },
  {
    startCount: "0",
    endCount: "73",
    endPointText: "k+",
    meta: "linkedin",
    animationDelay: "200",
    image:linkedin
  },
  {
    startCount: "0",
    endCount: "29",
    endPointText: "k",
    meta: "upwork",
    animationDelay: "100",
    image:upwork
  },
  {
    startCount: "0",
    endCount: "73",
    endPointText: "k+",
    meta: "clutch",
    animationDelay: "200",
    image:clutch
  },
];

const techLogoImagesContent = [
  {
    startCount: "0",
    endCount: "5",
    endPointText: "",
    meta: "Positive review and counting",
    animationDelay: "0",
    image:i_magento
  },
  {
    startCount: "0",
    endCount: "29",
    endPointText: "k",
    meta: "i_webapp",
    animationDelay: "100",
    image:i_webapp
  },
  {
    startCount: "0",
    endCount: "73",
    endPointText: "k+",
    meta: "i_mobileapp",
    animationDelay: "200",
    image:i_mobileapp
  },
  {
    startCount: "0",
    endCount: "29",
    endPointText: "k",
    meta: "i_js",
    animationDelay: "100",
    image:i_js
  },
  {
    startCount: "0",
    endCount: "73",
    endPointText: "k+",
    meta: "i_node",
    animationDelay: "200",
    image:i_node
  },
];


const ProjectManagement = () => {
  useDocumentTitle(
    " Pricing Project Management || Deski-Saas & Software React Template"
  );
  return (
    <div className="main-page-wrapper">
      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Pricing Section One
			============================================== */}
      <div className="pricing-section-one mb-150 md-mb-80">
        <div className="fancy-hero-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto">
                <h2 className="font-rubik tech-partner">
                  
                  <span className="txt-rd">
                  RED
                  </span>
                  
                  CRIX. Your Technology Partner.</h2>
              </div>

              <div className="col-lg-6 m-auto">

              <div
                className="technology-partner-elemement-services"

              >
                <img
                  src={sliderimage}
                  alt="media"
                  className="main-img logo c2"
                />
              </div>

              </div>

           
            </div>
          </div>
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>


        <div className="counter-info pb-150 md-pb-80">

{/* <p className="txt-head innr">Technology</p> */}

<div className="container">

<div className="row justify-content-center">
      {techLogoImagesContent.map((val, i) => (
        <div
          className="col-md-2 col-sm-4"


          key={i}
        >
          <div className="counter-box-two d3">

          <img
                  src={val.image}
                  alt="media"
                  className="main-img d3"
                />

            {/* <h2 className="number">
              <span className="timer">
             <p>fdsds</p>
              </span>
              {val.endPointText}
            </h2>
            <p className="font-rubik">{val.meta}</p> */}
          </div>
        </div>
      ))}
    </div>

</div>
</div>



      </div>

  
      {/* /.pricing-section-one */}

      {/* =====================================================
				Counter Info Standard
			===================================================== */}
    

      <div className="container">
            <div className="tab-content">
            {/* <PricingYearly/> */}
              <Pricing />
            </div>
          </div>

          <div className="pricing-section-one mb-150 md-mb-80">
        <div className="fancy-hero-one">
          <div className="container">
            <div className="row txtalgn">

            <div className="offer-text font-rubik h-3">
            Marketplace
        </div>




  


      </div>


      <div className="row justify-content-center">
      {companyLogoImagesContent.map((val, i) => (
        <div
          className="col-md-2 col-sm-4"


          key={i}
        >
          <div className="counter-box-two d3">

          <img
                  src={val.image}
                  alt="media"
                  className="main-img d3"
                />

            {/* <h2 className="number">
              <span className="timer">
             <p>fdsds</p>
              </span>
              {val.endPointText}
            </h2>
            <p className="font-rubik">{val.meta}</p> */}
          </div>
        </div>
      ))}
    </div>
    
          </div>
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>


</div>
      {/* /.counter-info */}

      {/* 	=============================================
				Fancy Text Block Fifteen
			============================================== */}
      <div className="fancy-text-block-fifteen">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last"
          
              >
                <div className="text-wrapper md-pb-40">
                  <img src="images/icon/42.svg" alt="iocn" className="icon" />
                  <div className="more-text">
                  Product development for B2B, B2C Industries  

                  </div>
                  <p className="font-rubik">
              
                  We offer solutions to empower the business owners to increase their customer engagement and enhance conversion rates. Our Developers can help you to plan and execute B2B strategies.

                  </p>
                  {/* <h6>
                    Jimmy Klein. <span>California USA</span>
                  </h6> */}
                </div>
                {/*  /.text-wrapper */}
              </div>
              {/* End .col */}

              <div
                className="col-lg-6 order-lg-first"
           
              >
                <img
                  src="images/media/img_40.png"
                  alt="media"
                  className="main-img"
                />
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* /.bg-wrapper */}

          <div className="contact-banner mt-100 md-mt-60">
            <div className="row justify-content-between align-items-center">
              <div
                className="col-xl-7 col-lg-8"
             
              >
                <p className="font-rubik">
                Reach out with any questions you have and follow us on social media.
                </p>
              </div>
              <div
                className="col-xl-4 col-lg-3"
             
              >
                <Link to="/contact-pm" className="theme-btn-four ml-auto">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          {/* /.contact-banner */}
        </div>
      </div>
      {/*  /.fancy-text-block-fifteen */}

      {/* 
      =============================================
				Faq Classic
		  ============================================== */}
      {/* <div className="faq-classic pt-150 pb-130 md-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>

              <Link to="/faq" className="theme-btn-one mt-50 md-mt-30">
                Go to Faq
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="md-mt-60">
                <FaqClassic />
              </div>
            </div>
        
          </div>
        </div>
      </div> */}
      {/* /.faq-classic */}

      {/* =====================================================
			  Call To Action  
			===================================================== */}
      {/* <div className="fancy-short-banner-one space-fix">
        <div className="container">
          <CallToActionFour />
        </div>

        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div> */}
      {/*  /.fancy-short-banner-one */}

      {/* 
      =============================================
				Footer
		  ============================================== */}
      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default ProjectManagement;
