import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./router";
import RobotoBold from './assets/fonts/Roboto/Roboto-Bold.otf';
import RobotoRegular from './assets/fonts/Roboto/Roboto-Regular.otf';
import RobotoMedium from './assets/fonts/Roboto/Roboto-Medium.otf';
import RobotoLight from './assets/fonts/Roboto/Roboto-Light.otf';
import RobotoThin from './assets/fonts/Roboto/Roboto-Thin.otf';
import RobotoBlack from './assets/fonts/Roboto/Roboto-Black.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto-Black';
  font-weight: 900;
  src: url(${RobotoBlack}) format('opentype');
}

@font-face {
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  src: url(${RobotoBold}) format('opentype');
}

@font-face {
  font-family: 'Roboto-Medium';
  font-weight: 500;
  src: url(${RobotoMedium}) format('opentype');
}

@font-face {
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: 400;
  src: url(${RobotoRegular}) format('opentype');
}

@font-face {
  font-family: 'Roboto-Light';
  font-weight: 300;
  src: url(${RobotoLight}) format('opentype');
}

@font-face {
  font-family: 'Roboto-Thin';
  font-weight: 100;
  src: url(${RobotoThin}) format('opentype');
}

  body {
    font-family: 'Roboto-Regular',sans-serif;
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
