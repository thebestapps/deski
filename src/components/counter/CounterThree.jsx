import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    icon: "23",
    startCount: "0",
    endCount: "1",
    meta: "Upwork",
  },
  {
    icon: "24",
    startCount: "0",
    endCount: "1",
    meta: "Freelancer",
  },
  {
    icon: "25",
    startCount: "0",
    endCount: "134",
    meta: "Fiverr",
  },
  {
    icon: "25",
    startCount: "0",
    endCount: "134",
    meta: "Top10",
  },
];

const CounterThree = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="counter-box-three">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h2 className="number">
              <span className="timer">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </span>{" "}
              m
            </h2>
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterThree;
