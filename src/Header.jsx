import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Writepost from './components/Wrtightpost';
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Oussama</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/blog">Blog</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile">Profile</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          {/* <Route path="/">
            <App />
          </Route>  */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/writepost">
            <Writepost />
          </Route>
        </Switch>
      </Router>
    );
  }
}
