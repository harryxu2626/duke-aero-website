import * as React from "react";
import SEO from "../components/seo";
import TopAppBar from "../components/topAppBar";
import BtmAppBar from "../components/btmAppBar";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css";

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
        at the Spaceport America Cup 30k COTS challenge. The airframe of the
        rocket, dubbed “Coach 30k”, is 9.38’ long and has an ID of 4.5”. The
        airframe is made from 2x2 Twill 3k 7oz T-300 Carbon Fiber Fabric with
        the exception of the avionics bay which is made from fiberglass. The
        avionics bay is connected to the forward airframe and the power tube by
        a polycarbonate coupler; the nosecone is also connected to the forward
        airframe using a polycarbonate coupler. The rocket has three trapezoidal
        fins made from a plywood core wrapped with carbon fiber and finished
        with a tip-to-tip carbon fiber layup. The fins are tabbed for alignment
        with the internal centering rings. A dual recovery system was
        implemented with Peregrine 12g CO2 ejection charges for drogue and main
        parachute deployment. The drogue chute is a 5’ Rocketman standard
        parachute and the main chute is a 14’ Rocketman standard parachute. The
        telemetry of the rocket will be monitored by a TeleMega altimeter, a
        RRC3 altimeter, and a Featherweight GPS tracker; the electronics will be
        powered by two 3.7V LiPo and a 9V alkaline battery and the electronics
        will be activated using Featherweight magnetic switches. The rocket’s
        payload experiment will investigate the shielding effect of steel
        against muon penetration at altitude. The enclosure for this
        experimental project houses three identical muon detectors each made
        with a custom PCB and a “SiPM'' PCB; the enclosure also contains a
        MS5607 Pressure Sensor to convert pressure readings to altitude. The
        overall rocket design was analyzed using OpenRocket, SolidWorks FEA, and
        ANSYS Fluent; simulation results were supplemented by ground tests of
        the recovery and avionics systems.
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
