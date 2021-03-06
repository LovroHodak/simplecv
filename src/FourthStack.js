import React from "react";
import "./FourthStack.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FourthStack() {
  return (
    <div className="fourthStack">
      <h2 className="title">Stack</h2>
     <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <Card style={{ width: "18rem", margin: 5}}>
          <Card.Img
            variant="top"
            src="https://www.tremplin-numerique.org/wp-content/uploads/2021/06/Quoi-de-neuf-dans-la-norme-ES2021-pour-JavaScript-%E2%80%93.jpg"
            style={{height: 180, objectFit: 'cover'}}
          />
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: 5 }}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--ljmYNm3i--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            style={{height: 180, objectFit: 'cover'}}
          />
          <Card.Body>
            <Card.Title>React</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: 5 }}>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
            style={{height: 180, objectFit: 'cover'}}
          />
          <Card.Body>
            <Card.Title>Node.js</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: 5 }}>
          <Card.Img
            variant="top"
            src="data:image/jpeg;base64,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"
            style={{height: 180, objectFit: 'cover'}}
          />
          <Card.Body>
            <Card.Title>MongoDB</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: 5 }}>
          <Card.Img
            variant="top"
            src="https://fungsitama.web.id/wp-content/uploads/2020/08/0_cQTv5n6xV7opBBIB.png"
            style={{height: 180, objectFit: 'cover'}}
          />
          <Card.Body>
            <Card.Title>Express</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <Link to='/stack'><button className="pushable">
        <span className="front">See all technologies</span>
      </button></Link>
    </div>
  );
}
