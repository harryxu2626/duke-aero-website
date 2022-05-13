import * as React from "react";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import "../styles/index.css"

const pageStyles = {
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const TheTeam = () => {
  return (
    <div style={pageStyles}>
      <SEO title="The Team" />
      <TopAppBar />

      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh", paddingLeft: "10vw", paddingRight: "10vw" }}
      >
        THE TEAM
      </Typography>

      <Typography
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
        style={{ paddingLeft: "10vw", paddingRight: "10vw" }}
      >
        Comprised of a diverse group of passionate undergraduate engineers, our
        team truly represents some of the best Duke has to offer. Motivated and
        eager to learn, they push Duke AERO forward toward widespread collegiate
        rocketry recognition with each and every launch. All 21 current members,
        spanning from first year students to graduate students contribute to our
        vehicles through their interests, ranging from propulsion to electrical
        engineering. All undergraduate students at Duke University are welcome
        to join our team.
      </Typography>

      <Typography
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
        style={{ marginTop: "3vh", paddingLeft: "10vw", paddingRight: "10vw" }}
      >
        Elected by the group are four executive members:
      </Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <figure style={{ margin: 0 }}>
          <StaticImage
            style={{ margin: "2vw" }}
            width={300}
            height={300}
            placeholder="blurred"
            src="../images/JD_HEADSHOT.jpg"
            alt="JD_Inge"
          />
          <figcaption style={{ textAlign: "center" }}>
            JD Inge – President
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <StaticImage
            style={{ margin: "2vw" }}
            width={300}
            height={300}
            placeholder="blurred"
            src="../images/JACKSON.jpg"
            alt="JacksonKennedy"
          />
          <figcaption style={{ textAlign: "center" }}>
            Jackson Kennedy – Vice President
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <StaticImage
            style={{ margin: "2vw" }}
            width={300}
            height={300}
            placeholder="blurred"
            src="../images/HANNA.jpg"
            alt="HannaMark"
          />
          <figcaption style={{ textAlign: "center" }}>
            Hanna Mark – Treasurer
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <StaticImage
            style={{ margin: "2vw" }}
            width={300}
            height={300}
            placeholder="blurred"
            src="../images/PAT.jpg"
            alt="PatWilson"
          />
          <figcaption style={{ textAlign: "center" }}>
            Patrick Wilson – Corporate Relations
          </figcaption>
        </figure>
      </div>

      <Typography
        style={{ marginTop: "3vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Feel free to contact the executive team via the&nbsp;
        <a href="mailto:dukerocketry@gmail.com" style={{ color: "#808080" }}>
          email linked here
        </a>
      </Typography>

      <BtmAppBar forceLoad={true} />
    </div>
  );
};

export default TheTeam;
