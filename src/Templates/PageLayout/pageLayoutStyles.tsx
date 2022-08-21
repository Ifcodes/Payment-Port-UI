import styled from "styled-components";

export const PageLayoutWrapper = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;

  .pg-design {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
    }
  }

  main {
    width: 100%;
    display: flex;
    padding: 4rem 0;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    .main-content {
      width: 50%;
      max-width: 40rem;
    }
  }
`;
