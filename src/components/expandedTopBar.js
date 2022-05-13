import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Button from "@mui/material/Button";

import useDarkMode from "use-dark-mode";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme"

import logo from "../images/aerocropped_clean.png";

import { Link } from "gatsby";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";

const appBarStyle = {
  background: "transparent",
  boxShadow: "none",
  marginLeft: "2vw",
};
const menuButtonStyle = {
  background: "transparent",
  marginLeft: "2vw",
};


function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const ExpandedTopBar = (props) => {
  const [darkModeValue, setDarkModeValue] = React.useState(false)
  React.useEffect(()=>{
    setDarkModeValue(window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  },[])
  useForceUpdate();
  const darkMode = useDarkMode(darkModeValue);

  if(darkMode.value !== darkModeValue){
    setDarkModeValue(darkMode.value)
  }

  const pastState = usePopupState({
    variant: "popover",
    popupId: "pastProjectMenu",
  });

  const aboutState = usePopupState({
    variant: "popover",
    popupId: "aboutMenu",
  });
  return (
    <>
    <ThemeProvider theme={darkModeValue ? darkTheme : lightTheme}>
      <Link to="/">
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            height: 100,
            display: { xs: "none", lg: "flex" },
            marginTop: "1vh",
            marginRight: "2vw",
          }}
        />
      </Link>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
        <Button style={menuButtonStyle} {...bindHover(aboutState)}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              About
            </Typography>
          </Link>
        </Button>

        <Button style={appBarStyle} {...bindHover(pastState)}>
          <Typography variant="h6" align="center">
            Past Projects
          </Typography>
        </Button>

        <Button style={appBarStyle}>
          <Link to="/currentProjects" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              Current Projects
            </Typography>
          </Link>
        </Button>

        <Button style={appBarStyle}>
          <Link to="/corporateSupport" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              Corporate Support
            </Typography>
          </Link>
        </Button>

        <Button style={appBarStyle}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              Contact
            </Typography>
          </Link>
        </Button>
      </Box>
      <IconButton
        onClick={darkMode.toggle}
        style={{ display: darkModeValue ? "none" : "flex", marginLeft: "2vw" }}
      >
        <DarkModeIcon />
      </IconButton>
      <IconButton
        onClick={darkMode.toggle}
        style={{
          display: darkModeValue ? "flex" : "none",
          color: "#fff",
          marginLeft: "2vw",
        }}
      >
        <LightModeIcon />
      </IconButton>

      <HoverMenu
        {...bindMenu(pastState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={pastState.close}>
          <Link to="/bluestone" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              BLUESTONE (2018-2019)
            </Typography>
          </Link>
        </MenuItem>

        <MenuItem onClick={pastState.close}>
          <Link to="/thirtyK" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              30K COMPETITION (2019-2020)
            </Typography>
          </Link>
        </MenuItem>

        <MenuItem onClick={pastState.close}>
          <Link to="/t1t2" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              THING 1 AND THING 2 (2020-2021)
            </Typography>
          </Link>
        </MenuItem>
      </HoverMenu>

      <HoverMenu
        {...bindMenu(aboutState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={aboutState.close}>
          <Link to="/mission" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              Our Mission
            </Typography>
          </Link>
        </MenuItem>

        <MenuItem onClick={aboutState.close}>
          <Link to="/theTeam" style={{ textDecoration: "none" }}>
            <Typography variant="h6" align="center">
              The Team
            </Typography>
          </Link>
        </MenuItem>
      </HoverMenu>
      </ThemeProvider>
    </>
  );
};

export default ExpandedTopBar;
