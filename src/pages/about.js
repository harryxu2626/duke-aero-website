import React, { useState, useEffect } from "react"
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import useIsClient from "../components/isClient"
import { lightTheme, darkTheme } from "../components/theme"
import useDarkMode from "use-dark-mode"
import "../styles/index.css"

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const AboutPage = () => {
 

  const [darkModeValue, setDarkModeValue] = useState(false)
  useEffect(()=>{
    setDarkModeValue(window.matchMedia('(prefers-color-scheme: dark)').matches);
  },[])

  const darkMode = useDarkMode(darkModeValue);
  if(darkMode.value !== darkModeValue){
    setDarkModeValue(darkMode.value)
  }

  const { isClient, key } = useIsClient();
  
  if(!isClient){
    return null;
  }
  return (
    <ThemeProvider theme={darkModeValue ? darkTheme : lightTheme}>
    <div style={pageStyles} key={key}>
      <CssBaseline/>
      <SEO title="About" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "3vh" }}
      >
        ABOUT
      </Typography>

      <Typography
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Duke AERO is a developing IREC and Spaceport of America Cup team sending
        Duke closer to orbit one launch at a time. A collegiate high-powered
        rocketry group, AERO provides aerospace-focused engineering
        opportunities in the form of rocket design and fabrication and
        community/industry networking through guest speakers and corporate
        outreach initiatives.
      </Typography>

      <StaticImage
        objectFit="contain"
        height={590}
        style={{ marginTop: "2vh", justifyContent: "center" }}
        placeholder="blurred"
        src="../images/about.jpg"
        alt="aboutImage"
      />

      <BtmAppBar forceLoad={true} />
    </div>
    </ThemeProvider>
  );
};

export default AboutPage;
