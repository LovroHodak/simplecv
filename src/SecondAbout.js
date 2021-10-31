import React from "react";
import { Link } from "react-router-dom";

import "./SecondAbout.css";
import { Card } from "react-bootstrap";

export default function SecondAbout() {
  return (
    <div className="secondAbout">
      <h2 className="title">About</h2>
      <Card
        style={{
          minWidth: "18rem",
          maxWidth: "54rem",
          backgroundColor: "#43262D",
          border: "none",
          color: "white"
        }}
      >
        <Card.Body>
          <Card.Text>
            I am the creator of Speaking of English, a blog for intermediate
            English learners who want to become more fluent in the language. I
            am originally from the United States and I currently live in
            Germany. I have been a teacher since 2008, and specialize in
            business writing and IELTS preparation. Before becoming a teacher, I
            worked as a copyeditor for government agencies in Washington DC and
            as a ghostwriter for startup founders and independent consultants
            around the world. In my free time, I enjoy hiking, practicing
            photography, and exploring the city by bike...
          </Card.Text>
        </Card.Body>
      </Card>

      <Link to='/about'><button className="pushable">
        <span className="front">
        Read more
        </span>
      </button></Link>
    </div>
  );
}
