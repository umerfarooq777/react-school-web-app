import React from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.png';
import jsh from './jsh.png';

function JuniorHigh() {
  return (

    <Row>
      <Col lg={6}>
        <h3>Junior High School</h3>
        <hr />
        <p>Our Junior High School program is a four-year secondary education curriculum that prepares the students for the challenges of Senior High School. It provides students academic as well as life lessons to develop their critical thinking while having the social skills that will enable them to successfully collaborate, lead and help the community..</p>
        <br />
        <p>English is the primary medium of instruction in all subjects except Filipino. APEC Schools believes that having the confidence and good command of the language is necessary to navigate and succeed in college, career, and life. English, Math, and Science are the core subjects, while Filipino, Social Studies, and MAPEH (Music, Arts, Physical Education, and Health) are the supporting subjects.</p>

      </Col>
      <Col lg={6}>
        <Image src={jsh} thumbnail alt="A male junior high school student" />

      </Col>
    </Row>
  )

}

export default JuniorHigh;