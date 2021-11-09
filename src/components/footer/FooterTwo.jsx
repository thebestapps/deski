import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/redcrixTechnologies/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/redcrix",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const FooterTwo = () => {
  return (
    <div className="row justify-content-between">
      <div
        className="col-lg-2 col-12 footer-about-widget"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <a href="index-customer-support.html" className="logo">
          <img src="images/logo/deski_03.svg" alt="brand" />
        </a>
      </div>
      {/* /.about-widget */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title">Learn More</h5>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/solution-management">Technologies</Link>
          </li>
          <li>
            <Link to="/blog-details">Articles</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title">Services</h5>
        <ul>
          <li>
            <Link to="/blog-details">Website Design</Link>
          </li>
          <li>
            <Link to="/blog-details">Mobile Development</Link>
          </li>
          <li>
            <Link to="/blog-details">React Native</Link>
          </li>
          <li>
            <Link to="/blog-details">Ionic</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">About us</h5>
        <ul>
          <li>
            <Link to="/about-cs">Work Delivered</Link>
          </li>
          <li>
            <Link to="/faq-details">Faqs</Link>
          </li>
          <li>
            <Link to="/team-6">Team</Link>
          </li>
          <li>
            <Link to="/pricing-cs">Location</Link>
          </li>
          <li>
            <Link to="/blog-5">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-3 col-sm-6 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <h5 className="footer-title">Address</h5>

        <ul className="info">
          <li>
            <a href="mailto:contact@redcrix.com">contact@redcrix.com</a>
          </li>
          <li>
            <a href="Tel: +919988098200" className="mobile-num">
              +91 99880 98200
            </a>
          </li>
        </ul>
        <ul className="social-icon d-flex">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //.row
  );
};

export default FooterTwo;
