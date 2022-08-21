import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Product Sans";
    src: url('/vectors/Product-sans-regular/ProductSans-Regular.ttf') format('truetype');
  }

  html,
  body{
    width: 100%;
    margin: 0;
    padding: 0;
    font-family:  'Product Sans', sans-serif;
    font-size: 1rem;
  }

  *{
    box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    width: 5px;
  }

  ::-webkit-scrollbar-thumb{
    width: 5px;
    background-color: #F2994A;
    border-radius: 15px;
  }
`;

export default GlobalStyles;
