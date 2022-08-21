import styled from "styled-components";

export const H1 = styled.h1<{ fs?: string; mt?: string; mb?: string }>`
  font-size: ${({ fs }) => fs || "2.25rem"};
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
  margin-top: ${({ mt }) => mt || "1rem"};
  margin-bottom: ${({ mb }) => mb || "1rem"};
`;

export const Span = styled.span<{
  fs?: string;
  fw?: string;
  mt?: string;
  mb?: string;
  color?: string;
}>`
  font-size: ${({ fs }) => fs || "1rem"};
  font-weight: ${({ fw }) => fw || "400"};
  margin-top: ${({ mt }) => mt || "1rem"};
  margin-bottom: ${({ mb }) => mb || "1rem"};
  color: ${({ color, theme }) => color || theme.colors.gray4};
`;
