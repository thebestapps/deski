import React from "react";

const FeatureContent = [
  {
    icon: "20",
    meta: "Ionic",
    subTitle: `Create customized popups and show the message at the lorem`,
    dataDelay: "0",
  },
  {
    icon: "22",
    meta: "React Native",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
  {
    icon: "21",
    meta: "Angular",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
  {
    icon: "21",
    meta: "NodeJS",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
  {
    icon: "21",
    meta: "Laravel",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
  {
    icon: "21",
    meta: "ML/AI",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
];

const FeatureFour = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-five">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureFour;
