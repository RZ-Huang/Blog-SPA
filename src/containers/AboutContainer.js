import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import About from '../components/about/About.js';
import * as actions from '../actions.js';

const AboutContainer = (props) => <About {...props} />;

const mapDispatchToProps = (dispatch) => ({
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
});

export default withRouter(
  connect(null, mapDispatchToProps)(AboutContainer),
);
