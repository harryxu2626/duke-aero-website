import * as React from "react";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import useDarkMode from "use-dark-mode";
import { isMobile } from "react-device-detect";
import sponsorPacket from "../files/Duke_AERO_Sponsor_Packet.pdf";
import "../styles/index.css";

const pageStyles = {
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const CorporateSupport = () => {
  const [sysPref, setSysPref] = React.useState(false);
  React.useEffect(() => {
    setSysPref(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const darkMode = useDarkMode(sysPref);

  return (
    <div style={pageStyles}>
      <SEO title="Corporate Support" />
      <TopAppBar />
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        CORPORATE SUPPORT
      </Typography>

      <Typography
        style={{ marginTop: "2vh" }}
        sx={{ typography: { xs: "h5", md: "h3" } }}
        textAlign="center"
      >
        Long Story Short: We’re Interested
      </Typography>

      <Typography
        style={{ marginTop: "3vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Contrary to popular belief building rockets in-house is hardly an
        inexpensive feat, and one that is only made possible by our generous
        funding. However, as a collegiate rocketry team still in development, we
        would be thrilled to have your support no matter the form it takes.
        Monetary, material, or educational/professional we are interested and we
        appreciate your generosity. For some introductory information on us see
        the PDF guide below, and to connect with us, reference the linked form.
      </Typography>

      <Typography
        style={{ marginTop: "2vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        We’re looking forward to working with you!
      </Typography>

      <div
        style={{
          display: darkMode.value ? "none" : "flex",
          justifyContent: "center",
          marginTop: "0.5vh",
        }}
      >
        <figure style={{ margin: 0 }}>
          <a href={sponsorPacket} target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={275}
              height={350}
              placeholder="blurred"
              src="../images/duke_aero_sponsorship_cover.png"
              alt="corporate handbook"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Outreach Packet
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <a
            href="https://forms.gle/rKSAkqfxndfB1NQY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              style={{ margin: "2vw" }}
              width={275}
              height={350}
              placeholder="blurred"
              src="../images/aero_logo.png"
              alt="aero logo blue"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Corporate Sponsorship / Contact Form
          </figcaption>
        </figure>
      </div>

      <div
        style={{
          display: darkMode.value ? "flex" : "none",
          justifyContent: "center",
          marginTop: "0.5vh",
        }}
      >
        <figure style={{ margin: 0 }}>
          <a href={sponsorPacket} target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={275}
              height={350}
              placeholder="blurred"
              src="../images/duke_aero_sponsorship_cover.png"
              alt="corporate handbook"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Sponsor Packet
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <a
            href="https://forms.gle/rKSAkqfxndfB1NQY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              style={{ margin: "2vw" }}
              width={275}
              height={350}
              placeholder="blurred"
              src="../images/aero_logo_square_white.png"
              alt="aero logo white"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Corporate Sponsorship / Contact Form
          </figcaption>
        </figure>
      </div>

      <BtmAppBar forceLoad={isMobile ? false : true} />
    </div>
  );
};

export default CorporateSupport;
