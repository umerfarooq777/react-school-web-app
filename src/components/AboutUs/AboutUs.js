import React from "react";
import { Card, Container, Row, Carousel, Image } from "react-bootstrap";
import './AboutUs.css';
import image1 from '../../img/ABOUT-US_BANNER-CTA_1.png';
import HeaderColumn from "../ColumnHeader/ColumnHeaders";



const AboutUs = () => {
  return (
    <div className='about-us'>
      <Container>
        <Row className='col-md-12'>
          <h5>FUTURE-READY LEARNING</h5>
        </Row>
        <Row>
          <div className='col-md-3 p-2'>
            <h1>Be a Sto. Rosarians</h1>
          </div>
          <div className='col-md-9 p-2'>
            <p>
            Welcome to Escuela de Sto. Rosario!

The fast growing, competitive private school in Rosario, Pasig City, Philippines.
 
"Equipping the young minds of today with the tools of tomorrow."


            </p>
          </div>
        </Row>
      </Container>

      <Carousel nextLabel="" prevLabel="">
        <Carousel.Item>
          <Image
            className='image-slider'
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            "Education is the most powerful you can use to change the world"
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className='image-slider'
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            Choose the online learning program that fits you. Enroll now!
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className='image-slider'
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
             choose the STEM strand and take part in creating the future.
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className='mb-2' >
        
        <HeaderColumn />

        <Row>
          <div className='col-md-6'>
            <Row className='w-100'>
              <h2>Our History</h2>
              <p>Escuela de Sto. Rosario began, as a Nursery and Kindergarten School in 2001, it was a transition of Rosario Child and Youth Development Center (RCYDC) since 1969 to an authorized youth and development center with pre-elementary course by Department of Education (Dep Ed). Enrolment was big in 2001 with almost three hundred students that comprises the Nursery, Kinder I, Kinder II and Grade 1. Today, the school housed in a five-storey building with 16 fully air-conditioned spacious classrooms, air-conditioned library, a canteen, a clinic, a computer room, TLE room, faculty room, a science laboratory,a basketball court and administrative, registrar/cashier offices with almost one thousand students and fifty competitive admistrative, teaching personels and staff.
 </p>
            </Row>
            <Row> 
            <p>
            Recently, another extension building was built to house the growing number of the grade school department with same facilities including fully air-conditioned classrooms.
 
The ESR Pre-school, Grade School and High School levels are all DEPED recognized and with permit to accept foreign students coming from the Beaureu of Immigration. ESR is also a proud and active member of the Pasig Private Schools Association (PAPRISA).</p></Row>
            
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

export default AboutUs;
