import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book from './book.png';
import employability from  './employability.png';
import reading from './reading.png';

const HeaderColumn = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={employability} />
                        <Card.Body>
                            <Card.Title>Employability</Card.Title>
                            <Card.Text>
                                With our Accelerated Career Experience, the students are immersed into the real working environment
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={book} />
                        <Card.Body>
                            <Card.Title>College-Ready</Card.Title>
                            <Card.Text>
                                Through the ABM and STEM strands, our students are better geared for higher education
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={reading} />
                        <Card.Body>
                            <Card.Title>Online-Learning Ready</Card.Title>
                            <Card.Text>
                                Learner-centered education through collaborative and experiential activities
                            </Card.Text>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};
export default HeaderColumn;
