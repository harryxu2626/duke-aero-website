import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Fade from "@mui/material/Fade";
import { CssBaseline } from "@mui/material";
import useDarkMode from "use-dark-mode";
import useIsClient from "./isClient"

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


// const appBarStyle = {
//     background: "transparent",
//     boxShadow: "none",
// }
const menuButtonStyle = {
  background: "transparent",
  marginLeft: "auto",
};



const BtmAppBar = (props) => {
  const { isClient, key } = useIsClient();
  const [atBtm, setAtBtm] = React.useState(props.forceLoad);
  const [sysPref, setSysPref] = React.useState(false)
  React.useEffect(()=>{
    setSysPref(window.matchMedia('(prefers-color-scheme: dark)').matches)
  },[])
    const darkMode = useDarkMode(sysPref);


  if (typeof window !== `undefined`) {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // you're at the bottom of the page
        setAtBtm(true);
      } else {
        setAtBtm(false);
      }
    };
  }

  if(!isClient){
    return null;
  }
  console.log(darkMode);
  return (
    <div
      style={{
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
        paddingTop: props.topPadding in props ? props.topPadding : "8vh",
      }}
      key={key}
    >
      <CssBaseline />
      <Fade appear={false} in={atBtm} timeout={{ enter: 1000, exit: 200 }}>
        <AppBar
          position="fixed"
          style={{
            background: props.forceBG
              ? (darkMode.value ? "#1a1919" : "#ffffff")
              : "transparent",
            boxShadow: "none",
            transition: `background-color 0.3s ease`,
          }}
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Typography color={darkMode.value ? "#fff" : "#202454"}>&#169;2022 by Duke AERO</Typography>

            <IconButton
              href="https://www.linkedin.com/company/duke-aero-society/"
              target="_blank"
              rel="noopener noreferrer"
              style={menuButtonStyle}
              disableRipple
              aria-label="linkedin"
            >
              <LinkedInIcon style={{color:darkMode.value ? "#fff" : "#202454"}}/>
            </IconButton>

            <IconButton
              href="https://www.instagram.com/duke_aero/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              disableRipple
              aria-label="instagram"
            >
              <InstagramIcon style={{color:darkMode.value ? "#fff" : "#202454"}}/>
            </IconButton>
            <IconButton
              href="https://www.youtube.com/channel/UCooNA_Gx4-XZfQQfeg43qxA"
              target="_blank"
              rel="noopener noreferrer"
              disableRipple
              aria-label="youtube"
            >
              <YouTubeIcon style={{color:darkMode.value ? "#fff" : "#202454"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Fade>
    </div>
  );
  
};

export default BtmAppBar;
