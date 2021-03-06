import React from 'react'
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import CssTransitions from './pages/CssTransitions'
import PureAnimation from './pages/PureAnimation'
import './styles.scss'

const spacer = ' ';
const routes = [
  { path: '/', name: 'react-transition', Component: CssTransitions },
  { path: '/contact', name: 'pure-css', Component: PureAnimation },
];

// eslint-disable-next-line no-empty-pattern
const App = ({}) => (
  <BrowserRouter>
    {routes.map(route => (
      <Link
        key={route.path}
        as={NavLink}
        to={route.path}
        activeClassName="active"
        exact
      >
        {route.name}{spacer}
      </Link>
    ))}
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Component/>
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </BrowserRouter>);

export default App;