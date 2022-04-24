import React, {useState} from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import Button from "@mui/material/Button"
import logo from "../images/aero_logo.png"
import twoStageVid from "../videos/twoStageLaunch.mp4"
import {Link} from "gatsby"
import {
    usePopupState,
    bindHover,
    bindMenu,
  } from 'material-ui-popup-state/hooks'

//styles
const pageStyles = {
    color: "#232129",
    paddingLeft: 96,
    paddingRight: 96,
    paddingTop: 45,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const appBarStyle = {
    background: "#ffffff",
    boxShadow: "none",
}
const buttonStyle = {
    boxShadow: "none",
}
const menuButtonStyle = {
    background: "transparent",
    marginLeft: "auto",
}
const videoStyle = {
    objectFit: "cover",
    width: "100vw",
    height: "75vh",
    position: "fixed",
    top: "15vh",
    left: 0,
}
// const appBarTextStyle = {
//     color: "#fff",
// }

//data



//markdown
const TwoStage = () => {
        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
    
        const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        };
    
        const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        };

        const pastState = usePopupState({
            variant: 'popover',
            popupId: 'pastProjectMenu',
          })

        const aboutState = usePopupState({
            variant: 'popover',
            popupId: 'aboutMenu',
        })

        const aboutStateBlock = usePopupState({
            variant: 'popover',
            popupId: 'aboutBlockMenu',
        })

        const pastStateBlock = usePopupState({
            variant: 'popover',
            popupId: 'pastProjectBlockMenu',
        })
        return (
          <div style={pageStyles}>
            <video playsinline autoPlay muted loop style={videoStyle}>
                <source src={twoStageVid} type="video/mp4"/>
            </video>

            <AppBar position="static" style={appBarStyle}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Link to="/">
                        <Box 
                        component="img" 
                        src={logo} 
                        alt="logo" 
                        sx={{ height: 64 }}
                        />
                        </Link>

                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            style={menuButtonStyle}
                            disableRipple
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {/* {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))} */}
                        <MenuItem onClick={handleCloseNavMenu} {...bindHover(aboutStateBlock)}>
                            <Typography variant="h6" color="#202454" textAlign="center">
                                About
                            </Typography>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu} {...bindHover(pastStateBlock)}>
                            <Typography variant="h6" color="#202454" textAlign="center">
                                Past Projects
                            </Typography>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography variant="h6" color="#202454" textAlign="center">
                                Current Projects
                            </Typography>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography variant="h6" color="#202454" textAlign="center">
                                Corporate Support
                            </Typography>
                        </MenuItem>

                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography variant="h6" color="#202454" textAlign="center">
                                Contact
                            </Typography>
                        </MenuItem>
                        </Menu>
                    </Box>
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                        <Box 
                        component="img" 
                        src={logo} 
                        alt="logo" 
                        sx={{ height: 64 }}
                        />
                        </Link>
                        <Button style={menuButtonStyle} {...bindHover(aboutState)}>
                            <Typography variant="h6" textAlign="center" color="#202454">
                                About
                            </Typography>
                        </Button>

                        <Button style={appBarStyle} {...bindHover(pastState)}>
                            <Typography variant="h6" textAlign="center" color="#202454">
                                Past Projects
                            </Typography>
                        </Button>

                        <Button style={appBarStyle}>
                            <Typography variant="h6" textAlign="center" color="#202454">
                                Current Projects
                            </Typography>
                        </Button>

                        <Button style={appBarStyle}>
                            <Typography variant="h6" textAlign="center" color="#202454">
                                Corporate Support
                            </Typography>
                        </Button>

                        <Button style={appBarStyle}>
                            <Typography variant="h6" textAlign="center" color="#202454">
                                Contact
                            </Typography>
                        </Button>

                    </Box>
                    </Toolbar>
                </Container>
                </AppBar>


            <HoverMenu
                {...bindMenu(pastState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={pastState.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        BLUESTONE (2018-2019)
                    </Typography>
                </MenuItem>

                <MenuItem onClick={pastState.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        30K COMPETITION (2019-2020)
                    </Typography>
                </MenuItem>

                <MenuItem onClick={pastState.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        THING 1 AND THING 2 (2020-2021)
                    </Typography>
                </MenuItem>
            </HoverMenu>

            <HoverMenu
                {...bindMenu(pastStateBlock)}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={pastStateBlock.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        BLUESTONE (2018-2019)
                    </Typography>
                </MenuItem>

                <MenuItem onClick={pastStateBlock.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        30K COMPETITION (2019-2020)
                    </Typography>
                </MenuItem>

                <MenuItem onClick={pastStateBlock.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        THING 1 AND THING 2 (2020-2021)
                    </Typography>
                </MenuItem>
            </HoverMenu>

            <HoverMenu
                {...bindMenu(aboutState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={aboutState.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        The Team
                    </Typography>
                </MenuItem>
            </HoverMenu>

            <HoverMenu
                {...bindMenu(aboutStateBlock)}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem onClick={aboutStateBlock.close}>
                    <Typography variant="h6" textAlign="center" color="#202454">
                        The Team
                    </Typography>
                </MenuItem>
            </HoverMenu>

          </div>
        );
    
}

export default TwoStage;