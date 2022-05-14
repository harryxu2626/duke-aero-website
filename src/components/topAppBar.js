import React from "react"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import useDarkMode from "use-dark-mode";
import useIsClient from "./isClient"

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import CollapsedTopBar from "./collapsedTopBar";
import ExpandedTopBar from "./expandedTopBar";
import { lightTheme, darkTheme } from "./theme"

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const appBarStyle = {
  background: "transparent",
  boxShadow: "none",
};


const TopAppBar = () => {
  const { isClient, key } = useIsClient();
  const [darkModeValue, setDarkModeValue] = React.useState(false)
  React.useEffect(()=>{
    setDarkModeValue(window.matchMedia('(prefers-color-scheme: dark)').matches);
  },[])

  const darkMode = useDarkMode(darkModeValue);

  if(darkMode.value !== darkModeValue){
    setDarkModeValue(darkMode.value)
  }

  if(!isClient){
    return null;
  }

    

  return (
    <ThemeProvider theme={darkModeValue ? darkTheme : lightTheme}>
      
      <div style={pageStyles} key={key}>
      <CssBaseline />
        <AppBar position="static" style={appBarStyle}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <CollapsedTopBar darkMode={darkModeValue}/>

              <ExpandedTopBar darkMode={darkModeValue}/>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default TopAppBar;
