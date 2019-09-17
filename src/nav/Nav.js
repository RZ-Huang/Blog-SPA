import React from 'react';
import './Nav.css';

function NavItem(props) {
  const {
    onChange, activeView, name, children,
  } = props;

  return (
    <button type="button" className={`nav-home ${activeView === name && 'active'}`} onClick={() => onChange(name)}>
      {children}
    </button>
  );
}

function Nav(props) {
  const { onChange, activeView } = props;
  return (
    <nav>
      <div className="nav-item">
        <span className="nav-title">Blog</span>
        <NavItem onChange={onChange} activeView={activeView} name="home">
          Home
        </NavItem>
        <NavItem onChange={onChange} activeView={activeView} name="post">
          Post
        </NavItem>
        <NavItem onChange={onChange} activeView={activeView} name="about">
          About
        </NavItem>
      </div>
    </nav>
  );
}

export default Nav;
