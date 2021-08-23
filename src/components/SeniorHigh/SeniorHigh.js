import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import shs from './shs.png';

function SeniorHigh() {
  
  return (
    <Container>
    <Row> 
    <Col  lg={6}>
    <h4 className> Senior High School</h4>
    <hr/>
    <p>
    Our Senior High School program is a two-year curriculum offering two academic strands: Accountancy, Business, and Management (ABM) strand and Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
    <p> All our Senior High School students take the Accelerated Career Experience (ACE) program, immersing them in a series of simulated work scenarios. ACE was developed in collaboration with our employment partners to ensure that the students gain skills and experience relevant to the workplace.</p>

      </Col>
    
    <Col  lg={6}>
      <Image src={shs}  />
    </Col>
    </Row>

    </Container>

  )



}

export default SeniorHigh;