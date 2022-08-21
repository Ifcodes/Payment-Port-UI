import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .location {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .lga-cont {
      width: 60%;
    }

    .selector-cont {
      width: 35%;
    }
  }

  .btn-cont {
    width: 100%;
    margin-top: 2rem;
    align-self: flex-start;
    display: flex;

    button {
      margin-right: 1rem;
    }
  }
`;
