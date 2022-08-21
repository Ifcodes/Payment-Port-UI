import React from "react";
import Button from "../../Atoms/Button";
import { Span } from "../../Atoms/Typography";
import NairaIcon from "../../Atoms/Vectors/NairaIcon";
import { CardPaymentWrapper } from "./styleConfirmPay";

const ConfirmPaymentCard = ({ proceed = () => {} }: { proceed?: Function }) => {
  return (
    <CardPaymentWrapper>
      <div className="card">
        <div className="nav">
          <Span fs="1.2rem" fw="700" color="white">
            Item Name
          </Span>
          <div className="price-title">
            <NairaIcon />
            <Span fs="1.2rem" fw="700" color="white">
              Price
            </Span>
          </div>
        </div>
        <div className="card-content">
          <div className="item">
            <Span fs="1.2rem" color="#4E598C" mt="0">
              Data science and usability
            </Span>
            <Span fs="1.2rem" color="#4E598C" fw="700" mt="0">
              50,000
            </Span>
          </div>
          <div className="item">
            <Span fs="1.2rem" color="#4E598C" mt="0">
              Shipping
            </Span>
            <Span fs="1.2rem" color="black" mt="0">
              0.00
            </Span>
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="total-cont">
            <Span>Total</Span>
            <Span>50,000</Span>
          </div>
        </div>
      </div>
      <div className="btn-cont">
        <Button btnText="Pay" isPrimary onClick={() => proceed("completed")} />
        <Button btnText="Cancel Payment" />
      </div>
    </CardPaymentWrapper>
  );
};

export default ConfirmPaymentCard;
