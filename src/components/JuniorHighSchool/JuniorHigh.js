import React from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Grid from 'react-bootstrap/Grid';

function JuniorHigh() {
    return(
    
        <Row>
            <Col xs={7}>
            <h3>Senior High School</h3>
                <hr />
                <p>Our Senior High School program is a two-year curriculum offering two academic strands: Accountancy, Business, and Management (ABM) strand and Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
                <br />
                <p>All our Senior High School students take the Accelerated Career Experience (ACE) program, immersing them in a series of simulated work scenarios. ACE was developed in collaboration with our employment partners to ensure that the students gain skills and experience relevant to the workplace.</p>

            </Col>
            <Col xs={5}>
            <Image src="#/389x400" thumbnail/>

            </Col>
        </Row>
    )
    
}

export default JuniorHigh;