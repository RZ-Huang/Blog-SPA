import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/home/Home.js';
import * as actions from '../actions.js';

const HomeContainer = (props) => <Home {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetPosts: state.nav.isLoadingGetPosts,
  posts: state.nav.posts,
});

const mapDispatchToProps = (dispatch) => ({
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
  getPostsList: (number) => {
    dispatch(actions.getLimitedPostsList(number));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContainer),
);
