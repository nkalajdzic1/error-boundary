import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalErrorHandler } from "lib/components";
import { theme, GlobalStyle } from "lib/styles";
import AppRoutes from "routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <GlobalErrorHandler>
          <AppRoutes />
        </GlobalErrorHandler>
      </Router>
    </ThemeProvider>
  );
};
