import * as React from "react";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css"

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const CurrentProjects = () => {
  return (
    <div style={pageStyles}>
      <SEO title="Current Projects" />
      <TopAppBar />
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        COACH 30K (2021-2022)
      </Typography>

      <Typography
        sx={{ typography: { xs: "h6", md: "h4" } }}
        textAlign="center"
      >
        EXPLODING BACK TO LIFE
      </Typography>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        With all students allowed back on campus, the club once again took aim
        at the Spaceport America Cup 30K COTS challenge. The team iterated on
        the previous 30K design to arrive at a rocket that would
        [blah,blah,blah]
      </Typography>

      <StaticImage
        objectFit="contain"
        placeholder="blurred"
        style={{ paddingTop: "2vh", justifyContent: "center" }}
        height={600}
        src="../images/coach30k_paint.png"
        alt="coach 30k paint masterpiece"
      />

      <BtmAppBar />
    </div>
  );
};

export default CurrentProjects;
