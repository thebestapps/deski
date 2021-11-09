import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const DocEditorTabs = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center">
              <img
                src="images/icon/105.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/105-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/106.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/106-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/107.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/107-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/108.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/108-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/109.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/109-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/110.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/110-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
          <Tab>
            <div className="nav-link d-flex align-items-center justify-content-center ">
              <img
                src="images/icon/111.svg"
                alt="icon"
                className="current tran3s"
              />
              <img
                src="images/icon/111-c.svg"
                alt="icon"
                className="hover tran3s"
              />
            </div>
          </Tab>
        </TabList>

        <div className="mt-60 sm-mt-40 tab-content">
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_81.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Track Human faces</p>
                  </div>
                </div>
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Motation Tracking</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_92.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>keyframing experience</p>
                  </div>
                </div>
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Keyframing</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_93.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Audio track down</p>
                  </div>
                </div>
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Audio Ducking</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_94.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Take the color</p>
                  </div>
                </div>
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Color Matching</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_95.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Edit videos at up to 4K</p>
                  </div>
                </div>{" "}
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>4K Editing Support</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_96.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Remove unwanted noise</p>
                  </div>
                </div>{" "}
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Noise Removal</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="img-holder">
                  <img src="images/media/img_97.png" alt="" />
                  <div className="ripple-box d-flex align-items-center justify-content-center">
                    <p>Layer multiple video clips</p>
                  </div>
                </div>{" "}
                {/* /.img-holder */}
              </div>
              <div className="col-md-6">
                <div className="text-wrapper">
                  <h4>Picture in Picture (PIP)</h4>
                  <p>
                    From its medieval origins to the digital earn everything
                    there is to know about the ubi lorem ipsum passage.
                  </p>
                </div>{" "}
                {/* /.text-wrapper */}
              </div>
            </div>
          </TabPanel>
        </div>
        {/* /.pricing-table-area-six */}
      </Tabs>
    </>
  );
};

export default DocEditorTabs;
