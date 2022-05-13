import * as React from "react";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import useDarkMode from "use-dark-mode";
import { isMobile } from "react-device-detect"
import "../styles/index.css"

const pageStyles = {
  paddingLeft: "10vw",
  paddingRight: "10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Contact = () => {
  const [sysPref, setSysPref] = React.useState(false)
  React.useEffect(()=>{
    setSysPref(window.matchMedia('(prefers-color-scheme: dark)').matches)
  },[])
    const darkMode = useDarkMode(sysPref);
    
  return (
    <div style={pageStyles}>
      <SEO title="Contact" />
      <TopAppBar />
      <Typography
        sx={{ typography: { xs: "h4", md: "h2" } }}
        textAlign="center"
        style={{ paddingTop: "5vh" }}
      >
        CONTACT
      </Typography>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        Thank you for your interest in Duke AERO! We’re happy to help in any way
        we can. Whether it be a membership inquiry or general questions about
        who we are and what we do, please do not hesitate to reach out to us.
        Below are links to Duke AERO contact forms specific to your inquiry, as
        well as our email (corporate sponsors should see the corporate partners
        page).
      </Typography>

      <div
        style={{
          display: darkMode.value ? "none" : "flex",
          justifyContent: "center",
          marginTop: "3vh",
        }}
      >
        <figure style={{ margin: 0 }}>
          <a href="https://forms.gle/62PdttCxHJCZPrzk9" target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={300}
              height={300}
              placeholder="blurred"
              src="../images/aero_logo.png"
              alt="aero logo blue"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Duke Student Form
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <a href="https://forms.gle/ddw5JaWucGkV3nkm8" target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={300}
              height={300}
              placeholder="blurred"
              src="../images/aero_logo.png"
              alt="aero logo blue"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            General Inquiry Form
          </figcaption>
        </figure>
      </div>

      <div
        style={{
          display: darkMode.value ? "flex" : "none",
          justifyContent: "center",
          marginTop: "3vh",
        }}
      >
        <figure style={{ margin: 0 }}>
          <a href="https://forms.gle/62PdttCxHJCZPrzk9" target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={300}
              height={300}
              placeholder="blurred"
              src="../images/aero_logo_square_white.png"
              alt="aero logo white"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            Duke Student Form
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <a href="https://forms.gle/ddw5JaWucGkV3nkm8" target="_blank" rel="noopener noreferrer">
            <StaticImage
              style={{ margin: "2vw" }}
              width={300}
              height={300}
              placeholder="blurred"
              src="../images/aero_logo_square_white.png"
              alt="aero logo white"
            />
          </a>
          <figcaption style={{ textAlign: "center" }}>
            General Inquiry Form
          </figcaption>
        </figure>
      </div>

      <Typography
        style={{ marginTop: "5vh" }}
        sx={{ typography: { xs: "body1", md: "h6" } }}
        textAlign="center"
      >
        If after submitting an inquiry form you have not received a response
        from one of our officers, use our&nbsp;
        <a href="mailto:dukerocketry@gmail.com" style={{ color: "#808080" }}>
          email
        </a>
      </Typography>
      <BtmAppBar forceLoad={isMobile ? false : true} />
    </div>
  );
};

export default Contact;
