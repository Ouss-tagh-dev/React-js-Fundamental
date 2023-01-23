import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Breadcrumb,
  Navbar,
  Container,
  Nav,
  Form,
} from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link href="#action1">Contact Us</Nav.Link>
                <Nav.Link href="#action2">Blog Us</Nav.Link>
                <Nav.Link href="#action1">Profile</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default App;
