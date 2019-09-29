import React from 'react';
import { Link, Route } from 'react-router-dom';
import './NavItem.css';

function NavItem(props) {
  const {
    to, exact, name, children, navPage,
  } = props;
  const item = () => (
    <button type="button" className={`nav-${name}`}>
      <Link className={`nav-item ${navPage === `${to}` ? 'active' : ''}`} to={to}>
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

export default NavItem;
