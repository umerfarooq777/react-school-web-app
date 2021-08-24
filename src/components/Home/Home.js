import React from "react";
import HeroCarousel from "react-hero-carousel";
import { Card, Container, Row, Image } from "react-bootstrap";
import './Home.css';
import esrimg from './esrimg1.jpg';
import esrimg2 from './esrimg2.jpg';
import esrimg3 from './esrbannerinfo.jpg';
const Home = () => {
  return (
    <div className='home'>
      <HeroCarousel>
        <img
          src={esrimg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='A boy having fun study'
        />
        <img
          src={esrimg2}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='A girl pursuing programming'
        />
        <img
          src={esrimg3}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt='Strong'
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
              Escuela De Sto Rosario has long been regarded as one of the top schools in Pasig City and aims to be a affordable private school of choice for Filipino Families. ESR graduates are equipped with work-ready skills. ESR also conducts upskilling acitivites on work and professional development among Senior High School students.
            </p>
          </div>
        </Row>
      </Container>

      <Row  className='mb-2'>
        <img src='https://www.apecschools.edu.ph/wp-content/uploads/2020/03/enrollment-cta-1-1.png' alt='4'/>
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
