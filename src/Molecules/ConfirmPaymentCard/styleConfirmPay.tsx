import styled from "styled-components";

export const CardPaymentWrapper = styled.div`
  .card {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
    background-color: white;
    margin-top: 2.5rem;

    .nav {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      border-radius: 16px 10px 0px 0px;
      height: 4rem;
      display: flex;
      align-items: center;
      padding: 0 3.5rem;
      justify-content: space-between;

      .price-title {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
        }
      }
    }

    .card-content {
      width: 100%;
      background-color: white;
      padding: 1.5rem 3.5rem 0;

      .item {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;
      }
    }

    .footer {
      padding: 0 2rem 2rem;

      .total-cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #817e9e;
        border-radius: 5px;
        padding: 0 1.5rem;
        margin-top: 1.7rem;
      }
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
