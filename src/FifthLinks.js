import React from "react";
import "./FifthLinks.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FifthLinks() {
  let linkdinLink = 'https://www.linkedin.com/in/lovrohodak/'
  let githubLink = 'https://github.com/LovroHodak'
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
        <a href={linkdinLink} target="_blank" ><Image
          src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png"
          roundedCircle
          style={{ maxWidth: 150, maxHeight: 150 }}
        /></a>
        <a href={githubLink} target="_blank" ><Image
          src="https://library.kissclipart.com/20190405/hve/kissclipart-computer-icons-github-clip-art-logo-dc9f8834e57de4e9.png"
          roundedCircle
          style={{ maxWidth: 150, maxHeight: 150 }}
        /></a>
      </div>
      <Image
        src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png"
        roundedCircle
        className="m-5"
      />
    </div>
  );
}
