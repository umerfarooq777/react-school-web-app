import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Container, Navbar } from "react-bootstrap";
import Main from "./components/Main";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./custom-img.css";
import Card from "react-bootstrap/Card";
import SignIn from "./components/AdminLogin";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Escuela De Sto Rosario</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="./components/AdminLogin.js">Home</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                {/* <NavDropdown title="Programs" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Junior High School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Senior High School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href="./web_pages/contactus.html">
                  Contact Us
                </Nav.Link>
                <NavDropdown title="ESR Portal" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Admin Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Application ID
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Admission Form
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <Main />
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
          {/* <Col md={4}>
            <button type="button" className="btn btn-primary btn-sm">
              Apply Now via Messenger
            </button>
          </Col>
          <Col md={4}>
            <button type="button" className="btn btn-warning btn-sm">
              Apply Now via Messenger
            </button>
          </Col> */}
        </Row>
      </Container>
      <Card.Footer className="text bg-success">
        Dr. Sixto Antonio Ave., Pasig, Metro Manila, Philippines
      </Card.Footer>
    </div>
  );
}

export default App;
