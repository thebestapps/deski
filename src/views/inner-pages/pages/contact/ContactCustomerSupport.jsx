import React from "react";
import useDocumentTitle from "../../../../components/useDocumentTitle";
import HeaderTwo from "../../../../components/header/HeaderTwo";
import ContactAddress from "../../../../components/contact/address/ContactAddress";
import ContactForm from "../../../../components/contact/form/ContactForm";
import FooterTwo from "../../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../../components/footer/CopyRightTwo";
import CallToActionThree from "../../../../components/call-to-action/CallToActionThree";
import img4 from '../../../../assets/images/assets/ct-img.png';
const ContactCustomerSupport = () => {
  useDocumentTitle(
    "Contact Customer Support || Deski-Saas & Software React Template"
  );

  return (
    <div className="main-page-wrapper p0">
      <HeaderTwo />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four space-fix">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>

        <div className="bg-wrapper">
          <div className="container">
            <div className="row">

            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="holder">
                    <img src={img4} alt="illustrator" />
                  </div>{" "}
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                       <h2>  Give Us a Shout!</h2>
                  <div className="text-wrapper">
                
             
                    <p className="font-rubik">
                    We know how to incorporate the tech solutions that best suit our case.
                    </p>
                  </div>{" "}
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>{" "}
            
              {/* <div className="col-xl-9 col-lg-11 col-md-10 m-auto">

                <h2>  Give Us a Shout!</h2>

                <div className="sub-text">
              We know how to incorporate the tech solutions that best suit our case.
                  </div>

              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-hero-four */}

      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

          <div className="form-style-classic mt-200 md-mt-80">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-style-two */}

      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-130">
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

export default ContactCustomerSupport;
