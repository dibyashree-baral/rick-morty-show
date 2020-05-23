import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./router";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
