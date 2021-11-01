import React from "react";
import { Card, Image, Button, Container } from "react-bootstrap";
import aboutDet from "./8.jpg";
import lovroGoogle from "./Lovro.jpg";
import "./AboutDetail.css";
import { Link } from "react-router-dom";

export default function AboutDetail() {
  return (
    <div className='aboutDetDiv'>
        {/* <div className='wrapImgBack'></div> */}
        <Card className='imgDiv' style={{backgroundColor: '#43262D', border: 'none'}}>
          <Card.Img src={aboutDet} />
        </Card>
        <Link to='/'  style={{position: 'absolute', margin: 15}}><Button variant="dark">Go back</Button></Link>
        
        

        <Card className='cardDiv' >
          <Card.Body>
            <Card.Title>
              About
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
            >
              Card Subtitle
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
          <Card.Img
            variant="top"
            src={lovroGoogle}
            style={{ width: "50%", padding: 5 }}
          />
        </Card>
    </div>
  );
}



{/* <div
        style={{
          backgroundImage:
            "url(https://s.studiobinder.com/wp-content/uploads/2021/01/Best-black-and-white-portraits-by-Platon.jpg?resolution=2560,1)",
          height: 500,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minWidth: 286
        }}
      ></div> */}