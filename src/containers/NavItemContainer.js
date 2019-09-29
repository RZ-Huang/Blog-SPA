import React from 'react';
import { connect } from 'react-redux';
import NavItem from '../components/navItem/NavItem.js';

const NavItemContainer = (props) => <NavItem {...props} />;

const mapStateToProps = (state) => ({
  navPage: state.nav.navPage,
});

export default connect(mapStateToProps)(NavItemContainer);
