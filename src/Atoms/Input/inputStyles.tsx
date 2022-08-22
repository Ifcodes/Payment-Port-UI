import styled from "styled-components";

type InputStyleProps = {
  width?: string;
  fw?: string;
  textColor?: string;
};

export const InputWrapper = styled.div<InputStyleProps>`
  width: ${({ width }) => width || "100%"};
  margin-top: 1.5rem;

  label {
    font-size: 1.25rem;
    color: black;
    font-weight: 700;

    .asterics {
      color: ${({ theme }) => theme.colors.red};
      font-weight: 700;
    }
  }

  .label-description {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-size: 0.687rem;
    display: block;
    line-height: 24px;
  }

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    border-radius: 10px;
    outline: none;
    font-size: 1.25rem;
    padding: 1.06rem 1.68rem;
    color: ${({ textColor, theme }) => textColor || theme.colors.gray2};
    background-color: white;
    margin-top: 1rem;
    font-weight: ${({ fw }) => fw || ""};

    ::placeholder {
      color: #727070;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #000 !important;
    }

    [type="month"]::-webkit-inner-spin-button,
    [type="month"]::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  }
`;
