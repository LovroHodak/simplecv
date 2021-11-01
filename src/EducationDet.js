import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EducationDet() {
  return (
    <div style={{ backgroundColor: "#43262D" }}>
      
      <h2 style={{ color: "white", textAlign: "center", padding: 10 }}>
        Education & Certificates
      </h2>
      <div className="aboutDetDiv">
      
        <Card
          style={{
            backgroundColor: "#43262D",
            maxWidth: 300,
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
          }}
        >
          <Link to="/" style={{ position: "absolute", margin: 15 }}>
          <Button variant="dark">Go back</Button>
        </Link>
          <Card.Img src="https://www.studentarija.net/wp-content/uploads/2011/11/filozofska-fakulteta.jpg" />
        </Card>
        

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>Faculty of Arts</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Bachelor's Degree in Philosophy
            </Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="aboutDetDiv">
        <Card
          style={{
            backgroundColor: "#43262D",
            maxWidth: 300,
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
          }}
        >
          <Card.Img src="https://comunidadblogger.net/wp-content/uploads/2021/04/iron-hack-logo.jpg" />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>IronHack</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Full-stack web-development bootcamp 
            </Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="aboutDetDiv">
        <Card
          style={{
            backgroundColor: "#43262D",
            maxWidth: 300,
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
          }}
        >
          <Card.Img src="https://cdn.coursehunter.net/course/kniga-izuchite-vselennuyu-javascript-just-javascript.jpg" />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>Just JavaScript</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Dan Abramov course
            </Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="aboutDetDiv">
        <Card
          style={{
            backgroundColor: "#43262D",
            maxWidth: 330,
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
          }}
        >
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoUqKAXKGTyPqnCbx3iXAiY6nv1e9MseGZhpcOKlcU0qHYTM9bBfpJrLoyjjIDEmpwwU&usqp=CAU" />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>FreeCodeCamp</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            Front End Development Libraries Certifications
            </Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
