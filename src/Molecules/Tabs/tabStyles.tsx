import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-bottom: 1px solid #000000;
  position: relative;

  .tab {
    display: flex;
    padding: 0.5rem 0 0.7rem;
    cursor: pointer;
    position: relative;
    justify-content: center;

    .active-line {
      width: 100%;
      height: 0;
      border: 6px solid ${({ theme }) => theme.colors.primary};
      border-radius: 12px;
      position: absolute;
      bottom: -6px;
    }
  }
`;
