import styled from "styled-components";

export const SuccessCardOverlay = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
`;

export const SuccesCardWrapper = styled.div`
  width: 50%;
  max-width: 40rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .content {
    display: flex;
    flex-direction: column;

    .icon-cont {
      align-self: center;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      width: 80%;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      line-height: 24px;
      font-weight: 500;
    }
  }
`;
