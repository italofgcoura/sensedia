import React from "react";

import GlobalStyles from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme/default";

import Header from "./components/Header";
import HomePage from "./pages/Home";

import { Home } from "./context/HomeContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home>
        <Header />
        <HomePage />
      </Home>
    </ThemeProvider>
  );
}

export default App;
