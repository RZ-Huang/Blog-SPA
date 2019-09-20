import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';

function NavItem(props) {
  const {
    to, exact, name, children,
  } = props;

  const item = ({ match }) => (
    <button type="button" className={`nav-${name}`}>
      <Link className={match ? 'active' : ''} to={to}>
        {children}
      </Link>
    </button>
  );
  return (
    <Route path={to} exact={exact}>
      {item}
    </Route>
  );
}

function Nav() {
  return (
    <nav>
      <div className="nav-item">
        <span className="nav-title">Blog</span>
        <NavItem to="/" exact={true} name="home">
          Home
        </NavItem>
        <NavItem to="/post" name="post">
          Post
        </NavItem>
        <NavItem to="/about" name="about">
          About
        </NavItem>
      </div>
    </nav>
  );
}

export default Nav;
