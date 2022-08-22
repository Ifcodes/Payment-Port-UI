import styled from "styled-components";

export const SelectorContainer = styled.div`
  width: 100%;
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
  }

  .selector {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: white;
    margin-top: 1rem;
    cursor: pointer;
    position: relative;

    select {
      flex-grow: 1;
      width: 100%;
      padding: 1.06rem 1.25rem;
      -webkit-appearance: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray2};
      font-size: 1.25rem;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 10;

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus,
      :-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #000 !important;
      }
    }

    option {
      width: 100%;
      color: ${({ theme }) => theme.colors.purple};
    }

    svg {
      position: absolute;
      right: 2rem;
      z-index: 5;
    }
  }
`;
