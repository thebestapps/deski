import React from "react";

const PricingContent = [
  {
    packName: "Starter",
    name:"WordPress website design, build in 7 days",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Business Website with Premium Theme + Security + SEO + 15 Days Support",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"Magento ecommerce development",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Magento eCommerce websites, from the ground up and optimizing after launch.",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"iOS Android mobile app from psd, xd or figma",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Creating pages or app screens from a mobile app concept, UI designs etc.",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"iphone or Android medium size app",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Medium mobile app development with 2 operating system of choice with Backend server",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"Tensorflow machine learning models",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Predicted values from data or classification.",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"logo and branding designs services",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Including 4-6 logo concepts, business card design and web/social media pages design.",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"angular task from medium to large projects",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Do any Angular task based on the requirements.",
    preFeatures: [
      "text",
    ],
  },
  {
    packName: "Starter",
    name:"PHP, MySQL, Javascript development or bug fixes",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Software development, bug fixes, design or consultation.",
    preFeatures: [
      "text",
    ],
  },  {
    packName: "Starter",
    name:"Create brand new extension in magento",
    price: "0",
    packageFor: "text",
    icon: "38",
    desc: "Magento 2 Extension Development from scratch.",
    preFeatures: [
      "text",
    ],
  },
];

const PricingYearly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div className="col-lg-4 col-md-6 cs-rw-pt" key={i}>
          <div className="pr-table-wrapper">
            {/* <div className="pack-name">{val.packName}</div>
            <div className="price font-rubik">
              ${val.price}.<sup>99</sup>
            </div> */}
            {/* <div className="pack-rec font-rubik">{val.packageFor}</div> */}
            <img
              src={`images/icon/${val.icon}.svg`}
              alt="icon"
              className="icon"
            />
            <div className="detail-cycle">{val.name}</div>

            <div className="more-cycle">
        {val.desc}

            </div>

            {/* <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul> */}
            <a href="#" className="theme-btn-four">
              More
            </a>
            {/* <div className="trial-text font-rubik">
              Get your 30 day free trial
            </div> */}
          </div>
          {/*  /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingYearly;
