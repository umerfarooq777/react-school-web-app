import React from "react";
import HeroCarousel from "react-hero-carousel";
import { Card, Container, Row, Carousel, Image } from "react-bootstrap";
import './Home.css';
import image1 from '../../img/ABOUT-US_BANNER-CTA_1.png'
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div className='home'>
      <HeroCarousel>
        <img
          src="https://wallpaperaccess.com/full/776480.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='1'
        />
        <img
          src="https://wallpaperaccess.com/full/776481.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='1'
        />
        <img
          src="https://wallpaperaccess.com/full/776483.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='1'
        />
      </HeroCarousel>

      <Container>
        <Row className='col-md-12 p-1'>
          <h3>FUTURE-READY LEARNING</h3>
        </Row>

        <Row className='w-100'>
          <div className='col-md-3 p-1'>
            <h1>Be a Sto. Rosarians</h1>
          </div>
          <div className='col-md-9 p-1'>
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

      <Row  className='mb-2'>
        <img src='https://www.apecschools.edu.ph/wp-content/uploads/2020/03/enrollment-cta-1-1.png' />
      </Row>

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
