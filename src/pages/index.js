import * as React from "react";
import "../styles/index.css";
import { CssBaseline } from "@mui/material";

import twoStageVid from "../videos/twoStageLaunch.mp4";

import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import SEO from "../components/seo"
import { Helmet } from "react-helmet";

//styles
const pageStyles = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const videoStyle = {
  objectFit: "cover",
  width: "100vw",
  height: "80vh",
  position: "fixed",
  left: 0,
};

//data

//markdown
const Index = () => {
  return (
    <div style={pageStyles}>
      <CssBaseline />
      <SEO titleTemplate={`%s`}/>
      <TopAppBar />

      <div style={{ paddingTop: "2vh", justifyContent: "center" }}>
        <video
          preload="true"
          autoPlay
          muted
          loop
          playsInline
          style={videoStyle}
        >
          <source src={twoStageVid} type="video/mp4" />
        </video>
      </div>

      <BtmAppBar forceLoad={true} forceBG={true} />
    </div>
  );
};

export default Index;
