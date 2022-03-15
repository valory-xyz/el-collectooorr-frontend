import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = styled.div`
const GlobalStyle = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body,
  html {
    width: 100%;
    height: 100%;
    overscroll-behavior: none;
    margin: 0;
    font-family: texgyreheros__regular, sans-serif;
  }
`;

export default GlobalStyle;
