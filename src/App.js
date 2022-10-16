import { ThemeProvider } from "styled-components";

import AppRoutes from "routes";
import { theme, GlobalStyle } from "lib/styles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};
