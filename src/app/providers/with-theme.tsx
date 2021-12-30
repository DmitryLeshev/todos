import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme as themeConfig } from 'shared/config'
import 'simplebar/dist/simplebar.min.css';
import 'shared/assets/styles/index.css';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: themeConfig.colors.primary
    },
    secondary: {
      main: themeConfig.colors.secondary
    }
  }
});

export const withTheme = (component: () => React.ReactNode) => () =>
(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {component()}
  </ThemeProvider>
);
