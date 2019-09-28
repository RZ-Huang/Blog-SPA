import React from 'react';
import NavItem from '../../containers/NavItemContainer.js';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className="nav-items">
        <span className="nav-title">Blog</span>
        <NavItem to="/" exact name="home">
          Home
        </NavItem>
        <NavItem to="/post" name="post">
          Post
        </NavItem>
        <NavItem to="/about" name="about">
          About
        </NavItem>
        <NavItem to="/newpost" name="newPost">
          New Post
        </NavItem>
      </div>
    </nav>
  );
}

export default Nav;
