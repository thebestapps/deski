import React from "react";
import useDocumentTitle from "../../../../components/useDocumentTitle";
import Header from "../../../../components/header/Header";
import ContactAddressTwo from "../../../../components/contact/address/ContactAddressTwo";
import ContactForm from "../../../../components/contact/form/ContactForm";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";

const ContactProjectManagement = () => {
  useDocumentTitle(
    "Contact Project Management || Deski-Saas & Software React Template"
  );
  return (
    <div className="main-page-wrapper">
      <Header />
      {/* End Header */}

      {/* =============================================
				Fancy Hero One
			==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              {/* <div className="page-title">Contact us</div> */}
              <h2 >
              Give Us a Shout!
              </h2>

              <div className="sub-text">
              We know how to incorporate the tech solutions that best suit our case.
                  </div>

            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* 	=============================================
				Contact Us Light
			==============================================  */}
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
          <ContactAddressTwo />
          <div className="form-style-light">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* /.contact-us-light */}

      {/* 	=====================================================
				Footer Style One
			===================================================== */}
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

export default ContactProjectManagement;
