import { useState } from "react";
import { H1 } from "./Atoms/Typography";
import ConfirmPaymentCard from "./Molecules/ConfirmPaymentCard";
import SuccessCard from "./Molecules/SuccessCard";
import { SuccesCardWrapper } from "./Molecules/SuccessCard/successCardStyles";
import Tabs from "./Molecules/Tabs";
import BillingInfoForm from "./Organisms/BillingInfoForm";
import PersonalInfoForm from "./Organisms/PersonalInfoForm";
import PageLayout from "./Templates/PageLayout";

function App() {
  const [selectedTab, setSelectedTab] = useState("Personal Info");

  const handleProceed = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="App">
      <PageLayout>
        {selectedTab !== "completed" && <H1>Complete your Purchase</H1>}
        {selectedTab !== "completed" && (
          <Tabs
            tabList={["Personal Info", "Billing Info", "Confirm Payment"]}
            activeTab={selectedTab}
            setActiveTab={setSelectedTab}
          />
        )}
        {selectedTab === "Personal Info" && (
          <PersonalInfoForm proceed={handleProceed} />
        )}
        {selectedTab === "Billing Info" && (
          <BillingInfoForm proceed={handleProceed} />
        )}
        {selectedTab === "Confirm Payment" && (
          <ConfirmPaymentCard proceed={handleProceed} />
        )}
        {selectedTab === "completed" && <SuccessCard />}
      </PageLayout>
    </div>
  );
}

export default App;
