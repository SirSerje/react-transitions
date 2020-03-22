import React from 'react';
import './App.css';
import {  Container, Nav, Navbar, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './styles.scss'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from './pages/home'
import Contact from './pages/contact'


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/contact', name: 'Contact', Component: Contact },
];

export default class App extends React.Component {

  render() {

    return (
      <Container>
        <BrowserRouter>
          <Navbar bg="light" expand="lg">
            {routes.map(route => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Navbar>
          <div className="container">
            <Row>

              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <Container className="page">
                        <>
                          <Component/>
                        </>
                      </Container>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Row>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}
