import { NavDropdown, Container, Navbar } from "react-bootstrap";
import Main from "./components/Main";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Card from "react-bootstrap/Card";
import SignIn from "./components/AdminLogin";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <div>
      <Navigation />
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
