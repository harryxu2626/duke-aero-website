import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../images/aerocropped_clean.png";

import { Link } from "gatsby";

const menuButtonStyle = {
  background: "transparent",
  marginLeft: "auto",
};


const CollapsedTopBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [pastOpen, setPastOpen] = React.useState(false);

  const handleAboutClick = () => {
    setAboutOpen(!aboutOpen);
  };

  const handlePastClick = () => {
    setPastOpen(!pastOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Link to="/">
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            height: { xs: 64, sm: 100 },
            display: { xs: "flex", lg: "none" },
            marginTop: "1vh",
          }}
        />
      </Link>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          style={menuButtonStyle}
          disableRipple
        >
          <MenuIcon sx={{ color: props.darkMode ? "#ffffff" : "#202454" }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { md: "block", lg: "none" },
          }}
          MenuListProps={{ disablePadding: true }}
        >
          <List
            sx={{
              height: "100%",
              width: "100%",
              maxWidth: 360,
              bgcolor: props.darkMode ? "#1a1919" : "#ffffff",
              color: "#1a1919",
            }}
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleAboutClick}
              style={{ color: props.darkMode ? "#fff" : "#202454" }}
            >
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Typography textAlign="center">About</Typography>
              </Link>
              {aboutOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={aboutOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <Link to="/mission" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">Our Mission</Typography>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/theTeam" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">The Team</Typography>
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={handlePastClick}
              style={{ color: props.darkMode ? "#fff" : "#202454" }}
            >
              <Typography textAlign="center">Past Projects</Typography>
              {pastOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={pastOpen} timeout="auto">
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/bluestone" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">
                      BLUESTONE (2018-2019)
                    </Typography>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/thirtyK" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">
                      30K COMPETITION (2019-2020)
                    </Typography>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link to="/t1t2" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">
                      THING 1 AND THING 2 (2020-2021)
                    </Typography>
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <Link to="/currentProjects" style={{ textDecoration: "none" }}>
                <Typography textAlign="center">Current Projects</Typography>
              </Link>
            </ListItemButton>

            <ListItemButton>
              <Link to="/corporateSupport" style={{ textDecoration: "none" }}>
                <Typography textAlign="center">Corporate Support</Typography>
              </Link>
            </ListItemButton>

            <ListItemButton>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Typography textAlign="center">Contact</Typography>
              </Link>
            </ListItemButton>
          </List>
        </Menu>
      </Box>
    </>
  );
};

export default CollapsedTopBar;
