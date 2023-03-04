import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";

import i18n from "./localization/i18n";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f51b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <App />
          </Router>
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  );
}
