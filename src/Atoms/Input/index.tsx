import React, { ChangeEventHandler, DetailedHTMLProps } from "react";
import { generateId } from "../../Utils/generatedId";
import { InputWrapper } from "./inputStyles";

type InputProps = {
  label?: string;
  value?: string;
  textColor?: string;
  labelDescription?: string;
  isRequired?: boolean;
  fw?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({
  label,
  value,
  labelDescription,
  fw,
  textColor,
  isRequired = false,
  onChange,
  ...props
}: InputProps) => {
  const id = generateId();
  return (
    <InputWrapper fw={fw} textColor={textColor}>
      <label htmlFor={id}>
        {label} {isRequired && <sup className="asterics">*</sup>}
      </label>
      {labelDescription && (
        <span className="label-description">{labelDescription}</span>
      )}

      <input
        id={id}
        value={value}
        onChange={onChange}
        required={isRequired}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;
