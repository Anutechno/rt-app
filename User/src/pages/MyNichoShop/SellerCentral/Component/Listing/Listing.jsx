import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./Listing.css";
import TabComponent from "./TabComponent/TabComponent";
import SearchWithDropdown from "./SearchWithDropdown/SearchWithDropdown";
import OutofstockDropdown from "./OutofstockDropdown/OutofstockDropdown";
import OverviewConent from "./OverviewConent/OverviewConent";
import OutofstockContent from "./OutofstockContent/OutofstockContent";
import UnsoldContent from "./UnsoldContent/UnsoldContent";

const Listing = () => {
  let temp = 99;
  return (
    <div className="main-listing w-100">
      <div className="first_comp">
        <Tabs defaultActiveKey="Overview" className="tab_holder">
          <Tab eventKey="Overview" title={`99 Overview`}>
            <div className="subcomp_one">
              <TabComponent />
              <SearchWithDropdown />
            </div>
            <div className="second_comp">
              <OverviewConent />
            </div>
          </Tab>
          <Tab eventKey="outofstock" title={`0 Out Of Stock`}>
            <div className="subcomp_one">
              <OutofstockDropdown />
              <SearchWithDropdown />
            </div>
            <div className="second_comp">
              <OutofstockContent />
            </div>
          </Tab>
          <Tab eventKey="unsold" title={`8 Unsold`}>
            <div className="subcomp_one">
              <TabComponent />
              <OutofstockDropdown />
              <SearchWithDropdown />
            </div>
            <div className="second_comp">
              <UnsoldContent />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Listing;
