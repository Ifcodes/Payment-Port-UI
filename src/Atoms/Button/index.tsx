import React, { MouseEventHandler } from "react";
import { ButtonProps, ButtonWrapper } from "./buttonStyles";

interface BtnProps extends ButtonProps {
  btnText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ btnText, isPrimary, onClick }: BtnProps) => {
  return (
    <ButtonWrapper isPrimary={isPrimary} onClick={onClick}>
      {btnText}
    </ButtonWrapper>
  );
};

export default Button;
