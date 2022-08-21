import React, { ChangeEvent, FormEvent, useState, KeyboardEvent } from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Selector from "../../Atoms/Selector";
import { FormContainer } from "./billingFormStyles";

const BillingInfoForm = ({ proceed = () => {} }: { proceed?: Function }) => {
  const [formField, setFormField] = useState({
    cardName: "",
    cardType: "",
    cardNumber: "",
    cardExpDate: "",
    cardCvv: "",
  });

  const handleFormChange = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    setFormField((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleCardNumberChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    let value = e.target.value;
    if (type === "cardNumber") {
      value = value.replace(/\s/g, "");
      let newVal = "";
      for (let i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) newVal = newVal.concat(" ");

        newVal = newVal.concat(value[i]);
      }

      setFormField((prev) => ({ ...prev, cardNumber: newVal }));
    } else if (type === "exp_date") {
      let newVal = value;
      if (value.length > 2) {
        newVal = value.slice(0, 2) + "/" + value.slice(3);
      }
      setFormField((prev) => ({ ...prev, cardExpDate: newVal }));
    }
  };

  const selectOptions = ["Visa", "MasterCard", "Verve"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormField({
      cardName: "",
      cardType: "",
      cardNumber: "",
      cardExpDate: "",
      cardCvv: "",
    });

    proceed("Confirm Payment");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        label="Name on Card"
        isRequired
        autoComplete="false"
        value={formField.cardName}
        placeholder="e.g. John Doe"
        onChange={(e) => handleFormChange("cardName", e)}
      />

      <Selector
        options={selectOptions}
        label="Card Type"
        selectorName="cardType"
        handleChange={(e) =>
          setFormField({ ...formField, cardType: e.target.value })
        }
        isRequired
      />

      <div className="card-details-cont">
        <div className="card-number-cont">
          <Input
            label="Card Number"
            value={formField.cardNumber}
            placeholder="0000 0000 0000 0000"
            maxLength={19}
            minLength={19}
            onChange={(e) => handleCardNumberChange(e, "cardNumber")}
            isRequired
          />
        </div>
        <div className="exp-date-cont">
          <Input
            label="Expiry date"
            value={formField.cardExpDate}
            placeholder="01/02"
            maxLength={5}
            minLength={5}
            onChange={(e) => handleCardNumberChange(e, "exp_date")}
            isRequired
          />
        </div>
        <div className="cvv-cont">
          <Input
            label="CVV"
            value={formField.cardCvv}
            placeholder="222"
            fw="700"
            textColor="black"
            maxLength={3}
            onChange={(e) => handleFormChange("cardCvv", e)}
            isRequired
          />
        </div>
      </div>
      <div className="btn-cont">
        <Button btnText="Next" isPrimary type="submit" />
        <Button
          btnText="Cancel Payment"
          onClick={() => window.location.reload()}
        />
      </div>
    </FormContainer>
  );
};

export default BillingInfoForm;
