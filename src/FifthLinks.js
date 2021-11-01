import React from "react";
import "./FifthLinks.css";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CV from "./CV_Lovro_Hodak.pdf";

export default function FifthLinks() {
  let linkdinLink = "https://www.linkedin.com/in/lovrohodak/";
  let githubLink = "https://github.com/LovroHodak";

  console.log(CV);

  return (
    <div className="fifthLinks">
      <h2 className="title">Links & CV</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a href={linkdinLink} target="_blank">
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png"
            roundedCircle
            style={{ maxWidth: 150, maxHeight: 150 }}
          />
        </a>
        <a href={githubLink} target="_blank">
          <Image
            src="https://library.kissclipart.com/20190405/hve/kissclipart-computer-icons-github-clip-art-logo-dc9f8834e57de4e9.png"
            roundedCircle
            style={{ maxWidth: 150, maxHeight: 150 }}
          />
        </a>
      </div>

        <a href={CV} download>
          <Image
            src="https://www.mmferrari.net/wp-content/uploads/2018/01/cv9.png"
            
            className="m-5"
          />
          
        </a>
    </div>
  );
}
