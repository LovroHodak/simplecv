import React from 'react'
import "./WorkExperience.css";
import { Card } from "react-bootstrap";

export default function WorkExperience() {
    return (
        <div className="workExperience">
      <h2 className="title">Work Experience</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img variant="top" src='https://tsm-static.sdn.si/oglasi/1732811000/logotip.jpg' />
        <Card.Body>
          <Card.Title>Lek</Card.Title>
          <Card.Text>
          Mengeš, Slovenia
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img variant="top" src="http://www.equiti.com/media/11666/amazon.jpg" />
        <Card.Body>
          <Card.Title>Amazon Logistics</Card.Title>
          <Card.Text>
          Berlin, Germany
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img variant="top" src='https://pbs.twimg.com/profile_images/1127876464186142721/ksepSQ_q_400x400.png' />
        <Card.Body>
          <Card.Title>Snail</Card.Title>
          <Card.Text>
          Ljubljana, Slovenia
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      
      <button className="pushable">
        <span className="front">All work experience</span>
      </button>
    </div>
    )
}
