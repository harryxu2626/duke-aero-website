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

const Bluestone = () => {
  return (
    <div style={pageStyles}>
      <SEO title="Our Mission" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        OUR MISSION
      </Typography>

      <Typography
        style={{ marginTop: "3vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        The mission of Duke AERO is to provide students with the resources to
        build and fly a high-powered solid-fuel rocket in the Spaceport America
        Cup in New Mexico each June, and to participate in experimental projects
        relating to rocket development. In addition, the club aims to promote a
        safe environment for students interested in aerospace and engineering to
        learn and bring their passions to real projects. By hosting Duke alumni
        speakers working for notable companies in industry, and through
        attending aerospace conferences such as the North Carolina Space
        Symposium, Duke AERO seeks to provide students with exposure to the
        aerospace field.
      </Typography>

      <StaticImage
        objectFit="contain"
        placeholder="blurred"
        style={{ marginTop: "2vh", justifyContent: "center" }}
        height={590}
        src="../images/bayboro_group.png"
        alt="2022 bayboro group pic"
      />

      <BtmAppBar />
    </div>
  );
};

export default Bluestone;
