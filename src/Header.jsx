import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Writepost from "./components/Wrtightpost";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <NavLink exact activeStyle={{ color: "orange" }}  to="/">
                Oussama
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink activeStyle={{ color: "orange" }} to="/about">
                    About Us
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink activeStyle={{ color: "orange" }} to="/contact">
                    Contact Us
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink activeStyle={{ color: "orange" }} to="/blog">
                    Blog
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink activeStyle={{ color: "orange" }} to="/profile">
                    Profile
                  </NavLink>
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
