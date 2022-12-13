import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }  
    
    ul {
        padding: 0;
        list-style: none;
    }

    ul, li, h1, h2, h3 {margin: 0;}
`;

const theme = {
  bg: "yellow",
  color: "yellow",
  borderOdd: "yellow",
  borderEven: "blue",
};

const GlobalStylesWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStylesWrapper;
