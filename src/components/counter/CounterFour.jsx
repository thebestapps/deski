import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import sliderimage from '../../../../assets/wp-img/undraw_Mobile_app_p3ts.png';

const counterUpContent = [
  {
    startCount: "0",
    endCount: "5",
    endPointText: "",
    meta: "Positive review and counting",
    animationDelay: "0",
    image:""
  },
  {
    startCount: "0",
    endCount: "29",
    endPointText: "k",
    meta: "Subscirber trust on our services",
    animationDelay: "100",
  },
  {
    startCount: "0",
    endCount: "73",
    endPointText: "k+",
    meta: "Order complete successfully",
    animationDelay: "200",
  },
];

const CounterFour = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"


          key={i}
        >
          <div className="counter-box-two">
            <h2 className="number">
              <span className="timer">
             <p>fdsds</p>
              </span>
              {val.endPointText}
            </h2>
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterFour;
