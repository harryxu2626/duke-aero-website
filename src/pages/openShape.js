import * as React from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import "../styles/index.css"

const typeStyle = {
  padding: "5vh",
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
};

const openShape = () => {
  return (
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <Fade in={true} timeout={{ enter: 1000 }}>
        <Typography variant="h4" style={typeStyle}>
          "Never scare a person nolding explosives"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 5000 }}>
        <Typography variant="h4" style={typeStyle}>
          "Pull up the OpenShape"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 10000 }}>
        <Typography variant="h4" style={typeStyle}>
          "Rapid Unscheduled Disassembly"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 15000 }}>
        <Typography variant="h4" style={typeStyle}>
          "toob"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 20000 }}>
        <Typography variant="h4" style={typeStyle}>
          "g00b0"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 25000 }}>
        <Typography variant="h4" style={typeStyle}>
          "Everything was textbook except for the explosion"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 30000 }}>
        <Typography variant="h4" style={typeStyle}>
          "Ah shoot"
        </Typography>
      </Fade>

      <Fade in={true} timeout={{ enter: 35000 }}>
        <Typography variant="h4" style={typeStyle}>
          "How else are you supposed to blow?"
        </Typography>
      </Fade>
    </div>
  );
};

export default openShape;
