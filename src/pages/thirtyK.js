import * as React from "react";

import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import SEO from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography";
import "../styles/index.css"

const pageStyles = {
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const ThirtyK = () => {
  return (
    <div style={pageStyles}>
      <SEO title="30K Competition" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        30K COMPETITION (2019-2020)
      </Typography>

      <Typography
        sx={{ typography: { xs: "h6", md: "h4" } }}
        textAlign="center"
      >
        Shooting to Score at 30,000 Feet
      </Typography>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Designed during the 2019/20 academic year for flight at the 2020
        Spaceport of America Cup, our 30k Competition Rocket is the largest,
        most powerful vehicle produced by Duke AERO to date. Using a minimum
        diameter carbon fiber body tube construction and a
        commercial-off-the-shelf (COTS) solid motor, every aspect of this rocket
        was designed for optimal flight with an apogee of exactly 30,000 feet.
        Featuring a new dual deployment recovery system, not only is this rocket
        the most powerful vehicle to come out of Duke AERO, but it is the safest
        with redundancies built in for every critical system. At a length of
        over 10 feet, Bluestone marks a new era for Duke AERO, one defined by
        large and powerful rockets in which we carefully refine our abilities to
        reach orbit. Serving as another example of the incredible progress made
        in the past few years by Duke AERO, the 30k Competition Rocket is sure
        to score big come Summer 2021.*
      </Typography>

      <div>
        <figure style={{ margin: 0, textAlign: "center" }}>
          <StaticImage
            style={{ margin: "2vw" }}
            placeholder="blurred"
            src="../images/thirtyK.png"
            alt="30K CAD"
          />
          <figcaption style={{ textAlign: "center" }}>
            CAD Rendering of 30K Rocket
          </figcaption>
        </figure>
      </div>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="left"
      >
        *Due to the COVID-19 Pandemic, the launch of this vehicle was delayed
        until Summer 2021
      </Typography>
      <BtmAppBar />
    </div>
  );
};

export default ThirtyK;
