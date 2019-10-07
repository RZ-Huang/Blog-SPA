import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from '../components/posts/Posts.js';
import * as actions from '../actions.js';

const PostsContainer = (props) => <Posts {...props} />;

const mapStateToProps = (state) => ({
  isLoadingGetPosts: state.nav.isLoadingGetPosts,
  posts: state.nav.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsList: () => {
    dispatch(actions.getPostsList());
  },
  handleNavPage: (page) => dispatch(actions.handleNavPage(page)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostsContainer),
);
