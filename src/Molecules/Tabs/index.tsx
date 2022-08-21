import React from "react";
import { Span } from "../../Atoms/Typography";
import { TabWrapper } from "./tabStyles";

type TabProps = {
  tabList?: Array<string>;
  activeTab?: string;
  setActiveTab?: Function;
};
const Tabs = ({ tabList, activeTab, setActiveTab = () => {} }: TabProps) => {
  return (
    <TabWrapper>
      {tabList?.map((tab) => (
        <div key={tab} className="tab" onClick={() => setActiveTab(tab)}>
          <Span fs="1.5vw" fw="700" color={activeTab === tab ? "#F2994A" : ""}>
            {tab}
          </Span>
          {activeTab === tab && <div className="active-line"></div>}
        </div>
      ))}
    </TabWrapper>
  );
};

export default Tabs;
