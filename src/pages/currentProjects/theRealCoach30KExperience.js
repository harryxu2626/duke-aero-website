import * as React from "react";

import TopAppBar from "../../components/topAppBar";
import BtmAppBar from "../../components/btmAppBar";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const CurrentProjects = () => {
  return (
    <div style={pageStyles}>
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
        pain
      </Typography>

      <StaticImage
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
        src="../../images/thisIsFine.jpg"
        alt="this is fine meme"
      />

      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ textAlign: "center" }}
          src="https://c.tenor.com/dX_Uey1yFJ4AAAAC/lmao-deep.gif"
          alt="deep friend laughing emoji"
        />
      </div>
      <BtmAppBar />
    </div>
  );
};

export default CurrentProjects;
