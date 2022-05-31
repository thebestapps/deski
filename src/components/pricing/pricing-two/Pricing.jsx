import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingMonthly from "./PricingMonthly";
import PricingYearly from "./PricingYearly";

const Pricing = () => {
  return (
    <Tabs>
      <TabList className="nav nav-tabs pricing-nav-one pricing-custom-nav-one mb-0">
       
        <div className="offer-text font-rubik h-3">
          Popular
        </div>
      </TabList>

      <PricingYearly />
      

      {/* <div className="tab-content-wrpper">
        <TabPanel>
          <PricingMonthly />
        </TabPanel>

        <TabPanel>

        </TabPanel>

      </div> */}
    </Tabs>
  );
};

export default Pricing;
