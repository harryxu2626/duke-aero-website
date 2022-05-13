import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
    typography: {
      body1: {
        color: "#202454",
      },
      h6: {
        color: "#202454",
      },
    },
  });
  
export const darkTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#1a1919",
          },
        },
      },
    },
    typography: {
      body1: {
        color: "#fff",
      },
      h6: {
        color: "#fff",
      },
    },
  });