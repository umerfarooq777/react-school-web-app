import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AcademicTrackStrand.css';
import softwaredev from './softwaredev.png';
import Image from 'react-bootstrap/Image';

function AcademicTrackStrand() {
  return(
    <Container>
    <br/>
    <hr/>
    <Row>
    <h2 className="heading"> Academic Track Strands </h2>
    </Row>
    <hr />
    <Row> 
    <Image src={softwaredev} className='heading'/>

    </Row>
    <Row>
    <Col> 
    <h2><p className="heading">STEM Academic Track </p></h2>
    </Col>
    </Row>
    <Row><Col><p>(Science, Technology, Engineering, and Mathematics)</p></Col></Row>
    <Row><Col> <p> The STEM strand deals with several disciplines of science, mathematics, and the application of digital technology appropriately. This strand can lead you to careers such as Civil Engineer, Biologist, Statistician, Software Developer, and more – careers that let you solve real-world challenges.</p> </Col> </Row>
    <Row> <h2 className="heading"> ABM Academic Track</h2></Row>
    <Row> <p> The ABM strand focuses on the basic concepts of financial management, business management, corporate operations, and other related fields. Ideal for those who are inclined to business, entrepreneurship, and other business-related careers. This strand can be your gateway to careers in management and accounting which include being a sales manager, human resource person, marketing director, project officer, bookkeeper, accounting clerk, internal auditor, and a lot more.

If you have dreamt of running a business, comfortable in dealing with numbers, and eager in striking deals, choose the ABM strand and start your bright corporate career.</p></Row>


  
    </Container>
  )

}
export default AcademicTrackStrand;