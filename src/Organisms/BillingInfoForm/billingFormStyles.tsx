import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .card-details-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .card-number-cont {
      width: 55%;
    }

    .exp-date-cont {
      width: 20%;
    }

    .cvv-cont {
      width: 15%;
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
