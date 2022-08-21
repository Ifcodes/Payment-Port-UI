import React, { ChangeEvent, ChangeEventHandler } from "react";
import { generateId } from "../../Utils/generatedId";
import DropdownArrow from "../Vectors/DropdownArrow";
import { SelectorContainer } from "./selectorStyles";

type SelectorProps = {
  options: Array<string>;
  label?: string;
  isRequired?: boolean;
  selectorName?: string;
  labelDescription?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
};
const Selector = ({
  options = [""],
  label,
  isRequired,
  selectorName,
  value,
  labelDescription,
  handleChange,
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
        <select
          value={value}
          onChange={handleChange}
          name={selectorName}
          id={id}
        >
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
