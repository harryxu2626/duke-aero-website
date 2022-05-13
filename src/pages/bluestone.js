import * as React from "react";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import { StaticImage } from "gatsby-plugin-image";
import Typography from "@mui/material/Typography";
import "../styles/index.css"

const pageStyles = {
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Bluestone = () => {
  return (
    <div style={pageStyles}>
      <SEO title="Bluestone" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        BLUESTONE (2018-2019)
      </Typography>

      <Typography
        sx={{ typography: { xs: "h6", md: "h4" } }}
        textAlign="center"
      >
        Building a History
      </Typography>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Designed during the 2018/19 academic year for a low altitude flight at
        the Bayboro Launch Facility in NC, Bluestone marked a significant
        milestone for Duke AERO in its design and fabrication. Up until
        Bluestone we had established a history of constructing small low-powered
        rockets, a trend which Bluestone shattered. At a length of over 9 feet
        and a weight close to 90 pounds, Bluestone blew through our highest
        expectations in altitude, speed, and stability. However, with every
        great advancement comes a setback and loss of avionics tracking near
        apogee led to an inability to recover the rocket. A drastic step up in
        power and performance, Bluestone marked Duke AERO’s first rocket with
        established goals and success criteria, and paved the way for our future
        projects with bigger, heavier, and more powerful vehicles.
      </Typography>

      <div>
        <figure style={{ margin: 0, textAlign: "center" }}>
          <StaticImage
            style={{ margin: "2vw" }}
            placeholder="blurred"
            src="../images/bluestone.jpg"
            alt="bluestone"
          />
          <figcaption style={{ textAlign: "center" }}>
            Bluestone Rocket at the Launch Site in Bayboro, NC
          </figcaption>
        </figure>
      </div>

      <BtmAppBar />
    </div>
  );
};

export default Bluestone;
