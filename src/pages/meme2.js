import * as React from "react";
import Fade from "@mui/material/Fade";
import "../styles/index.css"

const Meme2 = () => {
  return (
    <div>
      <Fade in={true} timeout={{ enter: 15000 }}>
        <iframe
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "100vh",
            transform: `translate(-50%,-50%)`,
          }}
          src="https://www.youtube.com/embed/2-zz5o4mfyU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Fade>
    </div>
  );
};

export default Meme2;
