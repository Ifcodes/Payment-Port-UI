import React, { ReactNode } from "react";
import PageDesign from "../../Atoms/Vectors/PageBgDesign";
import { PageLayoutWrapper } from "./pageLayoutStyles";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayoutWrapper>
      <div className="pg-design">
        <PageDesign />
      </div>
      <main>
        <div className="main-content">{children}</div>
      </main>
    </PageLayoutWrapper>
  );
};

export default PageLayout;
