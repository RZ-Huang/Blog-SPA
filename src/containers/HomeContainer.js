import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/home/Home.js';
import * as actions from '../actions.js';
import { getLimitPosts } from '../WebAPI.js';

const HomeContainer = (props) => <Home {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetPosts: state.nav.isLoadingGetPosts,
  posts: state.nav.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsList: (number) => {
    dispatch(actions.getPosts());
    getLimitPosts(number).then((res) => {
      dispatch(actions.getPostsSuccess(res.data));
    });
  },
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContainer),
);
