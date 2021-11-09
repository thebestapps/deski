import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: ` Team is phenomenal and very adaptable. They are able to handle essentially any challenge. Will certainly hire again for all other development projects.`,
      reviewerImg: "img_20",
      reviewerName: "AL",
      designation: "CEO",
    },
    {
      desc: `Super Good Work. Fast and Professional.`,
      reviewerImg: "img_20",
      reviewerName: "W.V. Mayer",
      designation: "CEO",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <p className="font-rubik">{val.desc}</p>
          <div className="d-lg-flex align-items-center">
            <img
              src={`images/media/${val.reviewerImg}.png`}
              alt=""
              className="c_img"
            />
            <div className="info">
              <strong>{val.reviewerName}</strong> <span>{val.designation}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
