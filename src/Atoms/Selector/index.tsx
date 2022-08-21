import React from "react";
import { generateId } from "../../Utils/generatedId";
import DropdownArrow from "../Vectors/DropdownArrow";
import { SelectorContainer } from "./selectorStyles";

type SelectorProps = {
  options: Array<string>;
  label?: string;
  isRequired?: boolean;
  selectorName?: string;
  labelDescription?: string;
};
const Selector = ({
  options = [""],
  label,
  isRequired,
  selectorName,
  labelDescription,
}: SelectorProps) => {
  const id = generateId();

  return (
    <SelectorContainer>
      <label htmlFor={id}>
        {label} {isRequired && <sup className="asterics">*</sup>}
      </label>
      {labelDescription && (
        <span className="label-description">{labelDescription}</span>
      )}
      <div className="selector">
        <select name={selectorName} id={id}>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <DropdownArrow />
      </div>
    </SelectorContainer>
  );
};

export default Selector;
