import React from "react";
import { Card, Container, Row, Carousel, Image } from "react-bootstrap";
import './Home.css';
import image1 from '../../img/ABOUT-US_BANNER-CTA_1.png'

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <Row>
          <h5>FUTURE-READY LEARNING</h5>
        </Row>
        <Row>
          <div className='col-md-3'>
            <h1>Be a Sto. Rosarians</h1>
          </div>
          <div className='col-md-9'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quam
              laborum id consequatur quasi itaque, doloribus perspiciatis
              voluptatum veniam quidem beatae dolore, officiis quos sint fugiat!
              Corrupti, earum ipsum dicta officia cum, quo laudantium, architecto
              quis molestiae maxime enim tempore aliquam. Qui magni accusamus,
              doloribus ad laudantium amet numquam excepturi?
            </p>
          </div>
        </Row>
      </Container>

      <Carousel nextLabel="" prevLabel="">
        <Carousel.Item>
          <Image        
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className='mb-2' >
        <Row>
          <div className='col-md-6'>
            <Row className='w-100'>
              <h2>Our Vision</h2>
              <h5>To be the school of choice for real-world learning in every community.</h5>
            </Row>
            <Row>
              <h2>Our Mission</h2>
              <h5>To transform lives through accessible and innovative education.</h5>
            </Row>
          </div>
          <div className='col-md-6 text-center'>
            <Image
              fluid
              src='https://www.apecschools.edu.ph/wp-content/uploads/2020/04/ABOUT-US_IMAGE_1.png'
              alt='apec'
              className="w-100"
            />
          </div>
        </Row>
      </Container>

      <Container>
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
      <Card.Footer className="text bg-success text-center">
        <div className='col-lg-12 text-white'>
          Dr. Sixto Antonio Ave., Pasig, Metro Manila, Philippines
        </div>
        <div className='col-lg-12'>
          <a href='https://www.facebook.com/'><i className="fab fa-facebook mx-1 text-white "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-twitter mx-1 text-white "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-youtube mx-1 text-white "></i></a>
          <a href='https://www.facebook.com/'><i className="fab fa-instagram mx-1 text-white "></i></a>
        </div>
        <div className='col-lg-12 text-white'>
          <small>2021 &copy; Escuela De Sto Rosario </small>
        </div>
      </Card.Footer>
    </div>
  );
};

export default Home;
