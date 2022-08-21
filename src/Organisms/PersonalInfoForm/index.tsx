import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Selector from "../../Atoms/Selector";
import { FormContainer } from "./personalInfoFormStyles";

const PersonalInfoForm = ({ proceed = () => {} }: { proceed?: Function }) => {
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    address_1: "",
    address_2: "",
    localgovt: "",
    state: "",
  });

  const handleFormChange = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    setFormField((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const selectOptions = [
    "Lagos",
    "Abuja",
    "Kwara",
    "Oyo",
    "Enugu",
    "Anambra",
    "Imo",
    "Delta",
    "Bauchi",
    "Kaduna",
    "Kano",
    "Rivers",
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormField({
      name: "",
      email: "",
      address_1: "",
      address_2: "",
      localgovt: "",
      state: "",
    });
    proceed("Billing Info");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={formField.name}
        placeholder="e.g. John Doe"
        onChange={(e) => handleFormChange("name", e)}
      />

      <Input
        label="Email Address"
        labelDescription="The purchase reciept would be sent to this address"
        type={"email"}
        isRequired
        value={formField.email}
        placeholder="e.g. doe@example.com"
        onChange={(e) => handleFormChange("email", e)}
      />

      <Input
        label="Address 1"
        value={formField.address_1}
        placeholder="Type in address here"
        onChange={(e) => handleFormChange("address_1", e)}
      />

      <Input
        label="Address 2"
        value={formField.address_2}
        placeholder="Type in optional address"
        onChange={(e) => handleFormChange("address_2", e)}
      />

      <div className="location">
        <div className="lga-cont">
          <Input
            label="Local Government"
            value={formField.localgovt}
            placeholder=" Local Government of Origin"
            onChange={(e) => handleFormChange("localgovt", e)}
          />
        </div>
        <div className="selector-cont">
          <Selector
            options={selectOptions}
            value={formField.state}
            label="State"
            selectorName="State"
            handleChange={(e) =>
              setFormField({ ...formField, state: e.target.value })
            }
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

export default PersonalInfoForm;
