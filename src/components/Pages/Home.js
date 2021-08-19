import React from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <h5>FUTURE-READY LEARNING</h5>
        </Row>
        <Row>
          <h1>Be an Sto. Rosarians</h1>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quam
            laborum id consequatur quasi itaque, doloribus perspiciatis
            voluptatum veniam quidem beatae dolore, officiis quos sint fugiat!
            Corrupti, earum ipsum dicta officia cum, quo laudantium, architecto
            quis molestiae maxime enim tempore aliquam. Qui magni accusamus,
            doloribus ad laudantium amet numquam excepturi?
          </p>
        </Row>
      </Container>
      <Container>
        <Row className="mb-2">
          <Col md={4}>
            <button type="button" className="btn btn-success btn-sm">
              Apply Now via Messenger
            </button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <iframe
          width="100%"
          height="100%"
          margin="5"
          src="https://www.youtube.com/embed/ghAWEHTTZPQ"
          title="Escuela De Sto Rosario Orientation Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
      <Card.Footer className="text bg-success">
        Dr. Sixto Antonio Ave., Pasig, Metro Manila, Philippines
      </Card.Footer>
    </div>
  );
};

export default Home;
