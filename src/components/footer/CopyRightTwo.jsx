import React from "react";

const CopyRightTwo = () => {
  return (
    <div className="bottom-footer-content">
      <div className="d-flex align-items-center justify-content-center">
        <p>
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a rel="noopener noreferrer">REDCRIX</a> TECHNOLOGIES PRIVATE LIMITED.
        </p>
      </div>
    </div>
    //   /.bottom-footer
  );
};

export default CopyRightTwo;
