import React from "react";
import "./ThirdEducation.css";
import { Card, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { ContentContainer } from "./ContentContainer";

export default function ThirdEducation() {
  return (
    <div className="thirdEducation">
      <Container>

      <h2 className="title">Education & Certificates</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img style={{height: 188, objectFit: 'cover'}} variant="top" src="https://www.studentarija.net/wp-content/uploads/2011/11/filozofska-fakulteta.jpg" />
        <Card.Body>
          <Card.Title>Faculty of Arts</Card.Title>
          <Card.Text>
          Bachelor's Degree in Philosophy
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img style={{height: 188, objectFit: 'cover'}} variant="top" src='https://comunidadblogger.net/wp-content/uploads/2021/04/iron-hack-logo.jpg' />
        <Card.Body>
          <Card.Title>IronHack</Card.Title>
          <Card.Text>
          Full-stack web-development bootcamp 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img style={{height: 188, objectFit: 'cover'}} variant="top" src="https://cdn.coursehunter.net/course/kniga-izuchite-vselennuyu-javascript-just-javascript.jpg" />
        <Card.Body>
          <Card.Title>Just JavaScript</Card.Title>
          <Card.Text>
          Dan Abramov course
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", margin: 5 }}>
        <Card.Img style={{height: 188, objectFit: 'cover'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoUqKAXKGTyPqnCbx3iXAiY6nv1e9MseGZhpcOKlcU0qHYTM9bBfpJrLoyjjIDEmpwwU&usqp=CAU" />
        <Card.Body>
          <Card.Title>FreeCodeCamp</Card.Title>
          <Card.Text>
          Front End Development Libraries Certifications
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    
      <Link to='/education'><button className="pushable"  style={{ minWidth: '18rem'}}>
        <span className="front">Go in depth</span>
      </button></Link>
      </Container>
    </div>
  );
}
