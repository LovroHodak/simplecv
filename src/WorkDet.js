import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WorkDet() {
  return (
    <div style={{ backgroundColor: "#43262D", paddingBottom: 10 }}>
      <h2 style={{ color: "white", textAlign: "center", padding: 10 }}>Work</h2>
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
          <Link to="/" style={{ position: "absolute", margin: 15 }}>
            <Button variant="dark">Go back</Button>
          </Link>
          <Card.Img
            style={{ height: 180, objectFit: "cover" }}
            src="https://tsm-static.sdn.si/oglasi/1732811000/logotip.jpg"
          />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>Lek</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Operator</Card.Subtitle>
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
          <Card.Img src="http://www.equiti.com/media/11666/amazon.jpg" />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>Amazon Logistics</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Warehouse associate
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
          <Card.Img src="https://pbs.twimg.com/profile_images/1127876464186142721/ksepSQ_q_400x400.png" />
        </Card>

        <Card className="cardDiv">
          <Card.Body>
            <Card.Title>Iustitia d.o.o.</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Sales</Card.Subtitle>
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
          <Card.Img src="https://www.studying-in-spain.com/wp-content/uploads/2013/08/students-jobs.jpg" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Direkt4in</Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Bit</Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Unicef</Card.Subtitle>
            <Card.Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
