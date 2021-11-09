import React from "react";
import { Link } from "react-router-dom";

const CallToActionThree = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="title-style-one">
          <h6 className="font-rubik" style={{ color: "#f96f60" }}>
            Let's Talk!
          </h6>
          <h2>Ready to discuss your app idea?</h2>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="form-wrapper">
          <form onClick={handleSubmit}>
            <input type="text" placeholder="Email address" />
            <button>Send</button>
          </form>
          {/* End form */}
          <p className="font-rubik">Call +91 99880-98200.</p>
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToActionThree;
