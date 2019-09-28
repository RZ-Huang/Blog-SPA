import React from 'react';
import { connect } from 'react-redux';
import NavItem from '../components/navItem/NavItem.js';
import * as actions from '../actions.js';

const NavItemContainer = (props) => <NavItem {...props} />;

const mapStateToProps = (state) => ({
  navPage: state.nav.navPage,
});

const mapDispatchToProps = (dispatch) => ({
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavItemContainer);
