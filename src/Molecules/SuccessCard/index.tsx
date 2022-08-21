import React from "react";
import { Span } from "../../Atoms/Typography";
import TickIcon from "../../Atoms/Vectors/TickIcon";
import { SuccesCardWrapper, SuccessCardOverlay } from "./successCardStyles";

const SuccessCard = () => {
  return (
    <SuccessCardOverlay>
      <SuccesCardWrapper>
        <div className="content">
          <div className="icon-cont">
            <TickIcon />
          </div>

          <Span color="#4F4F4F" mt="1.6rem">
            Please check your email for details concerning this transaction
          </Span>
          <a href="#" onClick={() => window.location.reload()}>
            Return Home
          </a>
        </div>
      </SuccesCardWrapper>
    </SuccessCardOverlay>
  );
};

export default SuccessCard;
