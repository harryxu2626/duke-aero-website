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

const T1t2 = () => {
  return (
    <div style={pageStyles}>
      <SEO title="Thing 1 and Thing 2" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        THING 1 AND THING 2 (2020-2021)
      </Typography>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        In a year impacted heavily by COVID-19 restrictions that were put in
        place by the University, Duke AERO took a great leap forward with the
        development, construction, and successful launch of a two-stage rocket
        affectionately dubbed “Thing 1 and Thing 2”.
      </Typography>

      <div style={{ display: "flex" }}>
        <figure>
          <StaticImage
            objectFit="contain"
            height={200}
            width={300}
            placeholder="blurred"
            src="../images/twostagesmall.jpg"
            alt="two stage launch"
          />
          <figcaption>“Thing 1 and Thing 2” Accelerates off the pad</figcaption>
        </figure>
        <Typography
          style={{ marginTop: "5vh" }}
          sx={{ typography: { xs: "body1", md: "h6" } }}
          textAlign="left"
        >
          In a year impacted heavily by COVID-19 restrictions that were put in
          place by the University, Duke AERO took a great leap forward with the
          development, construction, and successful launch of a two-stage rocket
          affectionately dubbed “Thing 1 and Thing 2”.
        </Typography>
      </div>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Watch a&nbsp;
        <a
          href="https://www.youtube.com/watch?v=ktVuzs4q1P0"
          style={{ color: "#808080" }}
        >
          video of the launch
        </a>
        , or read more from Duke’s Department of Mechanical Engineering and
        Materials Science&nbsp;
        <a
          href="https://mems.duke.edu/about/news/we-have-liftoff"
          style={{ color: "#808080" }}
        >
          here
        </a>
        .
      </Typography>

      <div>
        <figure style={{ margin: 0, textAlign: "center" }}>
          <StaticImage
            style={{ margin: "2vw" }}
            placeholder="blurred"
            src="../images/t1t2.jpg"
            alt="Thing 1 Thing 2"
          />
          <figcaption style={{ textAlign: "center" }}>
            Duke AERO’s 2021 Travel Team with ‘Thing 1 and Thing 2″
          </figcaption>
        </figure>
      </div>

      <BtmAppBar />
    </div>
  );
};

export default T1t2;
